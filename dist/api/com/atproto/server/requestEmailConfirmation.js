"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const common_1 = require("@atproto/common");
const xrpc_server_1 = require("@atproto/xrpc-server");
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    server.com.atproto.server.requestEmailConfirmation({
        rateLimit: [
            {
                durationMs: common_1.DAY,
                points: 15,
                calcKey: ({ auth }) => auth.credentials.did,
            },
            {
                durationMs: common_1.HOUR,
                points: 5,
                calcKey: ({ auth }) => auth.credentials.did,
            },
        ],
        auth: ctx.authVerifier.accessStandard({ checkTakedown: true }),
        handler: async ({ auth }) => {
            const did = auth.credentials.did;
            const account = await ctx.accountManager.getAccount(did, {
                includeDeactivated: true,
                includeTakenDown: true,
            });
            if (!account) {
                throw new xrpc_server_1.InvalidRequestError('account not found');
            }
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                await ctx.entrywayAgent.com.atproto.server.requestEmailConfirmation(undefined, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerRequestEmailConfirmation));
                return;
            }
            if (!account.email) {
                throw new xrpc_server_1.InvalidRequestError('account does not have an email address');
            }
            const token = await ctx.accountManager.createEmailToken(did, 'confirm_email');
            await ctx.mailer.sendConfirmEmail({ token }, { to: account.email });
        },
    });
}
//# sourceMappingURL=requestEmailConfirmation.js.map