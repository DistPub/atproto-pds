"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const repo_1 = require("@atproto/repo");
const syntax_1 = require("@atproto/syntax");
const xrpc_server_1 = require("@atproto/xrpc-server");
const lexicons_1 = require("../../../../lexicon/lexicons");
const util_1 = require("./util");
function default_1(server, ctx) {
    server.com.atproto.server.activateAccount({
        auth: ctx.authVerifier.accessFull(),
        handler: async ({ auth }) => {
            // in the case of entryway, the full flow is activateAccount (PDS) -> activateAccount (Entryway) -> updateSubjectStatus(PDS)
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.server.activateAccount(undefined, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerActivateAccount));
                return;
            }
            const requester = auth.credentials.did;
            await (0, util_1.assertValidDidDocumentForService)(ctx, requester);
            const account = await ctx.accountManager.getAccount(requester, {
                includeDeactivated: true,
            });
            if (!account) {
                throw new xrpc_server_1.InvalidRequestError('user not found', 'AccountNotFound');
            }
            await ctx.accountManager.activateAccount(requester);
            const commitData = await ctx.actorStore.read(requester, async (store) => {
                const root = await store.repo.storage.getRootDetailed();
                const blocks = await store.repo.storage.getBlocks([root.cid]);
                return {
                    cid: root.cid,
                    rev: root.rev,
                    since: null,
                    prev: null,
                    newBlocks: blocks.blocks,
                    removedCids: new repo_1.CidSet(),
                };
            });
            // @NOTE: we're over-emitting for now for backwards compatibility, can reduce this in the future
            const status = await ctx.accountManager.getAccountStatus(requester);
            await ctx.sequencer.sequenceAccountEvt(requester, status);
            await ctx.sequencer.sequenceHandleUpdate(requester, account.handle ?? syntax_1.INVALID_HANDLE);
            await ctx.sequencer.sequenceCommit(requester, commitData, []);
        },
    });
}
//# sourceMappingURL=activateAccount.js.map