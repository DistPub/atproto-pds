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
exports.ensureHandleServiceConstraints = exports.isServiceDomain = exports.baseNormalizeAndValidate = exports.normalizeAndValidateHandle = void 0;
const ident = __importStar(require("@atproto/syntax"));
const xrpc_server_1 = require("@atproto/xrpc-server");
const reserved_1 = require("./reserved");
const explicit_slurs_1 = require("./explicit-slurs");
const normalizeAndValidateHandle = async (opts) => {
    const { ctx, did, allowReserved } = opts;
    // base formatting validation
    const handle = (0, exports.baseNormalizeAndValidate)(opts.handle);
    // tld validation
    if (!ident.isValidTld(handle)) {
        throw new xrpc_server_1.InvalidRequestError('Handle TLD is invalid or disallowed', 'InvalidHandle');
    }
    // slur check
    if ((0, explicit_slurs_1.hasExplicitSlur)(handle)) {
        throw new xrpc_server_1.InvalidRequestError('Inappropriate language in handle', 'InvalidHandle');
    }
    if ((0, exports.isServiceDomain)(handle, ctx.cfg.identity.serviceHandleDomains)) {
        // verify constraints on a service domain
        (0, exports.ensureHandleServiceConstraints)(handle, ctx.cfg.identity.serviceHandleDomains, allowReserved);
    }
    else {
        if (opts.did === undefined) {
            throw new xrpc_server_1.InvalidRequestError('Not a supported handle domain', 'UnsupportedDomain');
        }
        // verify resolution of a non-service domain
        const resolvedDid = await ctx.idResolver.handle.resolve(handle);
        if (resolvedDid !== did) {
            throw new xrpc_server_1.InvalidRequestError('External handle did not resolve to DID');
        }
    }
    return handle;
};
exports.normalizeAndValidateHandle = normalizeAndValidateHandle;
const baseNormalizeAndValidate = (handle) => {
    try {
        const normalized = ident.normalizeAndEnsureValidHandle(handle);
        return normalized;
    }
    catch (err) {
        if (err instanceof ident.InvalidHandleError) {
            throw new xrpc_server_1.InvalidRequestError(err.message, 'InvalidHandle');
        }
        throw err;
    }
};
exports.baseNormalizeAndValidate = baseNormalizeAndValidate;
const isServiceDomain = (handle, availableUserDomains) => {
    return availableUserDomains.some((domain) => handle.endsWith(domain));
};
exports.isServiceDomain = isServiceDomain;
const ensureHandleServiceConstraints = (handle, availableUserDomains, allowReserved = false) => {
    const supportedDomain = availableUserDomains.find((domain) => handle.endsWith(domain)) ?? '';
    const front = handle.slice(0, handle.length - supportedDomain.length);
    if (front.includes('.')) {
        throw new xrpc_server_1.InvalidRequestError('Invalid characters in handle', 'InvalidHandle');
    }
    if (front.length < 3) {
        throw new xrpc_server_1.InvalidRequestError('Handle too short', 'InvalidHandle');
    }
    if (front.length > 18) {
        throw new xrpc_server_1.InvalidRequestError('Handle too long', 'InvalidHandle');
    }
    if (!allowReserved && reserved_1.reservedSubdomains[front]) {
        throw new xrpc_server_1.InvalidRequestError('Reserved handle', 'HandleNotAvailable');
    }
};
exports.ensureHandleServiceConstraints = ensureHandleServiceConstraints;
//# sourceMappingURL=index.js.map