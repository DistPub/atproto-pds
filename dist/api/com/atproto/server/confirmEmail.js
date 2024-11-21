"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const xrpc_server_1 = require("@atproto/xrpc-server");
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    server.com.atproto.server.confirmEmail({
        auth: ctx.authVerifier.accessStandard({ checkTakedown: true }),
        handler: async ({ auth, input }) => {
            const did = auth.credentials.did;
            const user = await ctx.accountManager.getAccount(did, {
                includeDeactivated: true,
            });
            if (!user) {
                throw new xrpc_server_1.InvalidRequestError('user not found', 'AccountNotFound');
            }
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.server.confirmEmail(input.body, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerConfirmEmail));
                return;
            }
            const { token, email } = input.body;
            if (user.email !== email.toLowerCase()) {
                throw new xrpc_server_1.InvalidRequestError('invalid email', 'InvalidEmail');
            }
            await ctx.accountManager.confirmEmail({ did, token });
        },
    });
}
//# sourceMappingURL=confirmEmail.js.map