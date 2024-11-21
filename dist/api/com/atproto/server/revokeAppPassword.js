"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    server.com.atproto.server.revokeAppPassword({
        auth: ctx.authVerifier.accessStandard(),
        handler: async ({ auth, input }) => {
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.server.revokeAppPassword(input.body, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerRevokeAppPassword));
                return;
            }
            const requester = auth.credentials.did;
            const { name } = input.body;
            await ctx.accountManager.revokeAppPassword(requester, name);
        },
    });
}
//# sourceMappingURL=revokeAppPassword.js.map