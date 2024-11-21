"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecordBlob = isRecordBlob;
exports.validateRecordBlob = validateRecordBlob;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isRecordBlob(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.repo.listMissingBlobs#recordBlob');
}
function validateRecordBlob(v) {
    return lexicons_1.lexicons.validate('com.atproto.repo.listMissingBlobs#recordBlob', v);
}
//# sourceMappingURL=listMissingBlobs.js.map