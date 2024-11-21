import stream from 'stream';
import { CID } from 'multiformats/cid';
import { BlobStore } from '@atproto/repo';
import { ActorDb } from '../db';
import { StatusAttr } from '../../lexicon/types/com/atproto/admin/defs';
export declare class BlobReader {
    db: ActorDb;
    blobstore: BlobStore;
    constructor(db: ActorDb, blobstore: BlobStore);
    getBlobMetadata(cid: CID): Promise<{
        size: number;
        mimeType?: string;
    }>;
    getBlob(cid: CID): Promise<{
        size: number;
        mimeType?: string;
        stream: stream.Readable;
    }>;
    listBlobs(opts: {
        since?: string;
        cursor?: string;
        limit: number;
    }): Promise<string[]>;
    getBlobTakedownStatus(cid: CID): Promise<StatusAttr | null>;
    getRecordsForBlob(cid: CID): Promise<string[]>;
    blobCount(): Promise<number>;
    recordBlobCount(): Promise<number>;
    listMissingBlobs(opts: {
        cursor?: string;
        limit: number;
    }): Promise<{
        cid: string;
        recordUri: string;
    }[]>;
}
//# sourceMappingURL=reader.d.ts.map