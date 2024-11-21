"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const xrpc_server_1 = require("@atproto/xrpc-server");
const proxy_1 = require("../../../proxy");
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    server.com.atproto.admin.sendEmail({
        auth: ctx.authVerifier.moderator,
        handler: async ({ input }) => {
            const { content, recipientDid, subject = 'Message via your PDS', } = input.body;
            const account = await ctx.accountManager.getAccount(recipientDid, {
                includeDeactivated: true,
                includeTakenDown: true,
            });
            if (!account) {
                throw new xrpc_server_1.InvalidRequestError('Recipient not found');
            }
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                return (0, proxy_1.resultPassthru)(await ctx.entrywayAgent.com.atproto.admin.sendEmail(input.body, await ctx.serviceAuthHeaders(recipientDid, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoAdminSendEmail)));
            }
            if (!account.email) {
                throw new xrpc_server_1.InvalidRequestError('account does not have an email address');
            }
            await ctx.moderationMailer.send({ content }, { subject, to: account.email });
            return {
                encoding: 'application/json',
                body: { sent: true },
            };
        },
    });
}
//# sourceMappingURL=sendEmail.js.map