"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecord = isRecord;
exports.validateRecord = validateRecord;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRecord(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.repo.listRecords#record');
}
function validateRecord(v) {
    return lexicons_1.lexicons.validate('com.atproto.repo.listRecords#record', v);
}
//# sourceMappingURL=listRecords.js.map