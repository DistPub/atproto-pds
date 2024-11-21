"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMetadata = isMetadata;
exports.validateMetadata = validateMetadata;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isMetadata(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'chat.bsky.moderation.getActorMetadata#metadata');
}
function validateMetadata(v) {
    return lexicons_1.lexicons.validate('chat.bsky.moderation.getActorMetadata#metadata', v);
}
//# sourceMappingURL=getActorMetadata.js.map