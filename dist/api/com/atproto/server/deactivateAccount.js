"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    server.com.atproto.server.deactivateAccount({
        auth: ctx.authVerifier.accessFull(),
        handler: async ({ auth, input }) => {
            // in the case of entryway, the full flow is deactivateAccount (PDS) -> deactivateAccount (Entryway) -> updateSubjectStatus(PDS)
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.server.deactivateAccount(input.body, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerDeactivateAccount));
                return;
            }
            const requester = auth.credentials.did;
            await ctx.accountManager.deactivateAccount(requester, input.body.deleteAfter ?? null);
            const status = await ctx.accountManager.getAccountStatus(requester);
            await ctx.sequencer.sequenceAccountEvt(requester, status);
        },
    });
}
//# sourceMappingURL=deactivateAccount.js.map