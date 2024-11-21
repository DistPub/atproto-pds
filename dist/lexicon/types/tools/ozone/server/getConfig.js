"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServiceConfig = isServiceConfig;
exports.validateServiceConfig = validateServiceConfig;
exports.isViewerConfig = isViewerConfig;
exports.validateViewerConfig = validateViewerConfig;
const lexicons_1 = require("../../../../lexicons");
const util_1 = require("../../../../util");
function isServiceConfig(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'tools.ozone.server.getConfig#serviceConfig');
}
function validateServiceConfig(v) {
    return lexicons_1.lexicons.validate('tools.ozone.server.getConfig#serviceConfig', v);
}
function isViewerConfig(v) {
    return ((0, util_1.isObj)(v) &&
        (0, util_1.hasProp)(v, '$type') &&
        v.$type === 'tools.ozone.server.getConfig#viewerConfig');
}
function validateViewerConfig(v) {
    return lexicons_1.lexicons.validate('tools.ozone.server.getConfig#viewerConfig', v);
}
//# sourceMappingURL=getConfig.js.map