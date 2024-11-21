"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBacklinks = exports.RecordReader = void 0;
const syntax = __importStar(require("@atproto/syntax"));
const syntax_1 = require("@atproto/syntax");
const repo_1 = require("@atproto/repo");
const cid_1 = require("multiformats/cid");
const util_1 = require("../../db/util");
const lexicons_1 = require("../../lexicon/lexicons");
class RecordReader {
    constructor(db) {
        Object.defineProperty(this, "db", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: db
        });
    }
    async recordCount() {
        const res = await this.db.db
            .selectFrom('record')
            .select(util_1.countAll.as('count'))
            .executeTakeFirst();
        return res?.count ?? 0;
    }
    async listCollections() {
        const collections = await this.db.db
            .selectFrom('record')
            .select('collection')
            .groupBy('collection')
            .execute();
        return collections.map((row) => row.collection);
    }
    async listRecordsForCollection(opts) {
        const { collection, limit, reverse, cursor, rkeyStart, rkeyEnd, includeSoftDeleted = false, } = opts;
        const { ref } = this.db.db.dynamic;
        let builder = this.db.db
            .selectFrom('record')
            .innerJoin('repo_block', 'repo_block.cid', 'record.cid')
            .where('record.collection', '=', collection)
            .if(!includeSoftDeleted, (qb) => qb.where((0, util_1.notSoftDeletedClause)(ref('record'))))
            .orderBy('record.rkey', reverse ? 'asc' : 'desc')
            .limit(limit)
            .selectAll();
        // prioritize cursor but fall back to soon-to-be-depcreated rkey start/end
        if (cursor !== undefined) {
            if (reverse) {
                builder = builder.where('record.rkey', '>', cursor);
            }
            else {
                builder = builder.where('record.rkey', '<', cursor);
            }
        }
        else {
            if (rkeyStart !== undefined) {
                builder = builder.where('record.rkey', '>', rkeyStart);
            }
            if (rkeyEnd !== undefined) {
                builder = builder.where('record.rkey', '<', rkeyEnd);
            }
        }
        const res = await builder.execute();
        return res.map((row) => {
            return {
                uri: row.uri,
                cid: row.cid,
                value: (0, repo_1.cborToLexRecord)(row.content),
            };
        });
    }
    async getRecord(uri, cid, includeSoftDeleted = false) {
        const { ref } = this.db.db.dynamic;
        let builder = this.db.db
            .selectFrom('record')
            .innerJoin('repo_block', 'repo_block.cid', 'record.cid')
            .where('record.uri', '=', uri.toString())
            .selectAll()
            .if(!includeSoftDeleted, (qb) => qb.where((0, util_1.notSoftDeletedClause)(ref('record'))));
        if (cid) {
            builder = builder.where('record.cid', '=', cid);
        }
        const record = await builder.executeTakeFirst();
        if (!record)
            return null;
        return {
            uri: record.uri,
            cid: record.cid,
            value: (0, repo_1.cborToLexRecord)(record.content),
            indexedAt: record.indexedAt,
            takedownRef: record.takedownRef ? record.takedownRef.toString() : null,
        };
    }
    async hasRecord(uri, cid, includeSoftDeleted = false) {
        const { ref } = this.db.db.dynamic;
        let builder = this.db.db
            .selectFrom('record')
            .select('uri')
            .where('record.uri', '=', uri.toString())
            .if(!includeSoftDeleted, (qb) => qb.where((0, util_1.notSoftDeletedClause)(ref('record'))));
        if (cid) {
            builder = builder.where('record.cid', '=', cid);
        }
        const record = await builder.executeTakeFirst();
        return !!record;
    }
    async getRecordTakedownStatus(uri) {
        const res = await this.db.db
            .selectFrom('record')
            .select('takedownRef')
            .where('uri', '=', uri.toString())
            .executeTakeFirst();
        if (!res)
            return null;
        return res.takedownRef
            ? { applied: true, ref: res.takedownRef }
            : { applied: false };
    }
    async getCurrentRecordCid(uri) {
        const res = await this.db.db
            .selectFrom('record')
            .select('cid')
            .where('uri', '=', uri.toString())
            .executeTakeFirst();
        return res ? cid_1.CID.parse(res.cid) : null;
    }
    async getRecordBacklinks(opts) {
        const { collection, path, linkTo } = opts;
        return await this.db.db
            .selectFrom('record')
            .innerJoin('backlink', 'backlink.uri', 'record.uri')
            .where('backlink.path', '=', path)
            .where('backlink.linkTo', '=', linkTo)
            .where('record.collection', '=', collection)
            .selectAll('record')
            .execute();
    }
    // @NOTE this logic is a placeholder until we allow users to specify these constraints themselves.
    // Ensures that we don't end-up with duplicate likes, reposts, and follows from race conditions.
    async getBacklinkConflicts(uri, record) {
        const recordBacklinks = (0, exports.getBacklinks)(uri, record);
        const conflicts = await Promise.all(recordBacklinks.map((backlink) => this.getRecordBacklinks({
            collection: uri.collection,
            path: backlink.path,
            linkTo: backlink.linkTo,
        })));
        return conflicts
            .flat()
            .map(({ rkey }) => syntax_1.AtUri.make(uri.hostname, uri.collection, rkey));
    }
}
exports.RecordReader = RecordReader;
// @NOTE in the future this can be replaced with a more generic routine that pulls backlinks based on lex docs.
// For now we just want to ensure we're tracking links from follows, blocks, likes, and reposts.
const getBacklinks = (uri, record) => {
    if (record?.['$type'] === lexicons_1.ids.AppBskyGraphFollow ||
        record?.['$type'] === lexicons_1.ids.AppBskyGraphBlock) {
        const subject = record['subject'];
        if (typeof subject !== 'string') {
            return [];
        }
        try {
            syntax.ensureValidDid(subject);
        }
        catch {
            return [];
        }
        return [
            {
                uri: uri.toString(),
                path: 'subject',
                linkTo: subject,
            },
        ];
    }
    if (record?.['$type'] === lexicons_1.ids.AppBskyFeedLike ||
        record?.['$type'] === lexicons_1.ids.AppBskyFeedRepost) {
        const subject = record['subject'];
        if (typeof subject?.['uri'] !== 'string') {
            return [];
        }
        try {
            (0, syntax_1.ensureValidAtUri)(subject['uri']);
        }
        catch {
            return [];
        }
        return [
            {
                uri: uri.toString(),
                path: 'subject.uri',
                linkTo: subject['uri'],
            },
        ];
    }
    return [];
};
exports.getBacklinks = getBacklinks;
//# sourceMappingURL=reader.js.map