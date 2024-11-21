import { AccountInfo, AccountStore, Code, DeviceData, DeviceId, DeviceStore, FoundRequestResult, NewTokenData, RefreshToken, RequestData, RequestId, RequestStore, SignInCredentials, TokenData, TokenId, TokenInfo, TokenStore, UpdateRequestData } from '@atproto/oauth-provider';
import { CID } from 'multiformats/cid';
import { KeyObject } from 'node:crypto';
import { BackgroundQueue } from '../background';
import { StatusAttr } from '../lexicon/types/com/atproto/admin/defs';
import { AccountDb, EmailTokenPurpose } from './db';
import * as account from './helpers/account';
import { AccountStatus, ActorAccount } from './helpers/account';
import * as invite from './helpers/invite';
import * as password from './helpers/password';
export { AccountStatus, formatAccountStatus } from './helpers/account';
export declare class AccountManager implements AccountStore, RequestStore, DeviceStore, TokenStore {
    private backgroundQueue;
    private jwtKey;
    private serviceDid;
    db: AccountDb;
    constructor(backgroundQueue: BackgroundQueue, dbLocation: string, jwtKey: KeyObject, serviceDid: string, disableWalAutoCheckpoint?: boolean);
    migrateOrThrow(): Promise<void>;
    close(): void;
    getAccount(handleOrDid: string, flags?: account.AvailabilityFlags): Promise<ActorAccount | null>;
    getAccounts(dids: string[], flags?: account.AvailabilityFlags): Promise<Map<string, ActorAccount>>;
    getAccountByEmail(email: string, flags?: account.AvailabilityFlags): Promise<ActorAccount | null>;
    isAccountActivated(did: string): Promise<boolean>;
    getDidForActor(handleOrDid: string, flags?: account.AvailabilityFlags): Promise<string | null>;
    getAccountStatus(handleOrDid: string): Promise<AccountStatus>;
    createAccount(opts: {
        did: string;
        handle: string;
        email?: string;
        password?: string;
        repoCid: CID;
        repoRev: string;
        inviteCode?: string;
        deactivated?: boolean;
    }): Promise<{
        accessJwt: string;
        refreshJwt: string;
    }>;
    updateHandle(did: string, handle: string): Promise<void>;
    deleteAccount(did: string): Promise<void>;
    takedownAccount(did: string, takedown: StatusAttr): Promise<void>;
    getAccountAdminStatus(did: string): Promise<{
        takedown: StatusAttr;
        deactivated: StatusAttr;
    } | null>;
    updateRepoRoot(did: string, cid: CID, rev: string): Promise<void>;
    deactivateAccount(did: string, deleteAfter: string | null): Promise<void>;
    activateAccount(did: string): Promise<void>;
    createSession(did: string, appPassword: password.AppPassDescript | null): Promise<{
        accessJwt: string;
        refreshJwt: string;
    }>;
    rotateRefreshToken(id: string): any;
    revokeRefreshToken(id: string): Promise<boolean>;
    login({ identifier, password, }: {
        identifier: string;
        password: string;
    }): Promise<{
        user: ActorAccount;
        appPassword: password.AppPassDescript | null;
    }>;
    createAppPassword(did: string, name: string, privileged: boolean): Promise<import("../lexicon/types/com/atproto/server/createAppPassword").AppPassword>;
    listAppPasswords(did: string): Promise<{
        name: string;
        createdAt: string;
        privileged: boolean;
    }[]>;
    verifyAccountPassword(did: string, passwordStr: string): Promise<boolean>;
    verifyAppPassword(did: string, passwordStr: string): Promise<password.AppPassDescript | null>;
    revokeAppPassword(did: string, name: string): Promise<void>;
    ensureInviteIsAvailable(code: string): Promise<void>;
    createInviteCodes(toCreate: {
        account: string;
        codes: string[];
    }[], useCount: number): Promise<void>;
    createAccountInviteCodes(forAccount: string, codes: string[], expectedTotal: number, disabled: 0 | 1): Promise<invite.CodeDetail[]>;
    getAccountInvitesCodes(did: string): Promise<invite.CodeDetail[]>;
    getAccountsInvitesCodes(dids: string[]): Promise<Map<string, invite.CodeDetail[]>>;
    getInvitedByForAccounts(dids: string[]): Promise<Record<string, invite.CodeDetail>>;
    getInviteCodesUses(codes: string[]): Promise<Record<string, {
        usedBy: string;
        usedAt: string;
    }[]>>;
    setAccountInvitesDisabled(did: string, disabled: boolean): Promise<void>;
    disableInviteCodes(opts: {
        codes: string[];
        accounts: string[];
    }): Promise<void>;
    createEmailToken(did: string, purpose: EmailTokenPurpose): Promise<string>;
    assertValidEmailToken(did: string, purpose: EmailTokenPurpose, token: string): Promise<void>;
    assertValidEmailTokenAndCleanup(did: string, purpose: EmailTokenPurpose, token: string): Promise<void>;
    confirmEmail(opts: {
        did: string;
        token: string;
    }): Promise<void>;
    updateEmail(opts: {
        did: string;
        email: string;
    }): Promise<void>;
    resetPassword(opts: {
        password: string;
        token: string;
    }): Promise<void>;
    updateAccountPassword(opts: {
        did: string;
        password: string;
    }): Promise<void>;
    authenticateAccount({ username: identifier, password, remember }: SignInCredentials, deviceId: DeviceId): Promise<AccountInfo | null>;
    addAuthorizedClient(deviceId: DeviceId, sub: string, clientId: string): Promise<void>;
    getDeviceAccount(deviceId: DeviceId, sub: string): Promise<AccountInfo | null>;
    listDeviceAccounts(deviceId: DeviceId): Promise<AccountInfo[]>;
    removeDeviceAccount(deviceId: DeviceId, sub: string): Promise<void>;
    createRequest(id: RequestId, data: RequestData): Promise<void>;
    readRequest(id: RequestId): Promise<RequestData | null>;
    updateRequest(id: RequestId, data: UpdateRequestData): Promise<void>;
    deleteRequest(id: RequestId): Promise<void>;
    findRequestByCode(code: Code): Promise<FoundRequestResult | null>;
    createDevice(deviceId: DeviceId, data: DeviceData): Promise<void>;
    readDevice(deviceId: DeviceId): Promise<null | DeviceData>;
    updateDevice(deviceId: DeviceId, data: Partial<DeviceData>): Promise<void>;
    deleteDevice(deviceId: DeviceId): Promise<void>;
    createToken(id: TokenId, data: TokenData, refreshToken?: RefreshToken): Promise<void>;
    readToken(tokenId: TokenId): Promise<TokenInfo | null>;
    deleteToken(tokenId: TokenId): Promise<void>;
    rotateToken(tokenId: TokenId, newTokenId: TokenId, newRefreshToken: RefreshToken, newData: NewTokenData): Promise<void>;
    findTokenByRefreshToken(refreshToken: RefreshToken): Promise<TokenInfo | null>;
    findTokenByCode(code: Code): Promise<TokenInfo | null>;
}
//# sourceMappingURL=index.d.ts.map