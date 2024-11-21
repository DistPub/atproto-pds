"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(server, ctx) {
    if (!ctx.cfg.bskyAppView)
        return;
    server.app.bsky.actor.getPreferences({
        auth: ctx.authVerifier.accessStandard(),
        handler: async ({ auth }) => {
            const requester = auth.credentials.did;
            const preferences = await ctx.actorStore.read(requester, (store) => store.pref.getPreferences('app.bsky', auth.credentials.scope));
            return {
                encoding: 'application/json',
                body: { preferences },
            };
        },
    });
}
//# sourceMappingURL=getPreferences.js.map