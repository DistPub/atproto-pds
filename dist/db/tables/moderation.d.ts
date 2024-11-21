import { Generated } from 'kysely';
import { REASONOTHER, REASONSPAM, REASONMISLEADING, REASONRUDE, REASONSEXUAL, REASONVIOLATION } from '../../lexicon/types/com/atproto/moderation/defs';
export declare const actionTableName = "moderation_action";
export declare const actionSubjectBlobTableName = "moderation_action_subject_blob";
export declare const reportTableName = "moderation_report";
export declare const reportResolutionTableName = "moderation_report_resolution";
export interface ModerationAction {
    id: Generated<number>;
    action: 'tools.ozone.moderation.defs#modEventTakedown' | 'tools.ozone.moderation.defs#modEventAcknowledge' | 'tools.ozone.moderation.defs#modEventEscalate' | 'tools.ozone.moderation.defs#modEventComment' | 'tools.ozone.moderation.defs#modEventLabel' | 'tools.ozone.moderation.defs#modEventReport' | 'tools.ozone.moderation.defs#modEventMute' | 'tools.ozone.moderation.defs#modEventUnmute' | 'tools.ozone.moderation.defs#modEventMuteReporter' | 'tools.ozone.moderation.defs#modEventUnmuteReporter' | 'tools.ozone.moderation.defs#modEventReverseTakedown' | 'tools.ozone.moderation.defs#modEventEmail' | 'tools.ozone.moderation.defs#modEventResolveAppeal' | 'tools.ozone.moderation.defs#modEventDivert';
    subjectType: 'com.atproto.admin.defs#repoRef' | 'com.atproto.repo.strongRef';
    subjectDid: string;
    subjectUri: string | null;
    subjectCid: string | null;
    createLabelVals: string | null;
    negateLabelVals: string | null;
    comment: string | null;
    createdAt: string;
    createdBy: string;
    durationInHours: number | null;
    expiresAt: string | null;
    meta: Record<string, string | boolean> | null;
}
export interface ModerationActionSubjectBlob {
    actionId: number;
    cid: string;
    recordUri: string;
}
export interface ModerationReport {
    id: Generated<number>;
    subjectType: 'com.atproto.admin.defs#repoRef' | 'com.atproto.repo.strongRef';
    subjectDid: string;
    subjectUri: string | null;
    subjectCid: string | null;
    reasonType: typeof REASONSPAM | typeof REASONOTHER | typeof REASONMISLEADING | typeof REASONRUDE | typeof REASONSEXUAL | typeof REASONVIOLATION;
    reason: string | null;
    reportedByDid: string;
    createdAt: string;
}
export interface ModerationReportResolution {
    reportId: number;
    actionId: number;
    createdAt: string;
    createdBy: string;
}
export type PartialDB = {
    [actionTableName]: ModerationAction;
    [actionSubjectBlobTableName]: ModerationActionSubjectBlob;
    [reportTableName]: ModerationReport;
    [reportResolutionTableName]: ModerationReportResolution;
};
//# sourceMappingURL=moderation.d.ts.map