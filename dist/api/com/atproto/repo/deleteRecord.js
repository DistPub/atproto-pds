"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const xrpc_server_1 = require("@atproto/xrpc-server");
const repo_1 = require("../../../../repo");
const repo_2 = require("../../../../repo");
const cid_1 = require("multiformats/cid");
function default_1(server, ctx) {
    server.com.atproto.repo.deleteRecord({
        auth: ctx.authVerifier.accessStandard({
            checkTakedown: true,
            checkDeactivated: true,
        }),
        rateLimit: [
            {
                name: 'repo-write-hour',
                calcKey: ({ auth }) => auth.credentials.did,
                calcPoints: () => 1,
            },
            {
                name: 'repo-write-day',
                calcKey: ({ auth }) => auth.credentials.did,
                calcPoints: () => 1,
            },
        ],
        handler: async ({ input, auth }) => {
            const { repo, collection, rkey, swapCommit, swapRecord } = input.body;
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
            const swapRecordCid = swapRecord ? cid_1.CID.parse(swapRecord) : undefined;
            const write = (0, repo_1.prepareDelete)({
                did,
                collection,
                rkey,
                swapCid: swapRecordCid,
            });
            const commit = await ctx.actorStore.transact(did, async (actorTxn) => {
                const record = await actorTxn.record.getRecord(write.uri, null, true);
                if (!record) {
                    return null; // No-op if record already doesn't exist
                }
                try {
                    return await actorTxn.repo.processWrites([write], swapCommitCid);
                }
                catch (err) {
                    if (err instanceof repo_2.BadCommitSwapError ||
                        err instanceof repo_2.BadRecordSwapError) {
                        throw new xrpc_server_1.InvalidRequestError(err.message, 'InvalidSwap');
                    }
                    else {
                        throw err;
                    }
                }
            });
            if (commit !== null) {
                await ctx.sequencer.sequenceCommit(did, commit, [write]);
                await ctx.accountManager.updateRepoRoot(did, commit.cid, commit.rev);
            }
            return {
                encoding: 'application/json',
                body: {
                    commit: commit
                        ? {
                            cid: commit.cid.toString(),
                            rev: commit.rev,
                        }
                        : undefined,
                },
            };
        },
    });
}
//# sourceMappingURL=deleteRecord.js.map