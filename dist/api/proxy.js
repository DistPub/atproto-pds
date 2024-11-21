"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultPassthru = void 0;
exports.authPassthru = authPassthru;
const xrpc_server_1 = require("@atproto/xrpc-server");
const resultPassthru = (result) => {
    // @TODO pass through any headers that we always want to forward along
    return {
        encoding: 'application/json',
        body: result.data,
    };
};
exports.resultPassthru = resultPassthru;
function authPassthru(req, withEncoding) {
    const { authorization } = req.headers;
    if (authorization) {
        // DPoP requests are bound to the endpoint being called. Allowing them to be
        // proxied would require that the receiving end allows DPoP proof not
        // created for him. Since proxying is mainly there to support legacy
        // clients, and DPoP is a new feature, we don't support DPoP requests
        // through the proxy.
        // This is fine since app views are usually called using the requester's
        // credentials when "auth.credentials.type === 'access'", which is the only
        // case were DPoP is used.
        const [type] = authorization.split(' ', 1);
        if (!type) {
            throw new xrpc_server_1.InvalidRequestError('Invalid authorization header');
        }
        if (type.toLowerCase() === 'dpop' || req.headers['dpop']) {
            throw new xrpc_server_1.InvalidRequestError('DPoP requests cannot be proxied');
        }
        return {
            headers: { authorization },
            encoding: withEncoding ? 'application/json' : undefined,
        };
    }
}
//# sourceMappingURL=proxy.js.map