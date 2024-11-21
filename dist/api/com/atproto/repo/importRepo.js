"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBlobRefs = void 0;
exports.default = default_1;
const common_1 = require("@atproto/common");
const repo_1 = require("@atproto/repo");
const xrpc_server_1 = require("@atproto/xrpc-server");
const cid_1 = require("multiformats/cid");
const p_queue_1 = __importDefault(require("p-queue"));
const syntax_1 = require("@atproto/syntax");
const lexicon_1 = require("@atproto/lexicon");
function default_1(server, ctx) {
    server.com.atproto.repo.importRepo({
        auth: ctx.authVerifier.accessFull({
            checkTakedown: true,
        }),
        handler: async ({ input, auth }) => {
            const did = auth.credentials.did;
            if (!ctx.cfg.service.acceptingImports) {
                throw new xrpc_server_1.InvalidRequestError('Service is not accepting repo imports');
            }
            await ctx.actorStore.transact(did, (store) => importRepo(store, input.body));
        },
    });
}
const importRepo = async (actorStore, incomingCar) => {
    const now = new Date().toISOString();
    const rev = common_1.TID.nextStr();
    const did = actorStore.repo.did;
    const { roots, blocks } = await (0, repo_1.readCarStream)(incomingCar);
    if (roots.length !== 1) {
        throw new xrpc_server_1.InvalidRequestError('expected one root');
    }
    const currRoot = await actorStore.db.db
        .selectFrom('repo_root')
        .selectAll()
        .executeTakeFirst();
    const currRepo = currRoot
        ? await repo_1.Repo.load(actorStore.repo.storage, cid_1.CID.parse(currRoot.cid))
        : null;
    const diff = await (0, repo_1.verifyDiff)(currRepo, blocks, roots[0], undefined, undefined, { ensureLeaves: false });
    diff.commit.rev = rev;
    await actorStore.repo.storage.applyCommit(diff.commit, currRepo === null);
    const recordQueue = new p_queue_1.default({ concurrency: 50 });
    const controller = new AbortController();
    for (const write of diff.writes) {
        recordQueue
            .add(async () => {
            const uri = syntax_1.AtUri.make(did, write.collection, write.rkey);
            if (write.action === repo_1.WriteOpAction.Delete) {
                await actorStore.record.deleteRecord(uri);
            }
            else {
                let parsedRecord;
                try {
                    const parsed = await (0, repo_1.getAndParseRecord)(blocks, write.cid);
                    parsedRecord = parsed.record;
                }
                catch {
                    throw new xrpc_server_1.InvalidRequestError(`Could not parse record at '${write.collection}/${write.rkey}'`);
                }
                const indexRecord = actorStore.record.indexRecord(uri, write.cid, parsedRecord, write.action, rev, now);
                const recordBlobs = (0, exports.findBlobRefs)(parsedRecord);
                const blobValues = recordBlobs.map((cid) => ({
                    recordUri: uri.toString(),
                    blobCid: cid.ref.toString(),
                }));
                const indexRecordBlobs = blobValues.length > 0
                    ? actorStore.db.db
                        .insertInto('record_blob')
                        .values(blobValues)
                        .onConflict((oc) => oc.doNothing())
                        .execute()
                    : Promise.resolve();
                await Promise.all([indexRecord, indexRecordBlobs]);
            }
        }, { signal: controller.signal })
            .catch((err) => controller.abort(err));
    }
    await recordQueue.onIdle();
    controller.signal.throwIfAborted();
};
const findBlobRefs = (val, layer = 0) => {
    if (layer > 32) {
        return [];
    }
    // walk arrays
    if (Array.isArray(val)) {
        return val.flatMap((item) => (0, exports.findBlobRefs)(item, layer + 1));
    }
    // objects
    if (val && typeof val === 'object') {
        // convert blobs, leaving the original encoding so that we don't change CIDs on re-encode
        if (val instanceof lexicon_1.BlobRef) {
            return [val];
        }
        // retain cids & bytes
        if (cid_1.CID.asCID(val) || val instanceof Uint8Array) {
            return [];
        }
        return Object.values(val).flatMap((item) => (0, exports.findBlobRefs)(item, layer + 1));
    }
    // pass through
    return [];
};
exports.findBlobRefs = findBlobRefs;
//# sourceMappingURL=importRepo.js.map