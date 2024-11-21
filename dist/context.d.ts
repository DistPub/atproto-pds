import * as undici from 'undici';
import { Redis } from 'ioredis';
import * as plc from '@did-plc/lib';
import { Fetch } from '@atproto-labs/fetch-node';
import * as crypto from '@atproto/crypto';
import { IdResolver } from '@atproto/identity';
import { AtpAgent } from '@atproto/api';
import { BlobStore } from '@atproto/repo';
import { RateLimiterCreator } from '@atproto/xrpc-server';
import { ServerConfig, ServerSecrets } from './config';
import { PdsOAuthProvider } from './oauth/provider';
import { AuthVerifier } from './auth-verifier';
import { ServerMailer } from './mailer';
import { ModerationMailer } from './mailer/moderation';
import { AccountManager } from './account-manager';
import { Sequencer } from './sequencer';
import { BackgroundQueue } from './background';
import { DidSqliteCache } from './did-cache';
import { Crawlers } from './crawlers';
import { ActorStore } from './actor-store';
import { LocalViewerCreator } from './read-after-write/viewer';
export type AppContextOptions = {
    actorStore: ActorStore;
    blobstore: (did: string) => BlobStore;
    localViewer: LocalViewerCreator;
    mailer: ServerMailer;
    moderationMailer: ModerationMailer;
    didCache: DidSqliteCache;
    idResolver: IdResolver;
    plcClient: plc.Client;
    accountManager: AccountManager;
    sequencer: Sequencer;
    backgroundQueue: BackgroundQueue;
    redisScratch?: Redis;
    ratelimitCreator?: RateLimiterCreator;
    crawlers: Crawlers;
    appViewAgent?: AtpAgent;
    moderationAgent?: AtpAgent;
    reportingAgent?: AtpAgent;
    entrywayAgent?: AtpAgent;
    proxyAgent: undici.Dispatcher;
    safeFetch: Fetch;
    authProvider?: PdsOAuthProvider;
    authVerifier: AuthVerifier;
    plcRotationKey: crypto.Keypair;
    cfg: ServerConfig;
};
export declare class AppContext {
    actorStore: ActorStore;
    blobstore: (did: string) => BlobStore;
    localViewer: LocalViewerCreator;
    mailer: ServerMailer;
    moderationMailer: ModerationMailer;
    didCache: DidSqliteCache;
    idResolver: IdResolver;
    plcClient: plc.Client;
    accountManager: AccountManager;
    sequencer: Sequencer;
    backgroundQueue: BackgroundQueue;
    redisScratch?: Redis;
    ratelimitCreator?: RateLimiterCreator;
    crawlers: Crawlers;
    appViewAgent: AtpAgent | undefined;
    moderationAgent: AtpAgent | undefined;
    reportingAgent: AtpAgent | undefined;
    entrywayAgent: AtpAgent | undefined;
    proxyAgent: undici.Dispatcher;
    safeFetch: Fetch;
    authVerifier: AuthVerifier;
    authProvider?: PdsOAuthProvider;
    plcRotationKey: crypto.Keypair;
    cfg: ServerConfig;
    constructor(opts: AppContextOptions);
    static fromConfig(cfg: ServerConfig, secrets: ServerSecrets, overrides?: Partial<AppContextOptions>): Promise<AppContext>;
    appviewAuthHeaders(did: string, lxm: string): Promise<{
        headers: {
            authorization: string;
        };
    }>;
    serviceAuthHeaders(did: string, aud: string, lxm: string): Promise<{
        headers: {
            authorization: string;
        };
    }>;
    serviceAuthJwt(did: string, aud: string, lxm: string): Promise<string>;
}
export default AppContext;
//# sourceMappingURL=context.d.ts.map