"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const common_1 = require("@atproto/common");
const proxy_1 = require("../../../proxy");
function default_1(server, ctx) {
    server.com.atproto.server.resetPassword({
        rateLimit: [
            {
                durationMs: 5 * common_1.MINUTE,
                points: 50,
            },
        ],
        handler: async ({ input, req }) => {
            if (ctx.entrywayAgent) {
                await ctx.entrywayAgent.com.atproto.server.resetPassword(input.body, (0, proxy_1.authPassthru)(req, true));
                return;
            }
            const { token, password } = input.body;
            await ctx.accountManager.resetPassword({ token, password });
        },
    });
}
//# sourceMappingURL=resetPassword.js.map