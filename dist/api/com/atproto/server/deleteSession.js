"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const proxy_1 = require("../../../proxy");
function default_1(server, ctx) {
    const { entrywayAgent } = ctx;
    if (entrywayAgent) {
        server.com.atproto.server.deleteSession(async (reqCtx) => {
            await entrywayAgent.com.atproto.server.deleteSession(undefined, (0, proxy_1.authPassthru)(reqCtx.req));
        });
    }
    else {
        server.com.atproto.server.deleteSession({
            auth: ctx.authVerifier.refreshExpired,
            handler: async ({ auth }) => {
                await ctx.accountManager.revokeRefreshToken(auth.credentials.tokenId);
            },
        });
    }
}
//# sourceMappingURL=deleteSession.js.map