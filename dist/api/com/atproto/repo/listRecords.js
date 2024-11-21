"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const xrpc_server_1 = require("@atproto/xrpc-server");
const syntax_1 = require("@atproto/syntax");
function default_1(server, ctx) {
    server.com.atproto.repo.listRecords(async ({ params }) => {
        const { repo, collection, limit = 50, cursor, rkeyStart, rkeyEnd, reverse = false, } = params;
        const did = await ctx.accountManager.getDidForActor(repo);
        if (!did) {
            throw new xrpc_server_1.InvalidRequestError(`Could not find repo: ${repo}`);
        }
        const records = await ctx.actorStore.read(did, (store) => store.record.listRecordsForCollection({
            collection,
            limit,
            reverse,
            cursor,
            rkeyStart,
            rkeyEnd,
        }));
        const lastRecord = records.at(-1);
        const lastUri = lastRecord && new syntax_1.AtUri(lastRecord?.uri);
        return {
            encoding: 'application/json',
            body: {
                records,
                // Paginate with `before` by default, paginate with `after` when using `reverse`.
                cursor: lastUri?.rkey,
            },
        };
    });
}
//# sourceMappingURL=listRecords.js.map