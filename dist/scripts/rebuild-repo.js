"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rebuildRepo = void 0;
const promises_1 = __importDefault(require("node:readline/promises"));
const cid_1 = require("multiformats/cid");
const repo_1 = require("@atproto/repo");
const syntax_1 = require("@atproto/syntax");
const common_1 = require("@atproto/common");
const rebuildRepo = async (ctx, args) => {
    const did = args[0];
    if (!did || !did.startsWith('did:')) {
        throw new Error('Expected DID as argument');
    }
    const memoryStore = new repo_1.MemoryBlockstore();
    const rev = common_1.TID.nextStr();
    const commit = await ctx.actorStore.transact(did, async (store) => {
        const [records, existingCids] = await Promise.all([
            listAllRecords(store),
            listExistingBlocks(store),
        ]);
        let mst = await repo_1.MST.create(memoryStore);
        for (const record of records) {
            mst = await mst.add(record.path, record.cid);
        }
        const newBlocks = new repo_1.BlockMap();
        for await (const node of mst.walk()) {
            if (node.isTree()) {
                const pointer = await node.getPointer();
                if (!existingCids.has(pointer)) {
                    const serialized = await node.serialize();
                    newBlocks.set(serialized.cid, serialized.bytes);
                }
            }
        }
        const mstCids = await mst.allCids();
        const toDelete = new repo_1.CidSet(existingCids.toList()).subtractSet(mstCids);
        const newCommit = await (0, repo_1.signCommit)({
            did,
            version: 3,
            rev,
            prev: null,
            data: await mst.getPointer(),
        }, store.repo.signingKey);
        const commitCid = await newBlocks.add(newCommit);
        console.log('Record count: ', records.length);
        console.log('Existing blocks: ', existingCids.toList().length);
        console.log('Deleting blocks:', toDelete.toList().length);
        console.log('Adding blocks: ', newBlocks.size);
        const shouldContinue = await promptContinue();
        if (!shouldContinue) {
            throw new Error('Aborted');
        }
        await store.repo.storage.deleteMany(toDelete.toList());
        await store.repo.storage.putMany(newBlocks, rev);
        await store.repo.storage.updateRoot(commitCid, rev);
        return {
            cid: commitCid,
            rev,
            since: null,
            prev: null,
            newBlocks,
            removedCids: toDelete,
        };
    });
    await ctx.accountManager.updateRepoRoot(did, commit.cid, rev);
    await ctx.sequencer.sequenceCommit(did, commit, []);
};
exports.rebuildRepo = rebuildRepo;
const listExistingBlocks = async (store) => {
    const cids = new repo_1.CidSet();
    let cursor = '';
    while (cursor !== undefined) {
        const res = await store.db.db
            .selectFrom('repo_block')
            .select('cid')
            .where('cid', '>', cursor)
            .orderBy('cid', 'asc')
            .limit(1000)
            .execute();
        for (const row of res) {
            cids.add(cid_1.CID.parse(row.cid));
        }
        cursor = res.at(-1)?.cid;
    }
    return cids;
};
const listAllRecords = async (store) => {
    const records = [];
    let cursor = '';
    while (cursor !== undefined) {
        const res = await store.db.db
            .selectFrom('record')
            .select(['uri', 'cid'])
            .where('uri', '>', cursor)
            .orderBy('uri', 'asc')
            .limit(1000)
            .execute();
        for (const row of res) {
            const parsed = new syntax_1.AtUri(row.uri);
            records.push({
                uri: row.uri,
                path: (0, repo_1.formatDataKey)(parsed.collection, parsed.rkey),
                cid: cid_1.CID.parse(row.cid),
            });
        }
        cursor = res.at(-1)?.uri;
    }
    return records;
};
const promptContinue = async () => {
    const rl = promises_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const answer = await rl.question('Continue? y/n ');
    return answer === '';
};
//# sourceMappingURL=rebuild-repo.js.map