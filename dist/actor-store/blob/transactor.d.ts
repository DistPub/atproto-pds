import stream from 'stream';
import { CID } from 'multiformats/cid';
import { BlobStore } from '@atproto/repo';
import { AtUri } from '@atproto/syntax';
import { BlobRef } from '@atproto/lexicon';
import { ActorDb } from '../db';
import { PreparedBlobRef, PreparedWrite } from '../../repo/types';
import { BackgroundQueue } from '../../background';
import { BlobReader } from './reader';
import { StatusAttr } from '../../lexicon/types/com/atproto/admin/defs';
export type BlobMetadata = {
    tempKey: string;
    size: number;
    cid: CID;
    mimeType: string;
    width: number | null;
    height: number | null;
};
export declare class BlobTransactor extends BlobReader {
    db: ActorDb;
    blobstore: BlobStore;
    backgroundQueue: BackgroundQueue;
    constructor(db: ActorDb, blobstore: BlobStore, backgroundQueue: BackgroundQueue);
    uploadBlobAndGetMetadata(userSuggestedMime: string, blobStream: stream.Readable): Promise<BlobMetadata>;
    trackUntetheredBlob(metadata: BlobMetadata): Promise<BlobRef>;
    processWriteBlobs(rev: string, writes: PreparedWrite[]): Promise<void>;
    updateBlobTakedownStatus(blob: CID, takedown: StatusAttr): Promise<void>;
    deleteDereferencedBlobs(writes: PreparedWrite[]): Promise<void>;
    verifyBlobAndMakePermanent(blob: PreparedBlobRef): Promise<void>;
    associateBlob(blob: PreparedBlobRef, recordUri: AtUri): Promise<void>;
}
export declare class CidNotFound extends Error {
    cid: CID;
    constructor(cid: CID);
}
//# sourceMappingURL=transactor.d.ts.map