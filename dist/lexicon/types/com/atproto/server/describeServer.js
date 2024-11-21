"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLinks = isLinks;
exports.validateLinks = validateLinks;
exports.isContact = isContact;
exports.validateContact = validateContact;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isLinks(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.describeServer#links');
}
function validateLinks(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.describeServer#links', v);
}
function isContact(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'com.atproto.server.describeServer#contact');
}
function validateContact(v) {
    return lexicons_1.lexicons.validate('com.atproto.server.describeServer#contact', v);
}
//# sourceMappingURL=describeServer.js.map