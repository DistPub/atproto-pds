import { OAuthProvider, OAuthProviderOptions } from '@atproto/oauth-provider';
import { AccountManager } from '../account-manager/index';
import { ActorStore } from '../actor-store/index';
import { LocalViewerCreator } from '../read-after-write/index';
export type AuthProviderOptions = {
    accountManager: AccountManager;
    actorStore: ActorStore;
    localViewer: LocalViewerCreator;
} & Pick<OAuthProviderOptions, 'issuer' | 'redis' | 'keyset' | 'dpopSecret' | 'customization'> & Required<Pick<OAuthProviderOptions, 'safeFetch'>>;
export declare class PdsOAuthProvider extends OAuthProvider {
    constructor({ accountManager, actorStore, localViewer, keyset, redis, dpopSecret, issuer, customization, safeFetch, }: AuthProviderOptions);
    createRouter(): import("@atproto/oauth-provider").Handler<void, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>>;
}
//# sourceMappingURL=provider.d.ts.map