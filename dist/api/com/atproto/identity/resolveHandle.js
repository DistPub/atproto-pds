"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const xrpc_server_1 = require("@atproto/xrpc-server");
const ident = __importStar(require("@atproto/syntax"));
function default_1(server, ctx) {
    server.com.atproto.identity.resolveHandle(async ({ params }) => {
        let handle;
        try {
            handle = ident.normalizeAndEnsureValidHandle(params.handle);
        }
        catch (err) {
            if (err instanceof ident.InvalidHandleError) {
                throw new xrpc_server_1.InvalidRequestError(err.message, 'InvalidHandle');
            }
            else {
                throw err;
            }
        }
        let did;
        const user = await ctx.accountManager.getAccount(handle);
        if (user) {
            did = user.did;
        }
        else {
            const supportedHandle = ctx.cfg.identity.serviceHandleDomains.some((host) => handle.endsWith(host) || handle === host.slice(1));
            // this should be in our DB & we couldn't find it, so fail
            if (supportedHandle) {
                throw new xrpc_server_1.InvalidRequestError('Unable to resolve handle');
            }
        }
        // this is not someone on our server, but we help with resolving anyway
        if (!did && ctx.appViewAgent) {
            did = await tryResolveFromAppView(ctx.appViewAgent, handle);
        }
        if (!did) {
            did = await ctx.idResolver.handle.resolve(handle);
        }
        if (!did) {
            throw new xrpc_server_1.InvalidRequestError('Unable to resolve handle');
        }
        return {
            encoding: 'application/json',
            body: { did },
        };
    });
}
async function tryResolveFromAppView(agent, handle) {
    try {
        const result = await agent.api.com.atproto.identity.resolveHandle({
            handle,
        });
        return result.data.did;
    }
    catch (_err) {
        return;
    }
}
//# sourceMappingURL=resolveHandle.js.map