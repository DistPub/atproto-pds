"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProfileViewBasic = isProfileViewBasic;
exports.validateProfileViewBasic = validateProfileViewBasic;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isProfileViewBasic(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'chat.bsky.actor.defs#profileViewBasic');
}
function validateProfileViewBasic(v) {
    return lexicons_1.lexicons.validate('chat.bsky.actor.defs#profileViewBasic', v);
}
//# sourceMappingURL=defs.js.map