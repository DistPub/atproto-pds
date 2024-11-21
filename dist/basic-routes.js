"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const express_1 = __importDefault(require("express"));
const kysely_1 = require("kysely");
const createRouter = (ctx) => {
    const router = express_1.default.Router();
    router.get('/', function (req, res) {
        res.type('text/plain');
        res.send('This is an AT Protocol Personal Data Server (PDS): https://github.com/bluesky-social/atproto\n\nMost API routes are under /xrpc/');
    });
    router.get('/robots.txt', function (req, res) {
        res.type('text/plain');
        res.send('# Hello!\n\n# Crawling the public API is allowed\nUser-agent: *\nAllow: /');
    });
    router.get('/xrpc/_health', async function (req, res) {
        const { version } = ctx.cfg.service;
        try {
            await (0, kysely_1.sql) `select 1`.execute(ctx.accountManager.db.db);
        }
        catch (err) {
            req.log.error(err, 'failed health check');
            res.status(503).send({ version, error: 'Service Unavailable' });
            return;
        }
        res.send({ version });
    });
    return router;
};
exports.createRouter = createRouter;
//# sourceMappingURL=basic-routes.js.map