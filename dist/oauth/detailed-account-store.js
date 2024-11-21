"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedAccountStore = void 0;
/**
 * Although the {@link AccountManager} class implements the {@link AccountStore}
 * interface, the accounts it returns do not contain any profile information
 * (display name, avatar, etc). This is due to the fact that the account manager
 * does not have access to the account's repos. The {@link DetailedAccountStore}
 * is a wrapper around the {@link AccountManager} that enriches the accounts
 * with profile information using the account's repos through the
 * {@link ActorStore}.
 */
class DetailedAccountStore {
    constructor(accountManager, actorStore, localViewer) {
        Object.defineProperty(this, "accountManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: accountManager
        });
        Object.defineProperty(this, "actorStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: actorStore
        });
        Object.defineProperty(this, "localViewer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: localViewer
        });
    }
    async getProfile(did) {
        // TODO: Should we cache this?
        return this.actorStore.read(did, async (actorStoreReader) => {
            const localViewer = this.localViewer(actorStoreReader);
            return localViewer.getProfileBasic();
        });
    }
    async enrichAccountInfo(accountInfo) {
        const { account } = accountInfo;
        if (!account.picture || !account.name) {
            const profile = await this.getProfile(account.sub);
            if (profile) {
                account.picture || (account.picture = profile.avatar);
                account.name || (account.name = profile.displayName);
            }
        }
        return accountInfo;
    }
    async authenticateAccount(credentials, deviceId) {
        const accountInfo = await this.accountManager.authenticateAccount(credentials, deviceId);
        if (!accountInfo)
            return null;
        return this.enrichAccountInfo(accountInfo);
    }
    async addAuthorizedClient(deviceId, sub, clientId) {
        return this.accountManager.addAuthorizedClient(deviceId, sub, clientId);
    }
    async getDeviceAccount(deviceId, sub) {
        const accountInfo = await this.accountManager.getDeviceAccount(deviceId, sub);
        if (!accountInfo)
            return null;
        return this.enrichAccountInfo(accountInfo);
    }
    async listDeviceAccounts(deviceId) {
        const accountInfos = await this.accountManager.listDeviceAccounts(deviceId);
        return Promise.all(accountInfos.map(async (accountInfo) => this.enrichAccountInfo(accountInfo)));
    }
    async removeDeviceAccount(deviceId, sub) {
        return this.accountManager.removeDeviceAccount(deviceId, sub);
    }
}
exports.DetailedAccountStore = DetailedAccountStore;
//# sourceMappingURL=detailed-account-store.js.map