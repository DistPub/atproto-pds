"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsOzoneTeamNS = exports.ToolsOzoneSignatureNS = exports.ToolsOzoneSettingNS = exports.ToolsOzoneSetNS = exports.ToolsOzoneServerNS = exports.ToolsOzoneModerationNS = exports.ToolsOzoneCommunicationNS = exports.ToolsOzoneNS = exports.ToolsNS = exports.ChatBskyModerationNS = exports.ChatBskyConvoNS = exports.ChatBskyActorNS = exports.ChatBskyNS = exports.ChatNS = exports.AppBskyVideoNS = exports.AppBskyUnspeccedNS = exports.AppBskyRichtextNS = exports.AppBskyNotificationNS = exports.AppBskyLabelerNS = exports.AppBskyGraphNS = exports.AppBskyFeedNS = exports.AppBskyEmbedNS = exports.AppBskyActorNS = exports.AppBskyNS = exports.AppNS = exports.ComAtprotoTempNS = exports.ComAtprotoSyncNS = exports.ComAtprotoServerNS = exports.ComAtprotoRepoNS = exports.ComAtprotoModerationNS = exports.ComAtprotoLabelNS = exports.ComAtprotoIdentityNS = exports.ComAtprotoAdminNS = exports.ComAtprotoNS = exports.ComNS = exports.Server = exports.TOOLS_OZONE_TEAM = exports.TOOLS_OZONE_MODERATION = exports.APP_BSKY_GRAPH = exports.APP_BSKY_FEED = exports.COM_ATPROTO_MODERATION = void 0;
exports.createServer = createServer;
/**
 * GENERATED CODE - DO NOT MODIFY
 */
