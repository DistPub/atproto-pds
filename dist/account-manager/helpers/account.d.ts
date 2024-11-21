import { AccountDb, ActorEntry } from '../db';
import { StatusAttr } from '../../lexicon/types/com/atproto/admin/defs';
export declare class UserAlreadyExistsError extends Error {
}
export type ActorAccount = ActorEntry & {
    email: string | null;
    emailConfirmedAt: string | null;
    invitesDisabled: 0 | 1 | null;
};
export type AvailabilityFlags = {
    includeTakenDown?: boolean;
    includeDeactivated?: boolean;
};
export declare enum AccountStatus {
    Active = "active",
    Takendown = "takendown",
    Suspended = "suspended",
    Deleted = "deleted",
    Deactivated = "deactivated"
}
export declare const selectAccountQB: (db: AccountDb, flags?: AvailabilityFlags) => import("kysely/dist/cjs/parser/select-parser").QueryBuilderWithSelection<{
    account: import("kysely/dist/cjs/util/type-utils").Nullable<import("../db").Account>;
    token: import("../db").Token;
    actor: import("../db").Actor;
    device: import("../db").Device;
    device_account: import("../db").DeviceAccount;
    authorization_request: import("../db").AuthorizationRequest;
    used_refresh_token: import("../db").UsedRefreshToken;
    repo_root: import("../db").RepoRoot;
    refresh_token: import("../db").RefreshToken;
    app_password: import("../db").AppPassword;
    invite_code: import("../db").InviteCode;
    invite_code_use: import("../db").InviteCodeUse;
    email_token: import("../db").EmailToken;
}, "account" | "actor", import("kysely/dist/cjs/util/type-utils").MergePartial<Partial<Omit<{}, never>>, Partial<Omit<{}, never>>>, "actor.did" | "account.email" | "account.invitesDisabled" | "account.emailConfirmedAt" | "actor.handle" | "actor.createdAt" | "actor.takedownRef" | "actor.deactivatedAt" | "actor.deleteAfter">;
export declare const getAccount: (db: AccountDb, handleOrDid: string, flags?: AvailabilityFlags) => Promise<ActorAccount | null>;
export declare const getAccounts: (db: AccountDb, dids: string[], flags?: AvailabilityFlags) => Promise<Map<string, ActorAccount>>;
export declare const getAccountByEmail: (db: AccountDb, email: string, flags?: AvailabilityFlags) => Promise<ActorAccount | null>;
export declare const registerActor: (db: AccountDb, opts: {
    did: string;
    handle: string;
    deactivated?: boolean;
}) => Promise<void>;
export declare const registerAccount: (db: AccountDb, opts: {
    did: string;
    email: string;
    passwordScrypt: string;
}) => Promise<void>;
export declare const deleteAccount: (db: AccountDb, did: string) => Promise<void>;
export declare const updateHandle: (db: AccountDb, did: string, handle: string) => Promise<void>;
export declare const updateEmail: (db: AccountDb, did: string, email: string) => Promise<void>;
export declare const setEmailConfirmedAt: (db: AccountDb, did: string, emailConfirmedAt: string) => Promise<void>;
export declare const getAccountAdminStatus: (db: AccountDb, did: string) => Promise<{
    takedown: StatusAttr;
    deactivated: StatusAttr;
} | null>;
export declare const updateAccountTakedownStatus: (db: AccountDb, did: string, takedown: StatusAttr) => Promise<void>;
export declare const deactivateAccount: (db: AccountDb, did: string, deleteAfter: string | null) => Promise<void>;
export declare const activateAccount: (db: AccountDb, did: string) => Promise<void>;
export declare const formatAccountStatus: (account: null | {
    takedownRef: string | null;
    deactivatedAt: string | null;
}) => {
    readonly active: false;
    readonly status: AccountStatus.Deleted;
} | {
    readonly active: false;
    readonly status: AccountStatus.Takendown;
} | {
    readonly active: false;
    readonly status: AccountStatus.Deactivated;
} | {
    readonly active: true;
    readonly status: undefined;
};
//# sourceMappingURL=account.d.ts.map