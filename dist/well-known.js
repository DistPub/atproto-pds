"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = __importDefault(require("express"));
const createRouter = (ctx) => {
    const router = express_1.default.Router();
    router.get('/.well-known/atproto-did', async function (req, res) {
        const handle = req.hostname;
        const supportedHandle = ctx.cfg.identity.serviceHandleDomains.some((host) => handle.endsWith(host) || handle === host.slice(1));
        if (!supportedHandle) {
            return res.status(404).send('User not found');
        }
        let did;
        try {
            const user = await ctx.accountManager.getAccount(handle);
            did = user?.did;
        }
        catch (err) {
            return res.status(500).send('Internal Server Error');
        }
        if (!did) {
            return res.status(404).send('User not found');
        }
        res.type('text/plain').send(did);
    });
    return router;
};
exports.createRouter = createRouter;
//# sourceMappingURL=well-known.js.map