"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelatedAccount = isRelatedAccount;
exports.validateRelatedAccount = validateRelatedAccount;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRelatedAccount(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'tools.ozone.signature.findRelatedAccounts#relatedAccount');
}
function validateRelatedAccount(v) {
    return lexicons_1.lexicons.validate('tools.ozone.signature.findRelatedAccounts#relatedAccount', v);
}
//# sourceMappingURL=findRelatedAccounts.js.map