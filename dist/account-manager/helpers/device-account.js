"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeQB = exports.listRememberedQB = exports.getAccountInfoQB = exports.createOrUpdateQB = exports.updateQB = exports.readQB = void 0;
exports.toDeviceAccountInfo = toDeviceAccountInfo;
exports.toAccount = toAccount;
const db_1 = require("../../db");
const account_1 = require("./account");
const selectAccountInfoQB = (db, deviceId) => (0, account_1.selectAccountQB)(db, { includeDeactivated: true })
    // note: query planner should use "device_account_pk" index
    .innerJoin('device_account', 'device_account.did', 'actor.did')
    .innerJoin('device', 'device.id', 'device_account.deviceId')
    .where('device.id', '=', deviceId)
    .select([
    'device_account.authenticatedAt',
    'device_account.remember',
    'device_account.authorizedClients',
]);
function toInsertable(values) {
    const row = {};
    if (values.authenticatedAt) {
        row.authenticatedAt = (0, db_1.toDateISO)(values.authenticatedAt);
    }
    if (values.remember !== undefined) {
        row.remember = values.remember === true ? 1 : 0;
    }
    if (values.authorizedClients) {
        row.authorizedClients = (0, db_1.toJsonArray)(values.authorizedClients);
    }
    return row;
}
function toDeviceAccountInfo(row) {
    return {
        remembered: row.remember === 1,
        authenticatedAt: (0, db_1.fromDateISO)(row.authenticatedAt),
        authorizedClients: (0, db_1.fromJsonArray)(row.authorizedClients),
    };
}
function toAccount(row, audience) {
    return {
        sub: row.did,
        aud: audience,
        email: row.email || undefined,
        email_verified: row.email ? row.emailConfirmedAt != null : undefined,
        preferred_username: row.handle || undefined,
    };
}
const readQB = (db, deviceId, did) => db.db
    .selectFrom('device_account')
    .where('did', '=', did)
    .where('deviceId', '=', deviceId)
    .select(['remember', 'authorizedClients', 'authenticatedAt']);
exports.readQB = readQB;
const updateQB = (db, deviceId, did, entry) => db.db
    .updateTable('device_account')
    .set(toInsertable(entry))
    .where('did', '=', did)
    .where('deviceId', '=', deviceId);
exports.updateQB = updateQB;
const createOrUpdateQB = (db, deviceId, did, remember) => {
    const { authorizedClients, ...values } = toInsertable({
        remember,
        authenticatedAt: new Date(),
        authorizedClients: [],
    });
    return db.db
        .insertInto('device_account')
        .values({ did, deviceId, authorizedClients, ...values })
        .onConflict((oc) => oc.columns(['deviceId', 'did']).doUpdateSet(values));
};
exports.createOrUpdateQB = createOrUpdateQB;
const getAccountInfoQB = (db, deviceId, did) => {
    return selectAccountInfoQB(db, deviceId).where('actor.did', '=', did);
};
exports.getAccountInfoQB = getAccountInfoQB;
const listRememberedQB = (db, deviceId) => selectAccountInfoQB(db, deviceId).where('device_account.remember', '=', 1);
exports.listRememberedQB = listRememberedQB;
const removeQB = (db, deviceId, did) => db.db
    .deleteFrom('device_account')
    .where('deviceId', '=', deviceId)
    .where('did', '=', did);
exports.removeQB = removeQB;
//# sourceMappingURL=device-account.js.map