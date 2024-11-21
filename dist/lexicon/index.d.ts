/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Server as XrpcServer, Options as XrpcOptions, AuthVerifier, StreamAuthVerifier } from '@atproto/xrpc-server';
import * as ComAtprotoAdminDeleteAccount from './types/com/atproto/admin/deleteAccount';
import * as ComAtprotoAdminDisableAccountInvites from './types/com/atproto/admin/disableAccountInvites';
import * as ComAtprotoAdminDisableInviteCodes from './types/com/atproto/admin/disableInviteCodes';
import * as ComAtprotoAdminEnableAccountInvites from './types/com/atproto/admin/enableAccountInvites';
import * as ComAtprotoAdminGetAccountInfo from './types/com/atproto/admin/getAccountInfo';
import * as ComAtprotoAdminGetAccountInfos from './types/com/atproto/admin/getAccountInfos';
import * as ComAtprotoAdminGetInviteCodes from './types/com/atproto/admin/getInviteCodes';
import * as ComAtprotoAdminGetSubjectStatus from './types/com/atproto/admin/getSubjectStatus';
import * as ComAtprotoAdminSearchAccounts from './types/com/atproto/admin/searchAccounts';
import * as ComAtprotoAdminSendEmail from './types/com/atproto/admin/sendEmail';
import * as ComAtprotoAdminUpdateAccountEmail from './types/com/atproto/admin/updateAccountEmail';
import * as ComAtprotoAdminUpdateAccountHandle from './types/com/atproto/admin/updateAccountHandle';
import * as ComAtprotoAdminUpdateAccountPassword from './types/com/atproto/admin/updateAccountPassword';
import * as ComAtprotoAdminUpdateSubjectStatus from './types/com/atproto/admin/updateSubjectStatus';
import * as ComAtprotoIdentityGetRecommendedDidCredentials from './types/com/atproto/identity/getRecommendedDidCredentials';
import * as ComAtprotoIdentityRequestPlcOperationSignature from './types/com/atproto/identity/requestPlcOperationSignature';
import * as ComAtprotoIdentityResolveHandle from './types/com/atproto/identity/resolveHandle';
import * as ComAtprotoIdentitySignPlcOperation from './types/com/atproto/identity/signPlcOperation';
import * as ComAtprotoIdentitySubmitPlcOperation from './types/com/atproto/identity/submitPlcOperation';
import * as ComAtprotoIdentityUpdateHandle from './types/com/atproto/identity/updateHandle';
import * as ComAtprotoLabelQueryLabels from './types/com/atproto/label/queryLabels';
import * as ComAtprotoLabelSubscribeLabels from './types/com/atproto/label/subscribeLabels';
import * as ComAtprotoModerationCreateReport from './types/com/atproto/moderation/createReport';
import * as ComAtprotoRepoApplyWrites from './types/com/atproto/repo/applyWrites';
import * as ComAtprotoRepoCreateRecord from './types/com/atproto/repo/createRecord';
import * as ComAtprotoRepoDeleteRecord from './types/com/atproto/repo/deleteRecord';
import * as ComAtprotoRepoDescribeRepo from './types/com/atproto/repo/describeRepo';
import * as ComAtprotoRepoGetRecord from './types/com/atproto/repo/getRecord';
import * as ComAtprotoRepoImportRepo from './types/com/atproto/repo/importRepo';
import * as ComAtprotoRepoListMissingBlobs from './types/com/atproto/repo/listMissingBlobs';
import * as ComAtprotoRepoListRecords from './types/com/atproto/repo/listRecords';
import * as ComAtprotoRepoPutRecord from './types/com/atproto/repo/putRecord';
import * as ComAtprotoRepoUploadBlob from './types/com/atproto/repo/uploadBlob';
import * as ComAtprotoServerActivateAccount from './types/com/atproto/server/activateAccount';
import * as ComAtprotoServerCheckAccountStatus from './types/com/atproto/server/checkAccountStatus';
import * as ComAtprotoServerConfirmEmail from './types/com/atproto/server/confirmEmail';
import * as ComAtprotoServerCreateAccount from './types/com/atproto/server/createAccount';
import * as ComAtprotoServerCreateAppPassword from './types/com/atproto/server/createAppPassword';
import * as ComAtprotoServerCreateInviteCode from './types/com/atproto/server/createInviteCode';
import * as ComAtprotoServerCreateInviteCodes from './types/com/atproto/server/createInviteCodes';
import * as ComAtprotoServerCreateSession from './types/com/atproto/server/createSession';
import * as ComAtprotoServerDeactivateAccount from './types/com/atproto/server/deactivateAccount';
import * as ComAtprotoServerDeleteAccount from './types/com/atproto/server/deleteAccount';
import * as ComAtprotoServerDeleteSession from './types/com/atproto/server/deleteSession';
import * as ComAtprotoServerDescribeServer from './types/com/atproto/server/describeServer';
import * as ComAtprotoServerGetAccountInviteCodes from './types/com/atproto/server/getAccountInviteCodes';
import * as ComAtprotoServerGetServiceAuth from './types/com/atproto/server/getServiceAuth';
import * as ComAtprotoServerGetSession from './types/com/atproto/server/getSession';
import * as ComAtprotoServerListAppPasswords from './types/com/atproto/server/listAppPasswords';
import * as ComAtprotoServerRefreshSession from './types/com/atproto/server/refreshSession';
import * as ComAtprotoServerRequestAccountDelete from './types/com/atproto/server/requestAccountDelete';
import * as ComAtprotoServerRequestEmailConfirmation from './types/com/atproto/server/requestEmailConfirmation';
import * as ComAtprotoServerRequestEmailUpdate from './types/com/atproto/server/requestEmailUpdate';
import * as ComAtprotoServerRequestPasswordReset from './types/com/atproto/server/requestPasswordReset';
import * as ComAtprotoServerReserveSigningKey from './types/com/atproto/server/reserveSigningKey';
import * as ComAtprotoServerResetPassword from './types/com/atproto/server/resetPassword';
import * as ComAtprotoServerRevokeAppPassword from './types/com/atproto/server/revokeAppPassword';
import * as ComAtprotoServerUpdateEmail from './types/com/atproto/server/updateEmail';
import * as ComAtprotoSyncGetBlob from './types/com/atproto/sync/getBlob';
import * as ComAtprotoSyncGetBlocks from './types/com/atproto/sync/getBlocks';
import * as ComAtprotoSyncGetCheckout from './types/com/atproto/sync/getCheckout';
import * as ComAtprotoSyncGetHead from './types/com/atproto/sync/getHead';
import * as ComAtprotoSyncGetLatestCommit from './types/com/atproto/sync/getLatestCommit';
import * as ComAtprotoSyncGetRecord from './types/com/atproto/sync/getRecord';
import * as ComAtprotoSyncGetRepo from './types/com/atproto/sync/getRepo';
import * as ComAtprotoSyncGetRepoStatus from './types/com/atproto/sync/getRepoStatus';
import * as ComAtprotoSyncListBlobs from './types/com/atproto/sync/listBlobs';
import * as ComAtprotoSyncListRepos from './types/com/atproto/sync/listRepos';
import * as ComAtprotoSyncNotifyOfUpdate from './types/com/atproto/sync/notifyOfUpdate';
import * as ComAtprotoSyncRequestCrawl from './types/com/atproto/sync/requestCrawl';
import * as ComAtprotoSyncSubscribeRepos from './types/com/atproto/sync/subscribeRepos';
import * as ComAtprotoTempCheckSignupQueue from './types/com/atproto/temp/checkSignupQueue';
import * as ComAtprotoTempFetchLabels from './types/com/atproto/temp/fetchLabels';
import * as ComAtprotoTempRequestPhoneVerification from './types/com/atproto/temp/requestPhoneVerification';
import * as AppBskyActorGetPreferences from './types/app/bsky/actor/getPreferences';
import * as AppBskyActorGetProfile from './types/app/bsky/actor/getProfile';
import * as AppBskyActorGetProfiles from './types/app/bsky/actor/getProfiles';
import * as AppBskyActorGetSuggestions from './types/app/bsky/actor/getSuggestions';
import * as AppBskyActorPutPreferences from './types/app/bsky/actor/putPreferences';
import * as AppBskyActorSearchActors from './types/app/bsky/actor/searchActors';
import * as AppBskyActorSearchActorsTypeahead from './types/app/bsky/actor/searchActorsTypeahead';
import * as AppBskyFeedDescribeFeedGenerator from './types/app/bsky/feed/describeFeedGenerator';
import * as AppBskyFeedGetActorFeeds from './types/app/bsky/feed/getActorFeeds';
import * as AppBskyFeedGetActorLikes from './types/app/bsky/feed/getActorLikes';
import * as AppBskyFeedGetAuthorFeed from './types/app/bsky/feed/getAuthorFeed';
import * as AppBskyFeedGetFeed from './types/app/bsky/feed/getFeed';
import * as AppBskyFeedGetFeedGenerator from './types/app/bsky/feed/getFeedGenerator';
import * as AppBskyFeedGetFeedGenerators from './types/app/bsky/feed/getFeedGenerators';
import * as AppBskyFeedGetFeedSkeleton from './types/app/bsky/feed/getFeedSkeleton';
import * as AppBskyFeedGetLikes from './types/app/bsky/feed/getLikes';
import * as AppBskyFeedGetListFeed from './types/app/bsky/feed/getListFeed';
import * as AppBskyFeedGetPostThread from './types/app/bsky/feed/getPostThread';
import * as AppBskyFeedGetPosts from './types/app/bsky/feed/getPosts';
import * as AppBskyFeedGetQuotes from './types/app/bsky/feed/getQuotes';
import * as AppBskyFeedGetRepostedBy from './types/app/bsky/feed/getRepostedBy';
import * as AppBskyFeedGetSuggestedFeeds from './types/app/bsky/feed/getSuggestedFeeds';
import * as AppBskyFeedGetTimeline from './types/app/bsky/feed/getTimeline';
import * as AppBskyFeedSearchPosts from './types/app/bsky/feed/searchPosts';
import * as AppBskyFeedSendInteractions from './types/app/bsky/feed/sendInteractions';
import * as AppBskyGraphGetActorStarterPacks from './types/app/bsky/graph/getActorStarterPacks';
import * as AppBskyGraphGetBlocks from './types/app/bsky/graph/getBlocks';
import * as AppBskyGraphGetFollowers from './types/app/bsky/graph/getFollowers';
import * as AppBskyGraphGetFollows from './types/app/bsky/graph/getFollows';
import * as AppBskyGraphGetKnownFollowers from './types/app/bsky/graph/getKnownFollowers';
import * as AppBskyGraphGetList from './types/app/bsky/graph/getList';
import * as AppBskyGraphGetListBlocks from './types/app/bsky/graph/getListBlocks';
import * as AppBskyGraphGetListMutes from './types/app/bsky/graph/getListMutes';
import * as AppBskyGraphGetLists from './types/app/bsky/graph/getLists';
import * as AppBskyGraphGetMutes from './types/app/bsky/graph/getMutes';
import * as AppBskyGraphGetRelationships from './types/app/bsky/graph/getRelationships';
import * as AppBskyGraphGetStarterPack from './types/app/bsky/graph/getStarterPack';
import * as AppBskyGraphGetStarterPacks from './types/app/bsky/graph/getStarterPacks';
import * as AppBskyGraphGetSuggestedFollowsByActor from './types/app/bsky/graph/getSuggestedFollowsByActor';
import * as AppBskyGraphMuteActor from './types/app/bsky/graph/muteActor';
import * as AppBskyGraphMuteActorList from './types/app/bsky/graph/muteActorList';
import * as AppBskyGraphMuteThread from './types/app/bsky/graph/muteThread';
import * as AppBskyGraphUnmuteActor from './types/app/bsky/graph/unmuteActor';
import * as AppBskyGraphUnmuteActorList from './types/app/bsky/graph/unmuteActorList';
import * as AppBskyGraphUnmuteThread from './types/app/bsky/graph/unmuteThread';
import * as AppBskyLabelerGetServices from './types/app/bsky/labeler/getServices';
import * as AppBskyNotificationGetUnreadCount from './types/app/bsky/notification/getUnreadCount';
import * as AppBskyNotificationListNotifications from './types/app/bsky/notification/listNotifications';
import * as AppBskyNotificationPutPreferences from './types/app/bsky/notification/putPreferences';
import * as AppBskyNotificationRegisterPush from './types/app/bsky/notification/registerPush';
import * as AppBskyNotificationUpdateSeen from './types/app/bsky/notification/updateSeen';
import * as AppBskyUnspeccedGetConfig from './types/app/bsky/unspecced/getConfig';
import * as AppBskyUnspeccedGetPopularFeedGenerators from './types/app/bsky/unspecced/getPopularFeedGenerators';
import * as AppBskyUnspeccedGetSuggestionsSkeleton from './types/app/bsky/unspecced/getSuggestionsSkeleton';
import * as AppBskyUnspeccedGetTaggedSuggestions from './types/app/bsky/unspecced/getTaggedSuggestions';
import * as AppBskyUnspeccedSearchActorsSkeleton from './types/app/bsky/unspecced/searchActorsSkeleton';
import * as AppBskyUnspeccedSearchPostsSkeleton from './types/app/bsky/unspecced/searchPostsSkeleton';
import * as AppBskyVideoGetJobStatus from './types/app/bsky/video/getJobStatus';
import * as AppBskyVideoGetUploadLimits from './types/app/bsky/video/getUploadLimits';
import * as AppBskyVideoUploadVideo from './types/app/bsky/video/uploadVideo';
import * as ChatBskyActorDeleteAccount from './types/chat/bsky/actor/deleteAccount';
import * as ChatBskyActorExportAccountData from './types/chat/bsky/actor/exportAccountData';
import * as ChatBskyConvoDeleteMessageForSelf from './types/chat/bsky/convo/deleteMessageForSelf';
import * as ChatBskyConvoGetConvo from './types/chat/bsky/convo/getConvo';
import * as ChatBskyConvoGetConvoForMembers from './types/chat/bsky/convo/getConvoForMembers';
import * as ChatBskyConvoGetLog from './types/chat/bsky/convo/getLog';
import * as ChatBskyConvoGetMessages from './types/chat/bsky/convo/getMessages';
import * as ChatBskyConvoLeaveConvo from './types/chat/bsky/convo/leaveConvo';
import * as ChatBskyConvoListConvos from './types/chat/bsky/convo/listConvos';
import * as ChatBskyConvoMuteConvo from './types/chat/bsky/convo/muteConvo';
import * as ChatBskyConvoSendMessage from './types/chat/bsky/convo/sendMessage';
import * as ChatBskyConvoSendMessageBatch from './types/chat/bsky/convo/sendMessageBatch';
import * as ChatBskyConvoUnmuteConvo from './types/chat/bsky/convo/unmuteConvo';
import * as ChatBskyConvoUpdateRead from './types/chat/bsky/convo/updateRead';
import * as ChatBskyModerationGetActorMetadata from './types/chat/bsky/moderation/getActorMetadata';
import * as ChatBskyModerationGetMessageContext from './types/chat/bsky/moderation/getMessageContext';
import * as ChatBskyModerationUpdateActorAccess from './types/chat/bsky/moderation/updateActorAccess';
import * as ToolsOzoneCommunicationCreateTemplate from './types/tools/ozone/communication/createTemplate';
import * as ToolsOzoneCommunicationDeleteTemplate from './types/tools/ozone/communication/deleteTemplate';
import * as ToolsOzoneCommunicationListTemplates from './types/tools/ozone/communication/listTemplates';
import * as ToolsOzoneCommunicationUpdateTemplate from './types/tools/ozone/communication/updateTemplate';
import * as ToolsOzoneModerationEmitEvent from './types/tools/ozone/moderation/emitEvent';
import * as ToolsOzoneModerationGetEvent from './types/tools/ozone/moderation/getEvent';
import * as ToolsOzoneModerationGetRecord from './types/tools/ozone/moderation/getRecord';
import * as ToolsOzoneModerationGetRecords from './types/tools/ozone/moderation/getRecords';
import * as ToolsOzoneModerationGetRepo from './types/tools/ozone/moderation/getRepo';
import * as ToolsOzoneModerationGetRepos from './types/tools/ozone/moderation/getRepos';
import * as ToolsOzoneModerationQueryEvents from './types/tools/ozone/moderation/queryEvents';
import * as ToolsOzoneModerationQueryStatuses from './types/tools/ozone/moderation/queryStatuses';
import * as ToolsOzoneModerationSearchRepos from './types/tools/ozone/moderation/searchRepos';
import * as ToolsOzoneServerGetConfig from './types/tools/ozone/server/getConfig';
import * as ToolsOzoneSetAddValues from './types/tools/ozone/set/addValues';
import * as ToolsOzoneSetDeleteSet from './types/tools/ozone/set/deleteSet';
import * as ToolsOzoneSetDeleteValues from './types/tools/ozone/set/deleteValues';
import * as ToolsOzoneSetGetValues from './types/tools/ozone/set/getValues';
import * as ToolsOzoneSetQuerySets from './types/tools/ozone/set/querySets';
import * as ToolsOzoneSetUpsertSet from './types/tools/ozone/set/upsertSet';
import * as ToolsOzoneSettingListOptions from './types/tools/ozone/setting/listOptions';
import * as ToolsOzoneSettingRemoveOptions from './types/tools/ozone/setting/removeOptions';
import * as ToolsOzoneSettingUpsertOption from './types/tools/ozone/setting/upsertOption';
import * as ToolsOzoneSignatureFindCorrelation from './types/tools/ozone/signature/findCorrelation';
import * as ToolsOzoneSignatureFindRelatedAccounts from './types/tools/ozone/signature/findRelatedAccounts';
import * as ToolsOzoneSignatureSearchAccounts from './types/tools/ozone/signature/searchAccounts';
import * as ToolsOzoneTeamAddMember from './types/tools/ozone/team/addMember';
import * as ToolsOzoneTeamDeleteMember from './types/tools/ozone/team/deleteMember';
import * as ToolsOzoneTeamListMembers from './types/tools/ozone/team/listMembers';
import * as ToolsOzoneTeamUpdateMember from './types/tools/ozone/team/updateMember';
export declare const COM_ATPROTO_MODERATION: {
    DefsReasonSpam: string;
    DefsReasonViolation: string;
    DefsReasonMisleading: string;
    DefsReasonSexual: string;
    DefsReasonRude: string;
    DefsReasonOther: string;
    DefsReasonAppeal: string;
};
export declare const APP_BSKY_FEED: {
    DefsRequestLess: string;
    DefsRequestMore: string;
    DefsClickthroughItem: string;
    DefsClickthroughAuthor: string;
    DefsClickthroughReposter: string;
    DefsClickthroughEmbed: string;
    DefsInteractionSeen: string;
    DefsInteractionLike: string;
    DefsInteractionRepost: string;
    DefsInteractionReply: string;
    DefsInteractionQuote: string;
    DefsInteractionShare: string;
};
export declare const APP_BSKY_GRAPH: {
    DefsModlist: string;
    DefsCuratelist: string;
    DefsReferencelist: string;
};
export declare const TOOLS_OZONE_MODERATION: {
    DefsReviewOpen: string;
    DefsReviewEscalated: string;
    DefsReviewClosed: string;
    DefsReviewNone: string;
};
export declare const TOOLS_OZONE_TEAM: {
    DefsRoleAdmin: string;
    DefsRoleModerator: string;
    DefsRoleTriage: string;
};
export declare function createServer(options?: XrpcOptions): Server;
export declare class Server {
    xrpc: XrpcServer;
    com: ComNS;
    app: AppNS;
    chat: ChatNS;
    tools: ToolsNS;
    constructor(options?: XrpcOptions);
}
export declare class ComNS {
    _server: Server;
    atproto: ComAtprotoNS;
    constructor(server: Server);
}
export declare class ComAtprotoNS {
    _server: Server;
    admin: ComAtprotoAdminNS;
    identity: ComAtprotoIdentityNS;
    label: ComAtprotoLabelNS;
    moderation: ComAtprotoModerationNS;
    repo: ComAtprotoRepoNS;
    server: ComAtprotoServerNS;
    sync: ComAtprotoSyncNS;
    temp: ComAtprotoTempNS;
    constructor(server: Server);
}
export declare class ComAtprotoAdminNS {
    _server: Server;
    constructor(server: Server);
    deleteAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminDeleteAccount.Handler<ExtractAuth<AV>>, ComAtprotoAdminDeleteAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    disableAccountInvites<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminDisableAccountInvites.Handler<ExtractAuth<AV>>, ComAtprotoAdminDisableAccountInvites.HandlerReqCtx<ExtractAuth<AV>>>): void;
    disableInviteCodes<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminDisableInviteCodes.Handler<ExtractAuth<AV>>, ComAtprotoAdminDisableInviteCodes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    enableAccountInvites<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminEnableAccountInvites.Handler<ExtractAuth<AV>>, ComAtprotoAdminEnableAccountInvites.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getAccountInfo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminGetAccountInfo.Handler<ExtractAuth<AV>>, ComAtprotoAdminGetAccountInfo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getAccountInfos<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminGetAccountInfos.Handler<ExtractAuth<AV>>, ComAtprotoAdminGetAccountInfos.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getInviteCodes<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminGetInviteCodes.Handler<ExtractAuth<AV>>, ComAtprotoAdminGetInviteCodes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSubjectStatus<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminGetSubjectStatus.Handler<ExtractAuth<AV>>, ComAtprotoAdminGetSubjectStatus.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchAccounts<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminSearchAccounts.Handler<ExtractAuth<AV>>, ComAtprotoAdminSearchAccounts.HandlerReqCtx<ExtractAuth<AV>>>): void;
    sendEmail<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminSendEmail.Handler<ExtractAuth<AV>>, ComAtprotoAdminSendEmail.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateAccountEmail<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminUpdateAccountEmail.Handler<ExtractAuth<AV>>, ComAtprotoAdminUpdateAccountEmail.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateAccountHandle<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminUpdateAccountHandle.Handler<ExtractAuth<AV>>, ComAtprotoAdminUpdateAccountHandle.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateAccountPassword<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminUpdateAccountPassword.Handler<ExtractAuth<AV>>, ComAtprotoAdminUpdateAccountPassword.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateSubjectStatus<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoAdminUpdateSubjectStatus.Handler<ExtractAuth<AV>>, ComAtprotoAdminUpdateSubjectStatus.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoIdentityNS {
    _server: Server;
    constructor(server: Server);
    getRecommendedDidCredentials<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentityGetRecommendedDidCredentials.Handler<ExtractAuth<AV>>, ComAtprotoIdentityGetRecommendedDidCredentials.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestPlcOperationSignature<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentityRequestPlcOperationSignature.Handler<ExtractAuth<AV>>, ComAtprotoIdentityRequestPlcOperationSignature.HandlerReqCtx<ExtractAuth<AV>>>): void;
    resolveHandle<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentityResolveHandle.Handler<ExtractAuth<AV>>, ComAtprotoIdentityResolveHandle.HandlerReqCtx<ExtractAuth<AV>>>): void;
    signPlcOperation<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentitySignPlcOperation.Handler<ExtractAuth<AV>>, ComAtprotoIdentitySignPlcOperation.HandlerReqCtx<ExtractAuth<AV>>>): void;
    submitPlcOperation<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentitySubmitPlcOperation.Handler<ExtractAuth<AV>>, ComAtprotoIdentitySubmitPlcOperation.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateHandle<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoIdentityUpdateHandle.Handler<ExtractAuth<AV>>, ComAtprotoIdentityUpdateHandle.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoLabelNS {
    _server: Server;
    constructor(server: Server);
    queryLabels<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoLabelQueryLabels.Handler<ExtractAuth<AV>>, ComAtprotoLabelQueryLabels.HandlerReqCtx<ExtractAuth<AV>>>): void;
    subscribeLabels<AV extends StreamAuthVerifier>(cfg: ConfigOf<AV, ComAtprotoLabelSubscribeLabels.Handler<ExtractAuth<AV>>, ComAtprotoLabelSubscribeLabels.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoModerationNS {
    _server: Server;
    constructor(server: Server);
    createReport<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoModerationCreateReport.Handler<ExtractAuth<AV>>, ComAtprotoModerationCreateReport.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoRepoNS {
    _server: Server;
    constructor(server: Server);
    applyWrites<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoApplyWrites.Handler<ExtractAuth<AV>>, ComAtprotoRepoApplyWrites.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoCreateRecord.Handler<ExtractAuth<AV>>, ComAtprotoRepoCreateRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoDeleteRecord.Handler<ExtractAuth<AV>>, ComAtprotoRepoDeleteRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    describeRepo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoDescribeRepo.Handler<ExtractAuth<AV>>, ComAtprotoRepoDescribeRepo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoGetRecord.Handler<ExtractAuth<AV>>, ComAtprotoRepoGetRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    importRepo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoImportRepo.Handler<ExtractAuth<AV>>, ComAtprotoRepoImportRepo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listMissingBlobs<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoListMissingBlobs.Handler<ExtractAuth<AV>>, ComAtprotoRepoListMissingBlobs.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listRecords<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoListRecords.Handler<ExtractAuth<AV>>, ComAtprotoRepoListRecords.HandlerReqCtx<ExtractAuth<AV>>>): void;
    putRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoPutRecord.Handler<ExtractAuth<AV>>, ComAtprotoRepoPutRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    uploadBlob<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoRepoUploadBlob.Handler<ExtractAuth<AV>>, ComAtprotoRepoUploadBlob.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoServerNS {
    _server: Server;
    constructor(server: Server);
    activateAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerActivateAccount.Handler<ExtractAuth<AV>>, ComAtprotoServerActivateAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    checkAccountStatus<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCheckAccountStatus.Handler<ExtractAuth<AV>>, ComAtprotoServerCheckAccountStatus.HandlerReqCtx<ExtractAuth<AV>>>): void;
    confirmEmail<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerConfirmEmail.Handler<ExtractAuth<AV>>, ComAtprotoServerConfirmEmail.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCreateAccount.Handler<ExtractAuth<AV>>, ComAtprotoServerCreateAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createAppPassword<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCreateAppPassword.Handler<ExtractAuth<AV>>, ComAtprotoServerCreateAppPassword.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createInviteCode<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCreateInviteCode.Handler<ExtractAuth<AV>>, ComAtprotoServerCreateInviteCode.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createInviteCodes<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCreateInviteCodes.Handler<ExtractAuth<AV>>, ComAtprotoServerCreateInviteCodes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    createSession<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerCreateSession.Handler<ExtractAuth<AV>>, ComAtprotoServerCreateSession.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deactivateAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerDeactivateAccount.Handler<ExtractAuth<AV>>, ComAtprotoServerDeactivateAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerDeleteAccount.Handler<ExtractAuth<AV>>, ComAtprotoServerDeleteAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteSession<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerDeleteSession.Handler<ExtractAuth<AV>>, ComAtprotoServerDeleteSession.HandlerReqCtx<ExtractAuth<AV>>>): void;
    describeServer<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerDescribeServer.Handler<ExtractAuth<AV>>, ComAtprotoServerDescribeServer.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getAccountInviteCodes<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerGetAccountInviteCodes.Handler<ExtractAuth<AV>>, ComAtprotoServerGetAccountInviteCodes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getServiceAuth<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerGetServiceAuth.Handler<ExtractAuth<AV>>, ComAtprotoServerGetServiceAuth.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSession<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerGetSession.Handler<ExtractAuth<AV>>, ComAtprotoServerGetSession.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listAppPasswords<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerListAppPasswords.Handler<ExtractAuth<AV>>, ComAtprotoServerListAppPasswords.HandlerReqCtx<ExtractAuth<AV>>>): void;
    refreshSession<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRefreshSession.Handler<ExtractAuth<AV>>, ComAtprotoServerRefreshSession.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestAccountDelete<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRequestAccountDelete.Handler<ExtractAuth<AV>>, ComAtprotoServerRequestAccountDelete.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestEmailConfirmation<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRequestEmailConfirmation.Handler<ExtractAuth<AV>>, ComAtprotoServerRequestEmailConfirmation.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestEmailUpdate<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRequestEmailUpdate.Handler<ExtractAuth<AV>>, ComAtprotoServerRequestEmailUpdate.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestPasswordReset<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRequestPasswordReset.Handler<ExtractAuth<AV>>, ComAtprotoServerRequestPasswordReset.HandlerReqCtx<ExtractAuth<AV>>>): void;
    reserveSigningKey<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerReserveSigningKey.Handler<ExtractAuth<AV>>, ComAtprotoServerReserveSigningKey.HandlerReqCtx<ExtractAuth<AV>>>): void;
    resetPassword<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerResetPassword.Handler<ExtractAuth<AV>>, ComAtprotoServerResetPassword.HandlerReqCtx<ExtractAuth<AV>>>): void;
    revokeAppPassword<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerRevokeAppPassword.Handler<ExtractAuth<AV>>, ComAtprotoServerRevokeAppPassword.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateEmail<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoServerUpdateEmail.Handler<ExtractAuth<AV>>, ComAtprotoServerUpdateEmail.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoSyncNS {
    _server: Server;
    constructor(server: Server);
    getBlob<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetBlob.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetBlob.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getBlocks<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetBlocks.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetBlocks.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getCheckout<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetCheckout.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetCheckout.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getHead<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetHead.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetHead.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getLatestCommit<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetLatestCommit.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetLatestCommit.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetRecord.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRepo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetRepo.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetRepo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRepoStatus<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncGetRepoStatus.Handler<ExtractAuth<AV>>, ComAtprotoSyncGetRepoStatus.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listBlobs<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncListBlobs.Handler<ExtractAuth<AV>>, ComAtprotoSyncListBlobs.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listRepos<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncListRepos.Handler<ExtractAuth<AV>>, ComAtprotoSyncListRepos.HandlerReqCtx<ExtractAuth<AV>>>): void;
    notifyOfUpdate<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncNotifyOfUpdate.Handler<ExtractAuth<AV>>, ComAtprotoSyncNotifyOfUpdate.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestCrawl<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncRequestCrawl.Handler<ExtractAuth<AV>>, ComAtprotoSyncRequestCrawl.HandlerReqCtx<ExtractAuth<AV>>>): void;
    subscribeRepos<AV extends StreamAuthVerifier>(cfg: ConfigOf<AV, ComAtprotoSyncSubscribeRepos.Handler<ExtractAuth<AV>>, ComAtprotoSyncSubscribeRepos.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ComAtprotoTempNS {
    _server: Server;
    constructor(server: Server);
    checkSignupQueue<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoTempCheckSignupQueue.Handler<ExtractAuth<AV>>, ComAtprotoTempCheckSignupQueue.HandlerReqCtx<ExtractAuth<AV>>>): void;
    fetchLabels<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoTempFetchLabels.Handler<ExtractAuth<AV>>, ComAtprotoTempFetchLabels.HandlerReqCtx<ExtractAuth<AV>>>): void;
    requestPhoneVerification<AV extends AuthVerifier>(cfg: ConfigOf<AV, ComAtprotoTempRequestPhoneVerification.Handler<ExtractAuth<AV>>, ComAtprotoTempRequestPhoneVerification.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppNS {
    _server: Server;
    bsky: AppBskyNS;
    constructor(server: Server);
}
export declare class AppBskyNS {
    _server: Server;
    actor: AppBskyActorNS;
    embed: AppBskyEmbedNS;
    feed: AppBskyFeedNS;
    graph: AppBskyGraphNS;
    labeler: AppBskyLabelerNS;
    notification: AppBskyNotificationNS;
    richtext: AppBskyRichtextNS;
    unspecced: AppBskyUnspeccedNS;
    video: AppBskyVideoNS;
    constructor(server: Server);
}
export declare class AppBskyActorNS {
    _server: Server;
    constructor(server: Server);
    getPreferences<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorGetPreferences.Handler<ExtractAuth<AV>>, AppBskyActorGetPreferences.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getProfile<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorGetProfile.Handler<ExtractAuth<AV>>, AppBskyActorGetProfile.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getProfiles<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorGetProfiles.Handler<ExtractAuth<AV>>, AppBskyActorGetProfiles.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSuggestions<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorGetSuggestions.Handler<ExtractAuth<AV>>, AppBskyActorGetSuggestions.HandlerReqCtx<ExtractAuth<AV>>>): void;
    putPreferences<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorPutPreferences.Handler<ExtractAuth<AV>>, AppBskyActorPutPreferences.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchActors<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorSearchActors.Handler<ExtractAuth<AV>>, AppBskyActorSearchActors.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchActorsTypeahead<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyActorSearchActorsTypeahead.Handler<ExtractAuth<AV>>, AppBskyActorSearchActorsTypeahead.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyEmbedNS {
    _server: Server;
    constructor(server: Server);
}
export declare class AppBskyFeedNS {
    _server: Server;
    constructor(server: Server);
    describeFeedGenerator<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedDescribeFeedGenerator.Handler<ExtractAuth<AV>>, AppBskyFeedDescribeFeedGenerator.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getActorFeeds<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetActorFeeds.Handler<ExtractAuth<AV>>, AppBskyFeedGetActorFeeds.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getActorLikes<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetActorLikes.Handler<ExtractAuth<AV>>, AppBskyFeedGetActorLikes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getAuthorFeed<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetAuthorFeed.Handler<ExtractAuth<AV>>, AppBskyFeedGetAuthorFeed.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFeed<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetFeed.Handler<ExtractAuth<AV>>, AppBskyFeedGetFeed.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFeedGenerator<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetFeedGenerator.Handler<ExtractAuth<AV>>, AppBskyFeedGetFeedGenerator.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFeedGenerators<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetFeedGenerators.Handler<ExtractAuth<AV>>, AppBskyFeedGetFeedGenerators.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFeedSkeleton<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetFeedSkeleton.Handler<ExtractAuth<AV>>, AppBskyFeedGetFeedSkeleton.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getLikes<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetLikes.Handler<ExtractAuth<AV>>, AppBskyFeedGetLikes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getListFeed<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetListFeed.Handler<ExtractAuth<AV>>, AppBskyFeedGetListFeed.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getPostThread<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetPostThread.Handler<ExtractAuth<AV>>, AppBskyFeedGetPostThread.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getPosts<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetPosts.Handler<ExtractAuth<AV>>, AppBskyFeedGetPosts.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getQuotes<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetQuotes.Handler<ExtractAuth<AV>>, AppBskyFeedGetQuotes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRepostedBy<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetRepostedBy.Handler<ExtractAuth<AV>>, AppBskyFeedGetRepostedBy.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSuggestedFeeds<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetSuggestedFeeds.Handler<ExtractAuth<AV>>, AppBskyFeedGetSuggestedFeeds.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getTimeline<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedGetTimeline.Handler<ExtractAuth<AV>>, AppBskyFeedGetTimeline.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchPosts<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedSearchPosts.Handler<ExtractAuth<AV>>, AppBskyFeedSearchPosts.HandlerReqCtx<ExtractAuth<AV>>>): void;
    sendInteractions<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyFeedSendInteractions.Handler<ExtractAuth<AV>>, AppBskyFeedSendInteractions.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyGraphNS {
    _server: Server;
    constructor(server: Server);
    getActorStarterPacks<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetActorStarterPacks.Handler<ExtractAuth<AV>>, AppBskyGraphGetActorStarterPacks.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getBlocks<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetBlocks.Handler<ExtractAuth<AV>>, AppBskyGraphGetBlocks.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFollowers<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetFollowers.Handler<ExtractAuth<AV>>, AppBskyGraphGetFollowers.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getFollows<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetFollows.Handler<ExtractAuth<AV>>, AppBskyGraphGetFollows.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getKnownFollowers<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetKnownFollowers.Handler<ExtractAuth<AV>>, AppBskyGraphGetKnownFollowers.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getList<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetList.Handler<ExtractAuth<AV>>, AppBskyGraphGetList.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getListBlocks<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetListBlocks.Handler<ExtractAuth<AV>>, AppBskyGraphGetListBlocks.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getListMutes<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetListMutes.Handler<ExtractAuth<AV>>, AppBskyGraphGetListMutes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getLists<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetLists.Handler<ExtractAuth<AV>>, AppBskyGraphGetLists.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getMutes<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetMutes.Handler<ExtractAuth<AV>>, AppBskyGraphGetMutes.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRelationships<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetRelationships.Handler<ExtractAuth<AV>>, AppBskyGraphGetRelationships.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getStarterPack<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetStarterPack.Handler<ExtractAuth<AV>>, AppBskyGraphGetStarterPack.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getStarterPacks<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetStarterPacks.Handler<ExtractAuth<AV>>, AppBskyGraphGetStarterPacks.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSuggestedFollowsByActor<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphGetSuggestedFollowsByActor.Handler<ExtractAuth<AV>>, AppBskyGraphGetSuggestedFollowsByActor.HandlerReqCtx<ExtractAuth<AV>>>): void;
    muteActor<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphMuteActor.Handler<ExtractAuth<AV>>, AppBskyGraphMuteActor.HandlerReqCtx<ExtractAuth<AV>>>): void;
    muteActorList<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphMuteActorList.Handler<ExtractAuth<AV>>, AppBskyGraphMuteActorList.HandlerReqCtx<ExtractAuth<AV>>>): void;
    muteThread<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphMuteThread.Handler<ExtractAuth<AV>>, AppBskyGraphMuteThread.HandlerReqCtx<ExtractAuth<AV>>>): void;
    unmuteActor<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphUnmuteActor.Handler<ExtractAuth<AV>>, AppBskyGraphUnmuteActor.HandlerReqCtx<ExtractAuth<AV>>>): void;
    unmuteActorList<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphUnmuteActorList.Handler<ExtractAuth<AV>>, AppBskyGraphUnmuteActorList.HandlerReqCtx<ExtractAuth<AV>>>): void;
    unmuteThread<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyGraphUnmuteThread.Handler<ExtractAuth<AV>>, AppBskyGraphUnmuteThread.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyLabelerNS {
    _server: Server;
    constructor(server: Server);
    getServices<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyLabelerGetServices.Handler<ExtractAuth<AV>>, AppBskyLabelerGetServices.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyNotificationNS {
    _server: Server;
    constructor(server: Server);
    getUnreadCount<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyNotificationGetUnreadCount.Handler<ExtractAuth<AV>>, AppBskyNotificationGetUnreadCount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listNotifications<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyNotificationListNotifications.Handler<ExtractAuth<AV>>, AppBskyNotificationListNotifications.HandlerReqCtx<ExtractAuth<AV>>>): void;
    putPreferences<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyNotificationPutPreferences.Handler<ExtractAuth<AV>>, AppBskyNotificationPutPreferences.HandlerReqCtx<ExtractAuth<AV>>>): void;
    registerPush<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyNotificationRegisterPush.Handler<ExtractAuth<AV>>, AppBskyNotificationRegisterPush.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateSeen<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyNotificationUpdateSeen.Handler<ExtractAuth<AV>>, AppBskyNotificationUpdateSeen.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyRichtextNS {
    _server: Server;
    constructor(server: Server);
}
export declare class AppBskyUnspeccedNS {
    _server: Server;
    constructor(server: Server);
    getConfig<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedGetConfig.Handler<ExtractAuth<AV>>, AppBskyUnspeccedGetConfig.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getPopularFeedGenerators<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedGetPopularFeedGenerators.Handler<ExtractAuth<AV>>, AppBskyUnspeccedGetPopularFeedGenerators.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getSuggestionsSkeleton<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedGetSuggestionsSkeleton.Handler<ExtractAuth<AV>>, AppBskyUnspeccedGetSuggestionsSkeleton.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getTaggedSuggestions<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedGetTaggedSuggestions.Handler<ExtractAuth<AV>>, AppBskyUnspeccedGetTaggedSuggestions.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchActorsSkeleton<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedSearchActorsSkeleton.Handler<ExtractAuth<AV>>, AppBskyUnspeccedSearchActorsSkeleton.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchPostsSkeleton<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyUnspeccedSearchPostsSkeleton.Handler<ExtractAuth<AV>>, AppBskyUnspeccedSearchPostsSkeleton.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class AppBskyVideoNS {
    _server: Server;
    constructor(server: Server);
    getJobStatus<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyVideoGetJobStatus.Handler<ExtractAuth<AV>>, AppBskyVideoGetJobStatus.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getUploadLimits<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyVideoGetUploadLimits.Handler<ExtractAuth<AV>>, AppBskyVideoGetUploadLimits.HandlerReqCtx<ExtractAuth<AV>>>): void;
    uploadVideo<AV extends AuthVerifier>(cfg: ConfigOf<AV, AppBskyVideoUploadVideo.Handler<ExtractAuth<AV>>, AppBskyVideoUploadVideo.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ChatNS {
    _server: Server;
    bsky: ChatBskyNS;
    constructor(server: Server);
}
export declare class ChatBskyNS {
    _server: Server;
    actor: ChatBskyActorNS;
    convo: ChatBskyConvoNS;
    moderation: ChatBskyModerationNS;
    constructor(server: Server);
}
export declare class ChatBskyActorNS {
    _server: Server;
    constructor(server: Server);
    deleteAccount<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyActorDeleteAccount.Handler<ExtractAuth<AV>>, ChatBskyActorDeleteAccount.HandlerReqCtx<ExtractAuth<AV>>>): void;
    exportAccountData<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyActorExportAccountData.Handler<ExtractAuth<AV>>, ChatBskyActorExportAccountData.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ChatBskyConvoNS {
    _server: Server;
    constructor(server: Server);
    deleteMessageForSelf<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoDeleteMessageForSelf.Handler<ExtractAuth<AV>>, ChatBskyConvoDeleteMessageForSelf.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getConvo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoGetConvo.Handler<ExtractAuth<AV>>, ChatBskyConvoGetConvo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getConvoForMembers<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoGetConvoForMembers.Handler<ExtractAuth<AV>>, ChatBskyConvoGetConvoForMembers.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getLog<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoGetLog.Handler<ExtractAuth<AV>>, ChatBskyConvoGetLog.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getMessages<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoGetMessages.Handler<ExtractAuth<AV>>, ChatBskyConvoGetMessages.HandlerReqCtx<ExtractAuth<AV>>>): void;
    leaveConvo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoLeaveConvo.Handler<ExtractAuth<AV>>, ChatBskyConvoLeaveConvo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listConvos<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoListConvos.Handler<ExtractAuth<AV>>, ChatBskyConvoListConvos.HandlerReqCtx<ExtractAuth<AV>>>): void;
    muteConvo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoMuteConvo.Handler<ExtractAuth<AV>>, ChatBskyConvoMuteConvo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    sendMessage<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoSendMessage.Handler<ExtractAuth<AV>>, ChatBskyConvoSendMessage.HandlerReqCtx<ExtractAuth<AV>>>): void;
    sendMessageBatch<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoSendMessageBatch.Handler<ExtractAuth<AV>>, ChatBskyConvoSendMessageBatch.HandlerReqCtx<ExtractAuth<AV>>>): void;
    unmuteConvo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoUnmuteConvo.Handler<ExtractAuth<AV>>, ChatBskyConvoUnmuteConvo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateRead<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyConvoUpdateRead.Handler<ExtractAuth<AV>>, ChatBskyConvoUpdateRead.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ChatBskyModerationNS {
    _server: Server;
    constructor(server: Server);
    getActorMetadata<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyModerationGetActorMetadata.Handler<ExtractAuth<AV>>, ChatBskyModerationGetActorMetadata.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getMessageContext<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyModerationGetMessageContext.Handler<ExtractAuth<AV>>, ChatBskyModerationGetMessageContext.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateActorAccess<AV extends AuthVerifier>(cfg: ConfigOf<AV, ChatBskyModerationUpdateActorAccess.Handler<ExtractAuth<AV>>, ChatBskyModerationUpdateActorAccess.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsNS {
    _server: Server;
    ozone: ToolsOzoneNS;
    constructor(server: Server);
}
export declare class ToolsOzoneNS {
    _server: Server;
    communication: ToolsOzoneCommunicationNS;
    moderation: ToolsOzoneModerationNS;
    server: ToolsOzoneServerNS;
    set: ToolsOzoneSetNS;
    setting: ToolsOzoneSettingNS;
    signature: ToolsOzoneSignatureNS;
    team: ToolsOzoneTeamNS;
    constructor(server: Server);
}
export declare class ToolsOzoneCommunicationNS {
    _server: Server;
    constructor(server: Server);
    createTemplate<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneCommunicationCreateTemplate.Handler<ExtractAuth<AV>>, ToolsOzoneCommunicationCreateTemplate.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteTemplate<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneCommunicationDeleteTemplate.Handler<ExtractAuth<AV>>, ToolsOzoneCommunicationDeleteTemplate.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listTemplates<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneCommunicationListTemplates.Handler<ExtractAuth<AV>>, ToolsOzoneCommunicationListTemplates.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateTemplate<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneCommunicationUpdateTemplate.Handler<ExtractAuth<AV>>, ToolsOzoneCommunicationUpdateTemplate.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneModerationNS {
    _server: Server;
    constructor(server: Server);
    emitEvent<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationEmitEvent.Handler<ExtractAuth<AV>>, ToolsOzoneModerationEmitEvent.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getEvent<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationGetEvent.Handler<ExtractAuth<AV>>, ToolsOzoneModerationGetEvent.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRecord<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationGetRecord.Handler<ExtractAuth<AV>>, ToolsOzoneModerationGetRecord.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRecords<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationGetRecords.Handler<ExtractAuth<AV>>, ToolsOzoneModerationGetRecords.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRepo<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationGetRepo.Handler<ExtractAuth<AV>>, ToolsOzoneModerationGetRepo.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getRepos<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationGetRepos.Handler<ExtractAuth<AV>>, ToolsOzoneModerationGetRepos.HandlerReqCtx<ExtractAuth<AV>>>): void;
    queryEvents<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationQueryEvents.Handler<ExtractAuth<AV>>, ToolsOzoneModerationQueryEvents.HandlerReqCtx<ExtractAuth<AV>>>): void;
    queryStatuses<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationQueryStatuses.Handler<ExtractAuth<AV>>, ToolsOzoneModerationQueryStatuses.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchRepos<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneModerationSearchRepos.Handler<ExtractAuth<AV>>, ToolsOzoneModerationSearchRepos.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneServerNS {
    _server: Server;
    constructor(server: Server);
    getConfig<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneServerGetConfig.Handler<ExtractAuth<AV>>, ToolsOzoneServerGetConfig.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneSetNS {
    _server: Server;
    constructor(server: Server);
    addValues<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetAddValues.Handler<ExtractAuth<AV>>, ToolsOzoneSetAddValues.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteSet<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetDeleteSet.Handler<ExtractAuth<AV>>, ToolsOzoneSetDeleteSet.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteValues<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetDeleteValues.Handler<ExtractAuth<AV>>, ToolsOzoneSetDeleteValues.HandlerReqCtx<ExtractAuth<AV>>>): void;
    getValues<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetGetValues.Handler<ExtractAuth<AV>>, ToolsOzoneSetGetValues.HandlerReqCtx<ExtractAuth<AV>>>): void;
    querySets<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetQuerySets.Handler<ExtractAuth<AV>>, ToolsOzoneSetQuerySets.HandlerReqCtx<ExtractAuth<AV>>>): void;
    upsertSet<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSetUpsertSet.Handler<ExtractAuth<AV>>, ToolsOzoneSetUpsertSet.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneSettingNS {
    _server: Server;
    constructor(server: Server);
    listOptions<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSettingListOptions.Handler<ExtractAuth<AV>>, ToolsOzoneSettingListOptions.HandlerReqCtx<ExtractAuth<AV>>>): void;
    removeOptions<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSettingRemoveOptions.Handler<ExtractAuth<AV>>, ToolsOzoneSettingRemoveOptions.HandlerReqCtx<ExtractAuth<AV>>>): void;
    upsertOption<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSettingUpsertOption.Handler<ExtractAuth<AV>>, ToolsOzoneSettingUpsertOption.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneSignatureNS {
    _server: Server;
    constructor(server: Server);
    findCorrelation<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSignatureFindCorrelation.Handler<ExtractAuth<AV>>, ToolsOzoneSignatureFindCorrelation.HandlerReqCtx<ExtractAuth<AV>>>): void;
    findRelatedAccounts<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSignatureFindRelatedAccounts.Handler<ExtractAuth<AV>>, ToolsOzoneSignatureFindRelatedAccounts.HandlerReqCtx<ExtractAuth<AV>>>): void;
    searchAccounts<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneSignatureSearchAccounts.Handler<ExtractAuth<AV>>, ToolsOzoneSignatureSearchAccounts.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
