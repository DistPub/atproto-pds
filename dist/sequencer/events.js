"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tombstoneEvt = exports.accountEvt = exports.identityEvt = exports.handleEvt = exports.commitEvt = exports.commitEvtOp = exports.formatSeqTombstone = exports.formatSeqAccountEvt = exports.formatSeqIdentityEvt = exports.formatSeqHandleUpdate = exports.formatSeqCommit = void 0;
const zod_1 = require("zod");
const common_1 = require("@atproto/common");
const repo_1 = require("@atproto/repo");
const account_manager_1 = require("../account-manager");
const formatSeqCommit = async (did, commitData, writes) => {
    let tooBig;
    const ops = [];
    const blobs = new repo_1.CidSet();
    let carSlice;
    // max 200 ops or 1MB of data
    if (writes.length > 200 || commitData.newBlocks.byteSize > 1000000) {
        tooBig = true;
        const justRoot = new repo_1.BlockMap();
        const rootBlock = commitData.newBlocks.get(commitData.cid);
        if (rootBlock) {
            justRoot.set(commitData.cid, rootBlock);
        }
        carSlice = await (0, repo_1.blocksToCarFile)(commitData.cid, justRoot);
    }
    else {
        tooBig = false;
        for (const w of writes) {
            const path = w.uri.collection + '/' + w.uri.rkey;
            let cid;
            if (w.action === repo_1.WriteOpAction.Delete) {
                cid = null;
            }
            else {
                cid = w.cid;
                w.blobs.forEach((blob) => {
                    blobs.add(blob.cid);
                });
            }
            ops.push({ action: w.action, path, cid });
        }
        carSlice = await (0, repo_1.blocksToCarFile)(commitData.cid, commitData.newBlocks);
    }
    const evt = {
        rebase: false,
        tooBig,
        repo: did,
        commit: commitData.cid,
        prev: commitData.prev,
        rev: commitData.rev,
        since: commitData.since,
        ops,
        blocks: carSlice,
        blobs: blobs.toList(),
    };
    return {
        did,
        eventType: 'append',
        event: (0, common_1.cborEncode)(evt),
        sequencedAt: new Date().toISOString(),
    };
};
exports.formatSeqCommit = formatSeqCommit;
const formatSeqHandleUpdate = async (did, handle) => {
    const evt = {
        did,
        handle,
    };
    return {
        did,
        eventType: 'handle',
        event: (0, common_1.cborEncode)(evt),
        sequencedAt: new Date().toISOString(),
    };
};
exports.formatSeqHandleUpdate = formatSeqHandleUpdate;
const formatSeqIdentityEvt = async (did, handle) => {
    const evt = {
        did,
    };
    if (handle) {
        evt.handle = handle;
    }
    return {
        did,
        eventType: 'identity',
        event: (0, common_1.cborEncode)(evt),
        sequencedAt: new Date().toISOString(),
    };
};
exports.formatSeqIdentityEvt = formatSeqIdentityEvt;
const formatSeqAccountEvt = async (did, status) => {
    const evt = {
        did,
        active: status === 'active',
    };
    if (status !== account_manager_1.AccountStatus.Active) {
        evt.status = status;
    }
    return {
        did,
        eventType: 'account',
        event: (0, common_1.cborEncode)(evt),
        sequencedAt: new Date().toISOString(),
    };
};
exports.formatSeqAccountEvt = formatSeqAccountEvt;
const formatSeqTombstone = async (did) => {
    const evt = {
        did,
    };
    return {
        did,
        eventType: 'tombstone',
        event: (0, common_1.cborEncode)(evt),
        sequencedAt: new Date().toISOString(),
    };
};
exports.formatSeqTombstone = formatSeqTombstone;
exports.commitEvtOp = zod_1.z.object({
    action: zod_1.z.union([
        zod_1.z.literal('create'),
        zod_1.z.literal('update'),
        zod_1.z.literal('delete'),
    ]),
    path: zod_1.z.string(),
    cid: common_1.schema.cid.nullable(),
});
exports.commitEvt = zod_1.z.object({
    rebase: zod_1.z.boolean(),
    tooBig: zod_1.z.boolean(),
    repo: zod_1.z.string(),
    commit: common_1.schema.cid,
    prev: common_1.schema.cid.nullable(),
    rev: zod_1.z.string(),
    since: zod_1.z.string().nullable(),
    blocks: common_1.schema.bytes,
    ops: zod_1.z.array(exports.commitEvtOp),
    blobs: zod_1.z.array(common_1.schema.cid),
});
exports.handleEvt = zod_1.z.object({
    did: zod_1.z.string(),
    handle: zod_1.z.string(),
});
exports.identityEvt = zod_1.z.object({
    did: zod_1.z.string(),
    handle: zod_1.z.string().optional(),
});
exports.accountEvt = zod_1.z.object({
    did: zod_1.z.string(),
    active: zod_1.z.boolean(),
    status: zod_1.z
        .enum([
        account_manager_1.AccountStatus.Takendown,
        account_manager_1.AccountStatus.Suspended,
        account_manager_1.AccountStatus.Deleted,
        account_manager_1.AccountStatus.Deactivated,
    ])
        .optional(),
});
exports.tombstoneEvt = zod_1.z.object({
    did: zod_1.z.string(),
});
//# sourceMappingURL=events.js.map