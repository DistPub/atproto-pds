"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const common_1 = require("@atproto/common");
const syntax_1 = require("@atproto/syntax");
const account_manager_1 = require("../../../../account-manager");
const proxy_1 = require("../../../proxy");
const util_1 = require("./util");
function default_1(server, ctx) {
    server.com.atproto.server.createSession({
        rateLimit: [
            {
                durationMs: common_1.DAY,
                points: 300,
                calcKey: ({ input, req }) => `${input.body.identifier}-${req.ip}`,
            },
            {
                durationMs: 5 * common_1.MINUTE,
                points: 30,
                calcKey: ({ input, req }) => `${input.body.identifier}-${req.ip}`,
            },
        ],
        handler: async ({ input, req }) => {
            if (ctx.entrywayAgent) {
                return (0, proxy_1.resultPassthru)(await ctx.entrywayAgent.com.atproto.server.createSession(input.body, (0, proxy_1.authPassthru)(req, true)));
            }
            const { user, appPassword } = await ctx.accountManager.login(input.body);
            const [{ accessJwt, refreshJwt }, didDoc] = await Promise.all([
                ctx.accountManager.createSession(user.did, appPassword),
                (0, util_1.didDocForSession)(ctx, user.did),
            ]);
            const { status, active } = (0, account_manager_1.formatAccountStatus)(user);
            return {
                encoding: 'application/json',
                body: {
                    did: user.did,
                    didDoc,
                    handle: user.handle ?? syntax_1.INVALID_HANDLE,
                    email: user.email ?? undefined,
                    emailConfirmed: !!user.emailConfirmedAt,
                    accessJwt,
                    refreshJwt,
                    active,
                    status,
                },
            };
        },
    });
}
//# sourceMappingURL=createSession.js.map