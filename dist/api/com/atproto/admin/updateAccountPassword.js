"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const util_1 = require("./util");
function default_1(server, ctx) {
    server.com.atproto.admin.updateAccountPassword({
        auth: ctx.authVerifier.adminToken,
        handler: async ({ input, req }) => {
            if (ctx.entrywayAgent) {
                await ctx.entrywayAgent.com.atproto.admin.updateAccountPassword(input.body, (0, util_1.authPassthru)(req, true));
                return;
            }
            const { did, password } = input.body;
            await ctx.accountManager.updateAccountPassword({ did, password });
        },
    });
}
//# sourceMappingURL=updateAccountPassword.js.map