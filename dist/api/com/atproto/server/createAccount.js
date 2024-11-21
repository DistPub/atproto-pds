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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const common_1 = require("@atproto/common");
const identity_1 = require("@atproto/identity");
const xrpc_server_1 = require("@atproto/xrpc-server");
const crypto_1 = require("@atproto/crypto");
const plc = __importStar(require("@did-plc/lib"));
const disposable_email_1 = __importDefault(require("disposable-email"));
const handle_1 = require("../../../../handle");
const util_1 = require("./util");
const account_manager_1 = require("../../../../account-manager");
function default_1(server, ctx) {
    server.com.atproto.server.createAccount({
        rateLimit: {
            durationMs: 5 * common_1.MINUTE,
            points: 100,
        },
        auth: ctx.authVerifier.userServiceAuthOptional,
        handler: async ({ input, auth, req }) => {
            const requester = auth.credentials?.did ?? null;
            const { did, handle, email, password, inviteCode, signingKey, plcOp, deactivated, } = ctx.entrywayAgent
                ? await validateInputsForEntrywayPds(ctx, input.body)
                : await validateInputsForLocalPds(ctx, input.body, requester);
            let didDoc;
            let creds;
            await ctx.actorStore.create(did, signingKey);
            try {
                const commit = await ctx.actorStore.transact(did, (actorTxn) => actorTxn.repo.createRepo([]));
                // Generate a real did with PLC
                if (plcOp) {
                    try {
                        await ctx.plcClient.sendOperation(did, plcOp);
                    }
                    catch (err) {
                        req.log.error({ didKey: ctx.plcRotationKey.did(), handle }, 'failed to create did:plc');
                        throw err;
                    }
                }
                didDoc = await (0, util_1.safeResolveDidDoc)(ctx, did, true);
                creds = await ctx.accountManager.createAccount({
                    did,
                    handle,
                    email,
                    password,
                    repoCid: commit.cid,
                    repoRev: commit.rev,
                    inviteCode,
                    deactivated,
                });
                if (!deactivated) {
                    await ctx.sequencer.sequenceIdentityEvt(did, handle);
                    await ctx.sequencer.sequenceAccountEvt(did, account_manager_1.AccountStatus.Active);
                    await ctx.sequencer.sequenceCommit(did, commit, []);
                }
                await ctx.accountManager.updateRepoRoot(did, commit.cid, commit.rev);
                await ctx.actorStore.clearReservedKeypair(signingKey.did(), did);
            }
            catch (err) {
                // this will only be reached if the actor store _did not_ exist before
                await ctx.actorStore.destroy(did);
                throw err;
            }
            return {
                encoding: 'application/json',
                body: {
                    handle,
                    did: did,
                    didDoc,
                    accessJwt: creds.accessJwt,
                    refreshJwt: creds.refreshJwt,
                },
            };
        },
    });
}
const validateInputsForEntrywayPds = async (ctx, input) => {
    const { did, plcOp } = input;
    const handle = (0, handle_1.baseNormalizeAndValidate)(input.handle);
    if (!did || !input.plcOp) {
        throw new xrpc_server_1.InvalidRequestError('non-entryway pds requires bringing a DID and plcOp');
    }
    if (!common_1.check.is(plcOp, plc.def.operation)) {
        throw new xrpc_server_1.InvalidRequestError('invalid plc operation', 'IncompatibleDidDoc');
    }
    const plcRotationKey = ctx.cfg.entryway?.plcRotationKey;
    if (!plcRotationKey || !plcOp.rotationKeys.includes(plcRotationKey)) {
        throw new xrpc_server_1.InvalidRequestError('PLC DID does not include service rotation key', 'IncompatibleDidDoc');
    }
    try {
        await plc.assureValidOp(plcOp);
        await plc.assureValidSig([plcRotationKey], plcOp);
    }
    catch (err) {
        throw new xrpc_server_1.InvalidRequestError('invalid plc operation', 'IncompatibleDidDoc');
    }
    const doc = plc.formatDidDoc({ did, ...plcOp });
    const data = (0, identity_1.ensureAtpDocument)(doc);
    let signingKey;
    if (input.did) {
        signingKey = await ctx.actorStore.getReservedKeypair(input.did);
    }
    if (!signingKey) {
        signingKey = await ctx.actorStore.getReservedKeypair(data.signingKey);
    }
    if (!signingKey) {
        throw new xrpc_server_1.InvalidRequestError('reserved signing key does not exist');
    }
    validateAtprotoData(data, {
        handle,
        pds: ctx.cfg.service.publicUrl,
        signingKey: signingKey.did(),
    });
    return {
        did,
        handle,
        email: undefined,
        password: undefined,
        inviteCode: undefined,
        signingKey,
        plcOp,
        deactivated: false,
    };
};
const validateInputsForLocalPds = async (ctx, input, requester) => {
    const { email, password, inviteCode } = input;
    if (input.plcOp) {
        throw new xrpc_server_1.InvalidRequestError('Unsupported input: "plcOp"');
    }
    if (ctx.cfg.invites.required && !inviteCode) {
        throw new xrpc_server_1.InvalidRequestError('No invite code provided', 'InvalidInviteCode');
    }
    if (!email) {
        throw new xrpc_server_1.InvalidRequestError('Email is required');
    }
    else if (!disposable_email_1.default.validate(email)) {
        throw new xrpc_server_1.InvalidRequestError('This email address is not supported, please use a different email.');
    }
    // normalize & ensure valid handle
    const handle = await (0, handle_1.normalizeAndValidateHandle)({
        ctx,
        handle: input.handle,
        did: input.did,
    });
    // check that the invite code still has uses
    if (ctx.cfg.invites.required && inviteCode) {
        await ctx.accountManager.ensureInviteIsAvailable(inviteCode);
    }
    // check that the handle and email are available
    const [handleAccnt, emailAcct] = await Promise.all([
        ctx.accountManager.getAccount(handle),
        ctx.accountManager.getAccountByEmail(email),
    ]);
    if (handleAccnt) {
        throw new xrpc_server_1.InvalidRequestError(`Handle already taken: ${handle}`);
    }
    else if (emailAcct) {
        throw new xrpc_server_1.InvalidRequestError(`Email already taken: ${email}`);
    }
    // determine the did & any plc ops we need to send
    // if the provided did document is poorly setup, we throw
    const signingKey = await crypto_1.Secp256k1Keypair.create({ exportable: true });
    let did;
    let plcOp;
    let deactivated = false;
    if (input.did) {
        if (input.did !== requester) {
            throw new xrpc_server_1.AuthRequiredError(`Missing auth to create account with did: ${input.did}`);
        }
        did = input.did;
        plcOp = null;
        deactivated = true;
    }
    else {
        const formatted = await formatDidAndPlcOp(ctx, handle, input, signingKey);
        did = formatted.did;
        plcOp = formatted.plcOp;
    }
    return {
        did,
        handle,
        email,
        password,
        inviteCode,
        signingKey,
        plcOp,
        deactivated,
    };
};
const formatDidAndPlcOp = async (ctx, handle, input, signingKey) => {
    // if the user is not bringing a DID, then we format a create op for PLC
    const rotationKeys = [ctx.plcRotationKey.did()];
    if (ctx.cfg.identity.recoveryDidKey) {
        rotationKeys.unshift(ctx.cfg.identity.recoveryDidKey);
    }
    if (input.recoveryKey) {
        rotationKeys.unshift(input.recoveryKey);
    }
    const plcCreate = await plc.createOp({
        signingKey: signingKey.did(),
        rotationKeys,
        handle,
        pds: ctx.cfg.service.publicUrl,
        signer: ctx.plcRotationKey,
    });
    return {
        did: plcCreate.did,
        plcOp: plcCreate.op,
    };
};
const validateAtprotoData = (data, expected) => {
    // if the user is bringing their own did:
    // resolve the user's did doc data, including rotationKeys if did:plc
    // determine if we have the capability to make changes to their DID
    if (data.handle !== expected.handle) {
        throw new xrpc_server_1.InvalidRequestError('provided handle does not match DID document handle', 'IncompatibleDidDoc');
    }
    else if (data.pds !== expected.pds) {
        throw new xrpc_server_1.InvalidRequestError('DID document pds endpoint does not match service endpoint', 'IncompatibleDidDoc');
    }
    else if (data.signingKey !== expected.signingKey) {
        throw new xrpc_server_1.InvalidRequestError('DID document signing key does not match service signing key', 'IncompatibleDidDoc');
    }
};
//# sourceMappingURL=createAccount.js.map