export declare class ToolsOzoneTeamNS {
    _server: Server;
    constructor(server: Server);
    addMember<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneTeamAddMember.Handler<ExtractAuth<AV>>, ToolsOzoneTeamAddMember.HandlerReqCtx<ExtractAuth<AV>>>): void;
    deleteMember<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneTeamDeleteMember.Handler<ExtractAuth<AV>>, ToolsOzoneTeamDeleteMember.HandlerReqCtx<ExtractAuth<AV>>>): void;
    listMembers<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneTeamListMembers.Handler<ExtractAuth<AV>>, ToolsOzoneTeamListMembers.HandlerReqCtx<ExtractAuth<AV>>>): void;
    updateMember<AV extends AuthVerifier>(cfg: ConfigOf<AV, ToolsOzoneTeamUpdateMember.Handler<ExtractAuth<AV>>, ToolsOzoneTeamUpdateMember.HandlerReqCtx<ExtractAuth<AV>>>): void;
}
type SharedRateLimitOpts<T> = {
    name: string;
    calcKey?: (ctx: T) => string;
    calcPoints?: (ctx: T) => number;
};
type RouteRateLimitOpts<T> = {
    durationMs: number;
    points: number;
    calcKey?: (ctx: T) => string;
    calcPoints?: (ctx: T) => number;
};
type HandlerOpts = {
    blobLimit?: number;
};
type HandlerRateLimitOpts<T> = SharedRateLimitOpts<T> | RouteRateLimitOpts<T>;
type ConfigOf<Auth, Handler, ReqCtx> = Handler | {
    auth?: Auth;
    opts?: HandlerOpts;
    rateLimit?: HandlerRateLimitOpts<ReqCtx> | HandlerRateLimitOpts<ReqCtx>[];
    handler: Handler;
};
type ExtractAuth<AV extends AuthVerifier | StreamAuthVerifier> = Extract<Awaited<ReturnType<AV>>, {
    credentials: unknown;
}>;
export {};
//# sourceMappingURL=index.d.ts.map