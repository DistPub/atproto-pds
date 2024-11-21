"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const cid_1 = require("multiformats/cid");
const xrpc_server_1 = require("@atproto/xrpc-server");
const syntax_1 = require("@atproto/syntax");
const repo_1 = require("../../../../repo");
const repo_2 = require("../../../../repo");
function default_1(server, ctx) {
    server.com.atproto.repo.createRecord({
        auth: ctx.authVerifier.accessStandard({
            checkTakedown: true,
            checkDeactivated: true,
        }),
        rateLimit: [
            {
                name: 'repo-write-hour',
                calcKey: ({ auth }) => auth.credentials.did,
                calcPoints: () => 3,
            },
            {
                name: 'repo-write-day',
                calcKey: ({ auth }) => auth.credentials.did,
                calcPoints: () => 3,
            },
        ],
        handler: async ({ input, auth }) => {
            const { repo, collection, rkey, record, swapCommit, validate } = input.body;
            const account = await ctx.accountManager.getAccount(repo, {
                includeDeactivated: true,
            });
            if (!account) {
                throw new xrpc_server_1.InvalidRequestError(`Could not find repo: ${repo}`);
            }
            else if (account.deactivatedAt) {
                throw new xrpc_server_1.InvalidRequestError('Account is deactivated');
            }
            const did = account.did;
            if (did !== auth.credentials.did) {
                throw new xrpc_server_1.AuthRequiredError();
            }
            const swapCommitCid = swapCommit ? cid_1.CID.parse(swapCommit) : undefined;
            let write;
            try {
                write = await (0, repo_1.prepareCreate)({
                    did,
                    collection,
                    record,
                    rkey,
                    validate,
                });
            }
            catch (err) {
                if (err instanceof repo_2.InvalidRecordError) {
                    throw new xrpc_server_1.InvalidRequestError(err.message);
                }
                if (err instanceof syntax_1.InvalidRecordKeyError) {
                    throw new xrpc_server_1.InvalidRequestError(err.message);
                }
                throw err;
            }
            const { commit, writes } = await ctx.actorStore.transact(did, async (actorTxn) => {
                const backlinkConflicts = validate !== false
                    ? await actorTxn.record.getBacklinkConflicts(write.uri, write.record)
                    : [];
                const backlinkDeletions = backlinkConflicts.map((uri) => (0, repo_1.prepareDelete)({
                    did: uri.hostname,
                    collection: uri.collection,
                    rkey: uri.rkey,
                }));
                const writes = [...backlinkDeletions, write];
                try {
                    const commit = await actorTxn.repo.processWrites(writes, swapCommitCid);
                    return { commit, writes };
                }
                catch (err) {
                    if (err instanceof repo_2.BadCommitSwapError) {
                        throw new xrpc_server_1.InvalidRequestError(err.message, 'InvalidSwap');
                    }
                    throw err;
                }
            });
            await ctx.sequencer.sequenceCommit(did, commit, writes);
            await ctx.accountManager.updateRepoRoot(did, commit.cid, commit.rev);
            return {
                encoding: 'application/json',
                body: {
                    uri: write.uri.toString(),
                    cid: write.cid.toString(),
                    commit: {
                        cid: commit.cid.toString(),
                        rev: commit.rev,
                    },
                    validationStatus: write.validationStatus,
                },
            };
        },
    });
}
//# sourceMappingURL=createRecord.js.map