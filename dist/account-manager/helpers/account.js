"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAccountStatus = exports.activateAccount = exports.deactivateAccount = exports.updateAccountTakedownStatus = exports.getAccountAdminStatus = exports.setEmailConfirmedAt = exports.updateEmail = exports.updateHandle = exports.deleteAccount = exports.registerAccount = exports.registerActor = exports.getAccountByEmail = exports.getAccounts = exports.getAccount = exports.selectAccountQB = exports.AccountStatus = exports.UserAlreadyExistsError = void 0;
const db_1 = require("../../db");
const common_1 = require("@atproto/common");
class UserAlreadyExistsError extends Error {
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "active";
    AccountStatus["Takendown"] = "takendown";
    AccountStatus["Suspended"] = "suspended";
    AccountStatus["Deleted"] = "deleted";
    AccountStatus["Deactivated"] = "deactivated";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
const selectAccountQB = (db, flags) => {
    const { includeTakenDown = false, includeDeactivated = false } = flags ?? {};
    const { ref } = db.db.dynamic;
    return db.db
        .selectFrom('actor')
        .leftJoin('account', 'actor.did', 'account.did')
        .if(!includeTakenDown, (qb) => qb.where((0, db_1.notSoftDeletedClause)(ref('actor'))))
        .if(!includeDeactivated, (qb) => qb.where('actor.deactivatedAt', 'is', null))
        .select([
        'actor.did',
        'actor.handle',
        'actor.createdAt',
        'actor.takedownRef',
        'actor.deactivatedAt',
        'actor.deleteAfter',
        'account.email',
        'account.emailConfirmedAt',
        'account.invitesDisabled',
    ]);
};
exports.selectAccountQB = selectAccountQB;
const getAccount = async (db, handleOrDid, flags) => {
    const found = await (0, exports.selectAccountQB)(db, flags)
        .where((qb) => {
        if (handleOrDid.startsWith('did:')) {
            return qb.where('actor.did', '=', handleOrDid);
        }
        else {
            return qb.where('actor.handle', '=', handleOrDid);
        }
    })
        .executeTakeFirst();
    return found || null;
};
exports.getAccount = getAccount;
const getAccounts = async (db, dids, flags) => {
    const results = new Map();
    if (!dids.length) {
        return results;
    }
    const accounts = await (0, exports.selectAccountQB)(db, flags)
        .where('actor.did', 'in', dids)
        .execute();
    accounts.forEach((account) => {
        results.set(account.did, account);
    });
    return results;
};
exports.getAccounts = getAccounts;
const getAccountByEmail = async (db, email, flags) => {
    const found = await (0, exports.selectAccountQB)(db, flags)
        .where('email', '=', email.toLowerCase())
        .executeTakeFirst();
    return found || null;
};
exports.getAccountByEmail = getAccountByEmail;
const registerActor = async (db, opts) => {
    const { did, handle, deactivated } = opts;
    const now = Date.now();
    const createdAt = new Date(now).toISOString();
    const [registered] = await db.executeWithRetry(db.db
        .insertInto('actor')
        .values({
        did,
        handle,
        createdAt,
        deactivatedAt: deactivated ? createdAt : null,
        deleteAfter: deactivated ? new Date(now + 3 * common_1.DAY).toISOString() : null,
    })
        .onConflict((oc) => oc.doNothing())
        .returning('did'));
    if (!registered) {
        throw new UserAlreadyExistsError();
    }
};
exports.registerActor = registerActor;
const registerAccount = async (db, opts) => {
    const { did, email, passwordScrypt } = opts;
    const [registered] = await db.executeWithRetry(db.db
        .insertInto('account')
        .values({
        did,
        email: email.toLowerCase(),
        passwordScrypt,
    })
        .onConflict((oc) => oc.doNothing())
        .returning('did'));
    if (!registered) {
        throw new UserAlreadyExistsError();
    }
};
exports.registerAccount = registerAccount;
const deleteAccount = async (db, did) => {
    // Not done in transaction because it would be too long, prone to contention.
    // Also, this can safely be run multiple times if it fails.
    await db.executeWithRetry(db.db.deleteFrom('repo_root').where('did', '=', did));
    await db.executeWithRetry(db.db.deleteFrom('email_token').where('did', '=', did));
    await db.executeWithRetry(db.db.deleteFrom('refresh_token').where('did', '=', did));
    await db.executeWithRetry(db.db.deleteFrom('account').where('account.did', '=', did));
    await db.executeWithRetry(db.db.deleteFrom('actor').where('actor.did', '=', did));
};
exports.deleteAccount = deleteAccount;
const updateHandle = async (db, did, handle) => {
    const [res] = await db.executeWithRetry(db.db
        .updateTable('actor')
        .set({ handle })
        .where('did', '=', did)
        .whereNotExists(db.db.selectFrom('actor').where('handle', '=', handle).selectAll()));
    if (res.numUpdatedRows < 1) {
        throw new UserAlreadyExistsError();
    }
};
exports.updateHandle = updateHandle;
const updateEmail = async (db, did, email) => {
    try {
        await db.executeWithRetry(db.db
            .updateTable('account')
            .set({
            email: email.toLowerCase(),
            emailConfirmedAt: null,
        })
            .where('did', '=', did));
    }
    catch (err) {
        if ((0, db_1.isErrUniqueViolation)(err)) {
            throw new UserAlreadyExistsError();
        }
        throw err;
    }
};
exports.updateEmail = updateEmail;
const setEmailConfirmedAt = async (db, did, emailConfirmedAt) => {
    await db.executeWithRetry(db.db
        .updateTable('account')
        .set({ emailConfirmedAt })
        .where('did', '=', did));
};
exports.setEmailConfirmedAt = setEmailConfirmedAt;
const getAccountAdminStatus = async (db, did) => {
    const res = await db.db
        .selectFrom('actor')
        .select(['takedownRef', 'deactivatedAt'])
        .where('did', '=', did)
        .executeTakeFirst();
    if (!res)
        return null;
    const takedown = res.takedownRef
        ? { applied: true, ref: res.takedownRef }
        : { applied: false };
    const deactivated = res.deactivatedAt ? { applied: true } : { applied: false };
    return { takedown, deactivated };
};
exports.getAccountAdminStatus = getAccountAdminStatus;
const updateAccountTakedownStatus = async (db, did, takedown) => {
    const takedownRef = takedown.applied
        ? takedown.ref ?? new Date().toISOString()
        : null;
    await db.executeWithRetry(db.db.updateTable('actor').set({ takedownRef }).where('did', '=', did));
};
exports.updateAccountTakedownStatus = updateAccountTakedownStatus;
const deactivateAccount = async (db, did, deleteAfter) => {
    await db.executeWithRetry(db.db
        .updateTable('actor')
        .set({
        deactivatedAt: new Date().toISOString(),
        deleteAfter,
    })
        .where('did', '=', did));
};
exports.deactivateAccount = deactivateAccount;
const activateAccount = async (db, did) => {
    await db.executeWithRetry(db.db
        .updateTable('actor')
        .set({
        deactivatedAt: null,
        deleteAfter: null,
    })
        .where('did', '=', did));
};
exports.activateAccount = activateAccount;
const formatAccountStatus = (account) => {
    if (!account) {
        return { active: false, status: AccountStatus.Deleted };
    }
    else if (account.takedownRef) {
        return { active: false, status: AccountStatus.Takendown };
    }
    else if (account.deactivatedAt) {
        return { active: false, status: AccountStatus.Deactivated };
    }
    else {
        return { active: true, status: undefined };
    }
};
exports.formatAccountStatus = formatAccountStatus;
//# sourceMappingURL=account.js.map