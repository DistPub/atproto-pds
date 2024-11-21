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
exports.AppContext = void 0;
const node_assert_1 = __importDefault(require("node:assert"));
const undici = __importStar(require("undici"));
const nodemailer = __importStar(require("nodemailer"));
const plc = __importStar(require("@did-plc/lib"));
const fetch_node_1 = require("@atproto-labs/fetch-node");
const crypto = __importStar(require("@atproto/crypto"));
const identity_1 = require("@atproto/identity");
const api_1 = require("@atproto/api");
const aws_1 = require("@atproto/aws");
const oauth_provider_1 = require("@atproto/oauth-provider");
const xrpc_server_1 = require("@atproto/xrpc-server");
const provider_1 = require("./oauth/provider");
const auth_verifier_1 = require("./auth-verifier");
const logger_1 = require("./logger");
const mailer_1 = require("./mailer");
const moderation_1 = require("./mailer/moderation");
const account_manager_1 = require("./account-manager");
const sequencer_1 = require("./sequencer");
const background_1 = require("./background");
const did_cache_1 = require("./did-cache");
const crawlers_1 = require("./crawlers");
const disk_blobstore_1 = require("./disk-blobstore");
const redis_1 = require("./redis");
const actor_store_1 = require("./actor-store");
const viewer_1 = require("./read-after-write/viewer");
class AppContext {
    constructor(opts) {
        Object.defineProperty(this, "actorStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "blobstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localViewer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mailer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderationMailer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "didCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "plcClient", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "accountManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sequencer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "backgroundQueue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "redisScratch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ratelimitCreator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "crawlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "appViewAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderationAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reportingAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "entrywayAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "proxyAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "safeFetch", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "authVerifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "authProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "plcRotationKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cfg", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.actorStore = opts.actorStore;
        this.blobstore = opts.blobstore;
        this.localViewer = opts.localViewer;
        this.mailer = opts.mailer;
        this.moderationMailer = opts.moderationMailer;
        this.didCache = opts.didCache;
        this.idResolver = opts.idResolver;
        this.plcClient = opts.plcClient;
        this.accountManager = opts.accountManager;
        this.sequencer = opts.sequencer;
        this.backgroundQueue = opts.backgroundQueue;
        this.redisScratch = opts.redisScratch;
        this.ratelimitCreator = opts.ratelimitCreator;
        this.crawlers = opts.crawlers;
        this.appViewAgent = opts.appViewAgent;
        this.moderationAgent = opts.moderationAgent;
        this.reportingAgent = opts.reportingAgent;
        this.entrywayAgent = opts.entrywayAgent;
        this.proxyAgent = opts.proxyAgent;
        this.safeFetch = opts.safeFetch;
        this.authVerifier = opts.authVerifier;
        this.authProvider = opts.authProvider;
        this.plcRotationKey = opts.plcRotationKey;
        this.cfg = opts.cfg;
    }
    static async fromConfig(cfg, secrets, overrides) {
        const blobstore = cfg.blobstore.provider === 's3'
            ? aws_1.S3BlobStore.creator({
                bucket: cfg.blobstore.bucket,
                region: cfg.blobstore.region,
                endpoint: cfg.blobstore.endpoint,
                forcePathStyle: cfg.blobstore.forcePathStyle,
                credentials: cfg.blobstore.credentials,
                uploadTimeoutMs: cfg.blobstore.uploadTimeoutMs,
            })
            : disk_blobstore_1.DiskBlobStore.creator(cfg.blobstore.location, cfg.blobstore.tempLocation);
        const mailTransport = cfg.email !== null
            ? nodemailer.createTransport(cfg.email.smtpUrl)
            : nodemailer.createTransport({ jsonTransport: true });
        const mailer = new mailer_1.ServerMailer(mailTransport, cfg);
        const modMailTransport = cfg.moderationEmail !== null
            ? nodemailer.createTransport(cfg.moderationEmail.smtpUrl)
            : nodemailer.createTransport({ jsonTransport: true });
        const moderationMailer = new moderation_1.ModerationMailer(modMailTransport, cfg);
        const didCache = new did_cache_1.DidSqliteCache(cfg.db.didCacheDbLoc, cfg.identity.cacheStaleTTL, cfg.identity.cacheMaxTTL, cfg.db.disableWalAutoCheckpoint);
        await didCache.migrateOrThrow();
        const idResolver = new identity_1.IdResolver({
            plcUrl: cfg.identity.plcUrl,
            didCache,
            timeout: cfg.identity.resolverTimeout,
            backupNameservers: cfg.identity.handleBackupNameservers,
        });
        const plcClient = new plc.Client(cfg.identity.plcUrl);
        const backgroundQueue = new background_1.BackgroundQueue();
        const crawlers = new crawlers_1.Crawlers(cfg.service.hostname, cfg.crawlers, backgroundQueue);
        const sequencer = new sequencer_1.Sequencer(cfg.db.sequencerDbLoc, crawlers, undefined, cfg.db.disableWalAutoCheckpoint);
        const redisScratch = cfg.redis
            ? (0, redis_1.getRedisClient)(cfg.redis.address, cfg.redis.password)
            : undefined;
        let ratelimitCreator = undefined;
        if (cfg.rateLimits.enabled) {
            const bypassSecret = cfg.rateLimits.bypassKey;
            const bypassIps = cfg.rateLimits.bypassIps;
            if (cfg.rateLimits.mode === 'redis') {
                if (!redisScratch) {
                    throw new Error('Redis not set up for ratelimiting mode: `redis`');
                }
                ratelimitCreator = (opts) => xrpc_server_1.RateLimiter.redis(redisScratch, {
                    bypassSecret,
                    bypassIps,
                    ...opts,
                });
            }
            else {
                ratelimitCreator = (opts) => xrpc_server_1.RateLimiter.memory({
                    bypassSecret,
                    bypassIps,
                    ...opts,
                });
            }
        }
        const appViewAgent = cfg.bskyAppView
            ? new api_1.AtpAgent({ service: cfg.bskyAppView.url })
            : undefined;
        const moderationAgent = cfg.modService
            ? new api_1.AtpAgent({ service: cfg.modService.url })
            : undefined;
        const reportingAgent = cfg.reportService
            ? new api_1.AtpAgent({ service: cfg.reportService.url })
            : undefined;
        const entrywayAgent = cfg.entryway
            ? new api_1.AtpAgent({ service: cfg.entryway.url })
            : undefined;
        const jwtSecretKey = (0, auth_verifier_1.createSecretKeyObject)(secrets.jwtSecret);
        const jwtPublicKey = cfg.entryway
            ? (0, auth_verifier_1.createPublicKeyObject)(cfg.entryway.jwtPublicKeyHex)
            : null;
        const accountManager = new account_manager_1.AccountManager(backgroundQueue, cfg.db.accountDbLoc, jwtSecretKey, cfg.service.did, cfg.db.disableWalAutoCheckpoint);
        await accountManager.migrateOrThrow();
        const plcRotationKey = secrets.plcRotationKey.provider === 'kms'
            ? await aws_1.KmsKeypair.load({
                keyId: secrets.plcRotationKey.keyId,
            })
            : await crypto.Secp256k1Keypair.import(secrets.plcRotationKey.privateKeyHex);
        const actorStore = new actor_store_1.ActorStore(cfg.actorStore, {
            blobstore,
            backgroundQueue,
        });
        const localViewer = viewer_1.LocalViewer.creator({
            accountManager,
            appViewAgent,
            pdsHostname: cfg.service.hostname,
            appviewDid: cfg.bskyAppView?.did,
            appviewCdnUrlPattern: cfg.bskyAppView?.cdnUrlPattern,
        });
        // An agent for performing HTTP requests based on user provided URLs.
        const proxyAgentBase = new undici.Agent({
            allowH2: cfg.proxy.allowHTTP2, // This is experimental
            headersTimeout: cfg.proxy.headersTimeout,
            maxResponseSize: cfg.proxy.maxResponseSize,
            bodyTimeout: cfg.proxy.bodyTimeout,
            factory: cfg.proxy.disableSsrfProtection
                ? undefined
                : (origin, opts) => {
                    const { protocol, hostname } = origin instanceof URL ? origin : new URL(origin);
                    if (protocol !== 'https:') {
                        throw new Error(`Forbidden protocol "${protocol}"`);
                    }
                    if ((0, fetch_node_1.isUnicastIp)(hostname) === false) {
                        throw new Error('Hostname resolved to non-unicast address');
                    }
                    return new undici.Pool(origin, opts);
                },
            connect: {
                lookup: cfg.proxy.disableSsrfProtection ? undefined : fetch_node_1.unicastLookup,
            },
        });
        const proxyAgent = cfg.proxy.maxRetries > 0
            ? new undici.RetryAgent(proxyAgentBase, {
                statusCodes: [], // Only retry on socket errors
                methods: ['GET', 'HEAD'],
                maxRetries: cfg.proxy.maxRetries,
            })
            : proxyAgentBase;
        // A fetch() function that protects against SSRF attacks, large responses &
        // known bad domains. This function can safely be used to fetch user
        // provided URLs (unless "disableSsrfProtection" is true, of course).
        const safeFetch = (0, fetch_node_1.loggedFetch)({
            fetch: (0, fetch_node_1.safeFetchWrap)({
                // Using globalThis.fetch allows safeFetchWrap to use keep-alive. See
                // unicastFetchWrap().
                fetch: globalThis.fetch,
                allowIpHost: false,
                responseMaxSize: cfg.fetch.maxResponseSize,
                ssrfProtection: !cfg.fetch.disableSsrfProtection,
            }),
            logRequest: ({ method, url }) => {
                logger_1.fetchLogger.debug({ method, uri: url }, 'fetch');
            },
            logResponse: false,
            logError: false,
        });
        const authProvider = cfg.oauth.provider
            ? new provider_1.PdsOAuthProvider({
                issuer: cfg.oauth.issuer,
                keyset: [
                    // Note: OpenID compatibility would require an RS256 private key in this list
                    await oauth_provider_1.JoseKey.fromKeyLike(jwtSecretKey, undefined, 'HS256'),
                ],
                accountManager,
                actorStore,
                localViewer,
                redis: redisScratch,
                dpopSecret: secrets.dpopSecret,
                customization: cfg.oauth.provider.customization,
                safeFetch,
            })
            : undefined;
        const oauthVerifier = authProvider ?? // OAuthProvider extends OAuthVerifier
            new oauth_provider_1.OAuthVerifier({
                issuer: cfg.oauth.issuer,
                keyset: [await oauth_provider_1.JoseKey.fromKeyLike(jwtPublicKey, undefined, 'ES256K')],
                dpopSecret: secrets.dpopSecret,
                redis: redisScratch,
            });
        const authVerifier = new auth_verifier_1.AuthVerifier(accountManager, idResolver, oauthVerifier, {
            publicUrl: cfg.service.publicUrl,
            jwtKey: jwtPublicKey ?? jwtSecretKey,
            adminPass: secrets.adminPassword,
            dids: {
                pds: cfg.service.did,
                entryway: cfg.entryway?.did,
                modService: cfg.modService?.did,
            },
        });
        return new AppContext({
            actorStore,
            blobstore,
            localViewer,
            mailer,
            moderationMailer,
            didCache,
            idResolver,
            plcClient,
            accountManager,
            sequencer,
            backgroundQueue,
            redisScratch,
            ratelimitCreator,
            crawlers,
            appViewAgent,
            moderationAgent,
            reportingAgent,
            entrywayAgent,
            proxyAgent,
            safeFetch,
            authVerifier,
            authProvider,
            plcRotationKey,
            cfg,
            ...(overrides ?? {}),
        });
    }
    async appviewAuthHeaders(did, lxm) {
        (0, node_assert_1.default)(this.cfg.bskyAppView);
        return this.serviceAuthHeaders(did, this.cfg.bskyAppView.did, lxm);
    }
    async serviceAuthHeaders(did, aud, lxm) {
        const keypair = await this.actorStore.keypair(did);
        return (0, xrpc_server_1.createServiceAuthHeaders)({
            iss: did,
            aud,
            lxm,
            keypair,
        });
    }
    async serviceAuthJwt(did, aud, lxm) {
        const keypair = await this.actorStore.keypair(did);
        return (0, xrpc_server_1.createServiceJwt)({
            iss: did,
            aud,
            lxm,
            keypair,
        });
    }
}
exports.AppContext = AppContext;
exports.default = AppContext;
//# sourceMappingURL=context.js.map