"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdsOAuthProvider = void 0;
const oauth_provider_1 = require("@atproto/oauth-provider");
const logger_1 = require("../logger");
const detailed_account_store_1 = require("./detailed-account-store");
class PdsOAuthProvider extends oauth_provider_1.OAuthProvider {
    constructor({ accountManager, actorStore, localViewer, keyset, redis, dpopSecret, issuer, customization, safeFetch, }) {
        super({
            issuer,
            keyset,
            dpopSecret,
            redis,
            safeFetch,
            customization,
            metadata: {
                // PdsOAuthProvider is used when the PDS is both an authorization server
                // & resource server, in which case the issuer origin is also the
                // resource server uri.
                protected_resources: [new URL(issuer).origin],
                scopes_supported: ['transition:generic', 'transition:chat.bsky'],
            },
            accountStore: new detailed_account_store_1.DetailedAccountStore(accountManager, actorStore, localViewer),
            requestStore: accountManager,
            deviceStore: accountManager,
            tokenStore: accountManager,
            // If the PDS is both an authorization server & resource server (no
            // entryway), there is no need to use JWTs as access tokens. Instead,
            // the PDS can use tokenId as access tokens. This allows the PDS to
            // always use up-to-date token data from the token store.
            accessTokenType: oauth_provider_1.AccessTokenType.id,
            onClientInfo: (clientId) => ({
                isFirstParty: clientId === 'https://bsky.app/',
                // @TODO make client client list configurable:
                isTrusted: undefined,
            }),
        });
    }
    createRouter() {
        return this.httpHandler({
            onError: (req, res, err, message) => logger_1.oauthLogger.error({ err }, message),
        });
    }
}
exports.PdsOAuthProvider = PdsOAuthProvider;
//# sourceMappingURL=provider.js.map