import { AccountInfo, AccountStore, DeviceId, SignInCredentials } from '@atproto/oauth-provider';
import { AccountManager } from '../account-manager/index';
import { ActorStore } from '../actor-store/index';
import { LocalViewerCreator } from '../read-after-write/index';
/**
 * Although the {@link AccountManager} class implements the {@link AccountStore}
 * interface, the accounts it returns do not contain any profile information
 * (display name, avatar, etc). This is due to the fact that the account manager
 * does not have access to the account's repos. The {@link DetailedAccountStore}
 * is a wrapper around the {@link AccountManager} that enriches the accounts
 * with profile information using the account's repos through the
 * {@link ActorStore}.
 */
export declare class DetailedAccountStore implements AccountStore {
    private accountManager;
    private actorStore;
    private localViewer;
    constructor(accountManager: AccountManager, actorStore: ActorStore, localViewer: LocalViewerCreator);
    private getProfile;
    private enrichAccountInfo;
    authenticateAccount(credentials: SignInCredentials, deviceId: DeviceId): Promise<AccountInfo | null>;
    addAuthorizedClient(deviceId: DeviceId, sub: string, clientId: string): Promise<void>;
    getDeviceAccount(deviceId: DeviceId, sub: string): Promise<AccountInfo | null>;
    listDeviceAccounts(deviceId: DeviceId): Promise<AccountInfo[]>;
    removeDeviceAccount(deviceId: DeviceId, sub: string): Promise<void>;
}
//# sourceMappingURL=detailed-account-store.d.ts.map