"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const pipethrough_1 = require("../../../../pipethrough");
const lexicons_1 = require("../../../../lexicon/lexicons");
function default_1(server, ctx) {
    const { appViewAgent } = ctx;
    const { bskyAppView } = ctx.cfg;
    if (!appViewAgent || !bskyAppView)
        return;
    server.app.bsky.feed.getFeed({
        auth: ctx.authVerifier.accessStandard(),
        handler: async ({ params, auth, req }) => {
            const requester = auth.credentials.did;
            const { data: feed } = await appViewAgent.api.app.bsky.feed.getFeedGenerator({ feed: params.feed }, await ctx.appviewAuthHeaders(requester, lexicons_1.ids.AppBskyFeedGetFeedGenerator));
            return (0, pipethrough_1.pipethrough)(ctx, req, {
                iss: requester,
                aud: feed.view.did,
                lxm: lexicons_1.ids.AppBskyFeedGetFeedSkeleton,
            });
        },
    });
}
//# sourceMappingURL=getFeed.js.map