"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const xrpc_server_1 = require("@atproto/xrpc-server");
const common_1 = require("@atproto/common");
const pipethrough_1 = require("../../../../pipethrough");
function default_1(server, ctx) {
    server.com.atproto.server.getServiceAuth({
        auth: ctx.authVerifier.accessStandard(),
        handler: async ({ params, auth }) => {
            const did = auth.credentials.did;
            const { aud, lxm = null } = params;
            const exp = params.exp ? params.exp * 1000 : undefined;
            if (exp) {
                const diff = exp - Date.now();
                if (diff < 0) {
                    throw new xrpc_server_1.InvalidRequestError('expiration is in past', 'BadExpiration');
                }
                else if (diff > common_1.HOUR) {
                    throw new xrpc_server_1.InvalidRequestError('cannot request a token with an expiration more than an hour in the future', 'BadExpiration');
                }
                else if (!lxm && diff > common_1.MINUTE) {
                    throw new xrpc_server_1.InvalidRequestError('cannot request a method-less token with an expiration more than a minute in the future', 'BadExpiration');
                }
            }
            if (lxm) {
                if (pipethrough_1.PROTECTED_METHODS.has(lxm)) {
                    throw new xrpc_server_1.InvalidRequestError(`cannot request a service auth token for the following protected method: ${lxm}`);
                }
                if (!auth.credentials.isPrivileged && pipethrough_1.PRIVILEGED_METHODS.has(lxm)) {
                    throw new xrpc_server_1.InvalidRequestError(`insufficient access to request a service auth token for the following method: ${lxm}`);
                }
            }
            const keypair = await ctx.actorStore.keypair(did);
            const token = await (0, xrpc_server_1.createServiceJwt)({
                iss: did,
                aud,
                exp,
                lxm,
                keypair,
            });
            return {
                encoding: 'application/json',
                body: {
                    token,
                },
            };
        },
    });
}
//# sourceMappingURL=getServiceAuth.js.map