const xrpc_server_1 = require("@atproto/xrpc-server");
const lexicons_1 = require("./lexicons");
exports.COM_ATPROTO_MODERATION = {
    DefsReasonSpam: 'com.atproto.moderation.defs#reasonSpam',
    DefsReasonViolation: 'com.atproto.moderation.defs#reasonViolation',
    DefsReasonMisleading: 'com.atproto.moderation.defs#reasonMisleading',
    DefsReasonSexual: 'com.atproto.moderation.defs#reasonSexual',
    DefsReasonRude: 'com.atproto.moderation.defs#reasonRude',
    DefsReasonOther: 'com.atproto.moderation.defs#reasonOther',
    DefsReasonAppeal: 'com.atproto.moderation.defs#reasonAppeal',
};
exports.APP_BSKY_FEED = {
    DefsRequestLess: 'app.bsky.feed.defs#requestLess',
    DefsRequestMore: 'app.bsky.feed.defs#requestMore',
    DefsClickthroughItem: 'app.bsky.feed.defs#clickthroughItem',
    DefsClickthroughAuthor: 'app.bsky.feed.defs#clickthroughAuthor',
    DefsClickthroughReposter: 'app.bsky.feed.defs#clickthroughReposter',
    DefsClickthroughEmbed: 'app.bsky.feed.defs#clickthroughEmbed',
    DefsInteractionSeen: 'app.bsky.feed.defs#interactionSeen',
    DefsInteractionLike: 'app.bsky.feed.defs#interactionLike',
    DefsInteractionRepost: 'app.bsky.feed.defs#interactionRepost',
    DefsInteractionReply: 'app.bsky.feed.defs#interactionReply',
    DefsInteractionQuote: 'app.bsky.feed.defs#interactionQuote',
    DefsInteractionShare: 'app.bsky.feed.defs#interactionShare',
};
exports.APP_BSKY_GRAPH = {
    DefsModlist: 'app.bsky.graph.defs#modlist',
    DefsCuratelist: 'app.bsky.graph.defs#curatelist',
    DefsReferencelist: 'app.bsky.graph.defs#referencelist',
};
exports.TOOLS_OZONE_MODERATION = {
    DefsReviewOpen: 'tools.ozone.moderation.defs#reviewOpen',
    DefsReviewEscalated: 'tools.ozone.moderation.defs#reviewEscalated',
    DefsReviewClosed: 'tools.ozone.moderation.defs#reviewClosed',
    DefsReviewNone: 'tools.ozone.moderation.defs#reviewNone',
};
exports.TOOLS_OZONE_TEAM = {
    DefsRoleAdmin: 'tools.ozone.team.defs#roleAdmin',
    DefsRoleModerator: 'tools.ozone.team.defs#roleModerator',
    DefsRoleTriage: 'tools.ozone.team.defs#roleTriage',
};
function createServer(options) {
    return new Server(options);
}
class Server {
    constructor(options) {
        Object.defineProperty(this, "xrpc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "com", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "chat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tools", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.xrpc = (0, xrpc_server_1.createServer)(lexicons_1.schemas, options);
        this.com = new ComNS(this);
        this.app = new AppNS(this);
        this.chat = new ChatNS(this);
        this.tools = new ToolsNS(this);
    }
}
exports.Server = Server;
class ComNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "atproto", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.atproto = new ComAtprotoNS(server);
    }
}
exports.ComNS = ComNS;
class ComAtprotoNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "admin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "identity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "label", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "repo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sync", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "temp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.admin = new ComAtprotoAdminNS(server);
        this.identity = new ComAtprotoIdentityNS(server);
        this.label = new ComAtprotoLabelNS(server);
        this.moderation = new ComAtprotoModerationNS(server);
        this.repo = new ComAtprotoRepoNS(server);
        this.server = new ComAtprotoServerNS(server);
        this.sync = new ComAtprotoSyncNS(server);
        this.temp = new ComAtprotoTempNS(server);
    }
}
exports.ComAtprotoNS = ComAtprotoNS;
class ComAtprotoAdminNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    deleteAccount(cfg) {
        const nsid = 'com.atproto.admin.deleteAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    disableAccountInvites(cfg) {
        const nsid = 'com.atproto.admin.disableAccountInvites'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    disableInviteCodes(cfg) {
        const nsid = 'com.atproto.admin.disableInviteCodes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    enableAccountInvites(cfg) {
        const nsid = 'com.atproto.admin.enableAccountInvites'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getAccountInfo(cfg) {
        const nsid = 'com.atproto.admin.getAccountInfo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getAccountInfos(cfg) {
        const nsid = 'com.atproto.admin.getAccountInfos'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getInviteCodes(cfg) {
        const nsid = 'com.atproto.admin.getInviteCodes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSubjectStatus(cfg) {
        const nsid = 'com.atproto.admin.getSubjectStatus'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchAccounts(cfg) {
        const nsid = 'com.atproto.admin.searchAccounts'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    sendEmail(cfg) {
        const nsid = 'com.atproto.admin.sendEmail'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateAccountEmail(cfg) {
        const nsid = 'com.atproto.admin.updateAccountEmail'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateAccountHandle(cfg) {
        const nsid = 'com.atproto.admin.updateAccountHandle'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateAccountPassword(cfg) {
        const nsid = 'com.atproto.admin.updateAccountPassword'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateSubjectStatus(cfg) {
        const nsid = 'com.atproto.admin.updateSubjectStatus'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoAdminNS = ComAtprotoAdminNS;
class ComAtprotoIdentityNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getRecommendedDidCredentials(cfg) {
        const nsid = 'com.atproto.identity.getRecommendedDidCredentials'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestPlcOperationSignature(cfg) {
        const nsid = 'com.atproto.identity.requestPlcOperationSignature'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    resolveHandle(cfg) {
        const nsid = 'com.atproto.identity.resolveHandle'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    signPlcOperation(cfg) {
        const nsid = 'com.atproto.identity.signPlcOperation'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    submitPlcOperation(cfg) {
        const nsid = 'com.atproto.identity.submitPlcOperation'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateHandle(cfg) {
        const nsid = 'com.atproto.identity.updateHandle'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoIdentityNS = ComAtprotoIdentityNS;
class ComAtprotoLabelNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    queryLabels(cfg) {
        const nsid = 'com.atproto.label.queryLabels'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    subscribeLabels(cfg) {
        const nsid = 'com.atproto.label.subscribeLabels'; // @ts-ignore
        return this._server.xrpc.streamMethod(nsid, cfg);
    }
}
exports.ComAtprotoLabelNS = ComAtprotoLabelNS;
class ComAtprotoModerationNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    createReport(cfg) {
        const nsid = 'com.atproto.moderation.createReport'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoModerationNS = ComAtprotoModerationNS;
class ComAtprotoRepoNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    applyWrites(cfg) {
        const nsid = 'com.atproto.repo.applyWrites'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createRecord(cfg) {
        const nsid = 'com.atproto.repo.createRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteRecord(cfg) {
        const nsid = 'com.atproto.repo.deleteRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    describeRepo(cfg) {
        const nsid = 'com.atproto.repo.describeRepo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRecord(cfg) {
        const nsid = 'com.atproto.repo.getRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    importRepo(cfg) {
        const nsid = 'com.atproto.repo.importRepo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listMissingBlobs(cfg) {
        const nsid = 'com.atproto.repo.listMissingBlobs'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listRecords(cfg) {
        const nsid = 'com.atproto.repo.listRecords'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    putRecord(cfg) {
        const nsid = 'com.atproto.repo.putRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    uploadBlob(cfg) {
        const nsid = 'com.atproto.repo.uploadBlob'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoRepoNS = ComAtprotoRepoNS;
class ComAtprotoServerNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    activateAccount(cfg) {
        const nsid = 'com.atproto.server.activateAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    checkAccountStatus(cfg) {
        const nsid = 'com.atproto.server.checkAccountStatus'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    confirmEmail(cfg) {
        const nsid = 'com.atproto.server.confirmEmail'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createAccount(cfg) {
        const nsid = 'com.atproto.server.createAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createAppPassword(cfg) {
        const nsid = 'com.atproto.server.createAppPassword'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createInviteCode(cfg) {
        const nsid = 'com.atproto.server.createInviteCode'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createInviteCodes(cfg) {
        const nsid = 'com.atproto.server.createInviteCodes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    createSession(cfg) {
        const nsid = 'com.atproto.server.createSession'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deactivateAccount(cfg) {
        const nsid = 'com.atproto.server.deactivateAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteAccount(cfg) {
        const nsid = 'com.atproto.server.deleteAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteSession(cfg) {
        const nsid = 'com.atproto.server.deleteSession'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    describeServer(cfg) {
        const nsid = 'com.atproto.server.describeServer'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getAccountInviteCodes(cfg) {
        const nsid = 'com.atproto.server.getAccountInviteCodes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getServiceAuth(cfg) {
        const nsid = 'com.atproto.server.getServiceAuth'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSession(cfg) {
        const nsid = 'com.atproto.server.getSession'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listAppPasswords(cfg) {
        const nsid = 'com.atproto.server.listAppPasswords'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    refreshSession(cfg) {
        const nsid = 'com.atproto.server.refreshSession'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestAccountDelete(cfg) {
        const nsid = 'com.atproto.server.requestAccountDelete'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestEmailConfirmation(cfg) {
        const nsid = 'com.atproto.server.requestEmailConfirmation'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestEmailUpdate(cfg) {
        const nsid = 'com.atproto.server.requestEmailUpdate'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestPasswordReset(cfg) {
        const nsid = 'com.atproto.server.requestPasswordReset'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    reserveSigningKey(cfg) {
        const nsid = 'com.atproto.server.reserveSigningKey'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    resetPassword(cfg) {
        const nsid = 'com.atproto.server.resetPassword'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    revokeAppPassword(cfg) {
        const nsid = 'com.atproto.server.revokeAppPassword'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateEmail(cfg) {
        const nsid = 'com.atproto.server.updateEmail'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoServerNS = ComAtprotoServerNS;
class ComAtprotoSyncNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getBlob(cfg) {
        const nsid = 'com.atproto.sync.getBlob'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getBlocks(cfg) {
        const nsid = 'com.atproto.sync.getBlocks'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getCheckout(cfg) {
        const nsid = 'com.atproto.sync.getCheckout'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getHead(cfg) {
        const nsid = 'com.atproto.sync.getHead'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getLatestCommit(cfg) {
        const nsid = 'com.atproto.sync.getLatestCommit'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRecord(cfg) {
        const nsid = 'com.atproto.sync.getRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRepo(cfg) {
        const nsid = 'com.atproto.sync.getRepo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRepoStatus(cfg) {
        const nsid = 'com.atproto.sync.getRepoStatus'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listBlobs(cfg) {
        const nsid = 'com.atproto.sync.listBlobs'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listRepos(cfg) {
        const nsid = 'com.atproto.sync.listRepos'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    notifyOfUpdate(cfg) {
        const nsid = 'com.atproto.sync.notifyOfUpdate'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestCrawl(cfg) {
        const nsid = 'com.atproto.sync.requestCrawl'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    subscribeRepos(cfg) {
        const nsid = 'com.atproto.sync.subscribeRepos'; // @ts-ignore
        return this._server.xrpc.streamMethod(nsid, cfg);
    }
}
exports.ComAtprotoSyncNS = ComAtprotoSyncNS;
class ComAtprotoTempNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    checkSignupQueue(cfg) {
        const nsid = 'com.atproto.temp.checkSignupQueue'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    fetchLabels(cfg) {
        const nsid = 'com.atproto.temp.fetchLabels'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    requestPhoneVerification(cfg) {
        const nsid = 'com.atproto.temp.requestPhoneVerification'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ComAtprotoTempNS = ComAtprotoTempNS;
class AppNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bsky", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.bsky = new AppBskyNS(server);
    }
}
exports.AppNS = AppNS;
class AppBskyNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "embed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "feed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "graph", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "labeler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "notification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "richtext", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "unspecced", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.actor = new AppBskyActorNS(server);
        this.embed = new AppBskyEmbedNS(server);
        this.feed = new AppBskyFeedNS(server);
        this.graph = new AppBskyGraphNS(server);
        this.labeler = new AppBskyLabelerNS(server);
        this.notification = new AppBskyNotificationNS(server);
        this.richtext = new AppBskyRichtextNS(server);
        this.unspecced = new AppBskyUnspeccedNS(server);
        this.video = new AppBskyVideoNS(server);
    }
}
exports.AppBskyNS = AppBskyNS;
class AppBskyActorNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getPreferences(cfg) {
        const nsid = 'app.bsky.actor.getPreferences'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getProfile(cfg) {
        const nsid = 'app.bsky.actor.getProfile'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getProfiles(cfg) {
        const nsid = 'app.bsky.actor.getProfiles'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSuggestions(cfg) {
        const nsid = 'app.bsky.actor.getSuggestions'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    putPreferences(cfg) {
        const nsid = 'app.bsky.actor.putPreferences'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchActors(cfg) {
        const nsid = 'app.bsky.actor.searchActors'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchActorsTypeahead(cfg) {
        const nsid = 'app.bsky.actor.searchActorsTypeahead'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyActorNS = AppBskyActorNS;
class AppBskyEmbedNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
}
exports.AppBskyEmbedNS = AppBskyEmbedNS;
class AppBskyFeedNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    describeFeedGenerator(cfg) {
        const nsid = 'app.bsky.feed.describeFeedGenerator'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getActorFeeds(cfg) {
        const nsid = 'app.bsky.feed.getActorFeeds'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getActorLikes(cfg) {
        const nsid = 'app.bsky.feed.getActorLikes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getAuthorFeed(cfg) {
        const nsid = 'app.bsky.feed.getAuthorFeed'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFeed(cfg) {
        const nsid = 'app.bsky.feed.getFeed'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFeedGenerator(cfg) {
        const nsid = 'app.bsky.feed.getFeedGenerator'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFeedGenerators(cfg) {
        const nsid = 'app.bsky.feed.getFeedGenerators'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFeedSkeleton(cfg) {
        const nsid = 'app.bsky.feed.getFeedSkeleton'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getLikes(cfg) {
        const nsid = 'app.bsky.feed.getLikes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getListFeed(cfg) {
        const nsid = 'app.bsky.feed.getListFeed'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getPostThread(cfg) {
        const nsid = 'app.bsky.feed.getPostThread'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getPosts(cfg) {
        const nsid = 'app.bsky.feed.getPosts'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getQuotes(cfg) {
        const nsid = 'app.bsky.feed.getQuotes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRepostedBy(cfg) {
        const nsid = 'app.bsky.feed.getRepostedBy'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSuggestedFeeds(cfg) {
        const nsid = 'app.bsky.feed.getSuggestedFeeds'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getTimeline(cfg) {
        const nsid = 'app.bsky.feed.getTimeline'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchPosts(cfg) {
        const nsid = 'app.bsky.feed.searchPosts'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    sendInteractions(cfg) {
        const nsid = 'app.bsky.feed.sendInteractions'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyFeedNS = AppBskyFeedNS;
class AppBskyGraphNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getActorStarterPacks(cfg) {
        const nsid = 'app.bsky.graph.getActorStarterPacks'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getBlocks(cfg) {
        const nsid = 'app.bsky.graph.getBlocks'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFollowers(cfg) {
        const nsid = 'app.bsky.graph.getFollowers'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getFollows(cfg) {
        const nsid = 'app.bsky.graph.getFollows'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getKnownFollowers(cfg) {
        const nsid = 'app.bsky.graph.getKnownFollowers'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getList(cfg) {
        const nsid = 'app.bsky.graph.getList'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getListBlocks(cfg) {
        const nsid = 'app.bsky.graph.getListBlocks'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getListMutes(cfg) {
        const nsid = 'app.bsky.graph.getListMutes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getLists(cfg) {
        const nsid = 'app.bsky.graph.getLists'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getMutes(cfg) {
        const nsid = 'app.bsky.graph.getMutes'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRelationships(cfg) {
        const nsid = 'app.bsky.graph.getRelationships'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getStarterPack(cfg) {
        const nsid = 'app.bsky.graph.getStarterPack'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getStarterPacks(cfg) {
        const nsid = 'app.bsky.graph.getStarterPacks'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSuggestedFollowsByActor(cfg) {
        const nsid = 'app.bsky.graph.getSuggestedFollowsByActor'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    muteActor(cfg) {
        const nsid = 'app.bsky.graph.muteActor'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    muteActorList(cfg) {
        const nsid = 'app.bsky.graph.muteActorList'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    muteThread(cfg) {
        const nsid = 'app.bsky.graph.muteThread'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    unmuteActor(cfg) {
        const nsid = 'app.bsky.graph.unmuteActor'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    unmuteActorList(cfg) {
        const nsid = 'app.bsky.graph.unmuteActorList'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    unmuteThread(cfg) {
        const nsid = 'app.bsky.graph.unmuteThread'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyGraphNS = AppBskyGraphNS;
class AppBskyLabelerNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getServices(cfg) {
        const nsid = 'app.bsky.labeler.getServices'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyLabelerNS = AppBskyLabelerNS;
class AppBskyNotificationNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getUnreadCount(cfg) {
        const nsid = 'app.bsky.notification.getUnreadCount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listNotifications(cfg) {
        const nsid = 'app.bsky.notification.listNotifications'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    putPreferences(cfg) {
        const nsid = 'app.bsky.notification.putPreferences'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    registerPush(cfg) {
        const nsid = 'app.bsky.notification.registerPush'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateSeen(cfg) {
        const nsid = 'app.bsky.notification.updateSeen'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyNotificationNS = AppBskyNotificationNS;
class AppBskyRichtextNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
}
exports.AppBskyRichtextNS = AppBskyRichtextNS;
class AppBskyUnspeccedNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getConfig(cfg) {
        const nsid = 'app.bsky.unspecced.getConfig'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getPopularFeedGenerators(cfg) {
        const nsid = 'app.bsky.unspecced.getPopularFeedGenerators'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getSuggestionsSkeleton(cfg) {
        const nsid = 'app.bsky.unspecced.getSuggestionsSkeleton'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getTaggedSuggestions(cfg) {
        const nsid = 'app.bsky.unspecced.getTaggedSuggestions'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchActorsSkeleton(cfg) {
        const nsid = 'app.bsky.unspecced.searchActorsSkeleton'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchPostsSkeleton(cfg) {
        const nsid = 'app.bsky.unspecced.searchPostsSkeleton'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyUnspeccedNS = AppBskyUnspeccedNS;
class AppBskyVideoNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getJobStatus(cfg) {
        const nsid = 'app.bsky.video.getJobStatus'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getUploadLimits(cfg) {
        const nsid = 'app.bsky.video.getUploadLimits'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    uploadVideo(cfg) {
        const nsid = 'app.bsky.video.uploadVideo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.AppBskyVideoNS = AppBskyVideoNS;
class ChatNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bsky", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.bsky = new ChatBskyNS(server);
    }
}
exports.ChatNS = ChatNS;
class ChatBskyNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "convo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.actor = new ChatBskyActorNS(server);
        this.convo = new ChatBskyConvoNS(server);
        this.moderation = new ChatBskyModerationNS(server);
    }
}
exports.ChatBskyNS = ChatBskyNS;
class ChatBskyActorNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    deleteAccount(cfg) {
        const nsid = 'chat.bsky.actor.deleteAccount'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    exportAccountData(cfg) {
        const nsid = 'chat.bsky.actor.exportAccountData'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ChatBskyActorNS = ChatBskyActorNS;
class ChatBskyConvoNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    deleteMessageForSelf(cfg) {
        const nsid = 'chat.bsky.convo.deleteMessageForSelf'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getConvo(cfg) {
        const nsid = 'chat.bsky.convo.getConvo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getConvoForMembers(cfg) {
        const nsid = 'chat.bsky.convo.getConvoForMembers'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getLog(cfg) {
        const nsid = 'chat.bsky.convo.getLog'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getMessages(cfg) {
        const nsid = 'chat.bsky.convo.getMessages'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    leaveConvo(cfg) {
        const nsid = 'chat.bsky.convo.leaveConvo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listConvos(cfg) {
        const nsid = 'chat.bsky.convo.listConvos'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    muteConvo(cfg) {
        const nsid = 'chat.bsky.convo.muteConvo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    sendMessage(cfg) {
        const nsid = 'chat.bsky.convo.sendMessage'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    sendMessageBatch(cfg) {
        const nsid = 'chat.bsky.convo.sendMessageBatch'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    unmuteConvo(cfg) {
        const nsid = 'chat.bsky.convo.unmuteConvo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateRead(cfg) {
        const nsid = 'chat.bsky.convo.updateRead'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ChatBskyConvoNS = ChatBskyConvoNS;
class ChatBskyModerationNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getActorMetadata(cfg) {
        const nsid = 'chat.bsky.moderation.getActorMetadata'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getMessageContext(cfg) {
        const nsid = 'chat.bsky.moderation.getMessageContext'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateActorAccess(cfg) {
        const nsid = 'chat.bsky.moderation.updateActorAccess'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ChatBskyModerationNS = ChatBskyModerationNS;
class ToolsNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ozone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.ozone = new ToolsOzoneNS(server);
    }
}
exports.ToolsNS = ToolsNS;
class ToolsOzoneNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "communication", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "moderation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "set", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "setting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "signature", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "team", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
        this.communication = new ToolsOzoneCommunicationNS(server);
        this.moderation = new ToolsOzoneModerationNS(server);
        this.server = new ToolsOzoneServerNS(server);
        this.set = new ToolsOzoneSetNS(server);
        this.setting = new ToolsOzoneSettingNS(server);
        this.signature = new ToolsOzoneSignatureNS(server);
        this.team = new ToolsOzoneTeamNS(server);
    }
}
exports.ToolsOzoneNS = ToolsOzoneNS;
class ToolsOzoneCommunicationNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    createTemplate(cfg) {
        const nsid = 'tools.ozone.communication.createTemplate'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteTemplate(cfg) {
        const nsid = 'tools.ozone.communication.deleteTemplate'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listTemplates(cfg) {
        const nsid = 'tools.ozone.communication.listTemplates'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateTemplate(cfg) {
        const nsid = 'tools.ozone.communication.updateTemplate'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneCommunicationNS = ToolsOzoneCommunicationNS;
class ToolsOzoneModerationNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    emitEvent(cfg) {
        const nsid = 'tools.ozone.moderation.emitEvent'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getEvent(cfg) {
        const nsid = 'tools.ozone.moderation.getEvent'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRecord(cfg) {
        const nsid = 'tools.ozone.moderation.getRecord'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRecords(cfg) {
        const nsid = 'tools.ozone.moderation.getRecords'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRepo(cfg) {
        const nsid = 'tools.ozone.moderation.getRepo'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getRepos(cfg) {
        const nsid = 'tools.ozone.moderation.getRepos'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    queryEvents(cfg) {
        const nsid = 'tools.ozone.moderation.queryEvents'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    queryStatuses(cfg) {
        const nsid = 'tools.ozone.moderation.queryStatuses'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchRepos(cfg) {
        const nsid = 'tools.ozone.moderation.searchRepos'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneModerationNS = ToolsOzoneModerationNS;
class ToolsOzoneServerNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    getConfig(cfg) {
        const nsid = 'tools.ozone.server.getConfig'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneServerNS = ToolsOzoneServerNS;
class ToolsOzoneSetNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    addValues(cfg) {
        const nsid = 'tools.ozone.set.addValues'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteSet(cfg) {
        const nsid = 'tools.ozone.set.deleteSet'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteValues(cfg) {
        const nsid = 'tools.ozone.set.deleteValues'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    getValues(cfg) {
        const nsid = 'tools.ozone.set.getValues'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    querySets(cfg) {
        const nsid = 'tools.ozone.set.querySets'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    upsertSet(cfg) {
        const nsid = 'tools.ozone.set.upsertSet'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneSetNS = ToolsOzoneSetNS;
class ToolsOzoneSettingNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    listOptions(cfg) {
        const nsid = 'tools.ozone.setting.listOptions'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    removeOptions(cfg) {
        const nsid = 'tools.ozone.setting.removeOptions'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    upsertOption(cfg) {
        const nsid = 'tools.ozone.setting.upsertOption'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneSettingNS = ToolsOzoneSettingNS;
class ToolsOzoneSignatureNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    findCorrelation(cfg) {
        const nsid = 'tools.ozone.signature.findCorrelation'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    findRelatedAccounts(cfg) {
        const nsid = 'tools.ozone.signature.findRelatedAccounts'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    searchAccounts(cfg) {
        const nsid = 'tools.ozone.signature.searchAccounts'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneSignatureNS = ToolsOzoneSignatureNS;
class ToolsOzoneTeamNS {
    constructor(server) {
        Object.defineProperty(this, "_server", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._server = server;
    }
    addMember(cfg) {
        const nsid = 'tools.ozone.team.addMember'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    deleteMember(cfg) {
        const nsid = 'tools.ozone.team.deleteMember'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    listMembers(cfg) {
        const nsid = 'tools.ozone.team.listMembers'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
    updateMember(cfg) {
        const nsid = 'tools.ozone.team.updateMember'; // @ts-ignore
        return this._server.xrpc.method(nsid, cfg);
    }
}
exports.ToolsOzoneTeamNS = ToolsOzoneTeamNS;
//# sourceMappingURL=index.js.map