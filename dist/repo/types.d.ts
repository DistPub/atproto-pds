import { CID } from 'multiformats/cid';
import { AtUri } from '@atproto/syntax';
import { WriteOpAction } from '@atproto/repo';
import { RepoRecord } from '@atproto/lexicon';
export type ValidationStatus = 'valid' | 'unknown' | undefined;
export type BlobConstraint = {
    accept?: string[];
    maxSize?: number;
};
export type PreparedBlobRef = {
    cid: CID;
    mimeType: string;
    constraints: BlobConstraint;
};
export type PreparedCreate = {
    action: WriteOpAction.Create;
    uri: AtUri;
    cid: CID;
    swapCid?: CID | null;
    record: RepoRecord;
    blobs: PreparedBlobRef[];
    validationStatus: ValidationStatus;
};
export type PreparedUpdate = {
    action: WriteOpAction.Update;
    uri: AtUri;
    cid: CID;
    swapCid?: CID | null;
    record: RepoRecord;
    blobs: PreparedBlobRef[];
    validationStatus: ValidationStatus;
};
export type PreparedDelete = {
    action: WriteOpAction.Delete;
    uri: AtUri;
    swapCid?: CID | null;
};
export type PreparedWrite = PreparedCreate | PreparedUpdate | PreparedDelete;
export declare class InvalidRecordError extends Error {
}
export declare class BadCommitSwapError extends Error {
    cid: CID;
    constructor(cid: CID);
}
export declare class BadRecordSwapError extends Error {
    cid: CID | null;
    constructor(cid: CID | null);
}
//# sourceMappingURL=types.d.ts.map