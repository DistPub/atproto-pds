"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const node_assert_1 = __importDefault(require("node:assert"));
const lexicons_1 = require("../../../../lexicon/lexicons");
const proxy_1 = require("../../../proxy");
function default_1(server, ctx) {
    server.com.atproto.server.createAppPassword({
        auth: ctx.authVerifier.accessFull({
            checkTakedown: true,
        }),
        handler: async ({ auth, input }) => {
            if (ctx.entrywayAgent) {
                (0, node_assert_1.default)(ctx.cfg.entryway);
                return (0, proxy_1.resultPassthru)(await ctx.entrywayAgent.com.atproto.server.createAppPassword(input.body, await ctx.serviceAuthHeaders(auth.credentials.did, ctx.cfg.entryway.did, lexicons_1.ids.ComAtprotoServerCreateAppPassword)));
            }
            const { name } = input.body;
            const appPassword = await ctx.accountManager.createAppPassword(auth.credentials.did, name, input.body.privileged ?? false);
            return {
                encoding: 'application/json',
                body: appPassword,
            };
        },
    });
}
//# sourceMappingURL=createAppPassword.js.map