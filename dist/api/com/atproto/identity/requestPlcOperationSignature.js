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
    server.com.atproto.identity.requestPlcOperationSignature({
        auth: ctx.authVerifier.accessFull(),
        handler: async ({ auth }) => {
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.identity.requestPlcOperationSignature(undefined, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoIdentityRequestPlcOperationSignature));
                return;
            }
            const did = auth.credentials.did;
            const account = await ctx.accountManager.getAccount(did, {
                includeDeactivated: true,
                includeTakenDown: true,
            });
            if (!account) {
                throw new xrpc_server_1.InvalidRequestError('account not found');
            }
            else if (!account.email) {
                throw new xrpc_server_1.InvalidRequestError('account does not have an email address');
            }
            const token = await ctx.accountManager.createEmailToken(did, 'plc_operation');
            await ctx.mailer.sendPlcOperation({ token }, { to: account.email });
        },
    });
}
//# sourceMappingURL=requestPlcOperationSignature.js.map