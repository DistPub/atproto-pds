import { CID } from 'multiformats/cid';
import { AtUri } from '@atproto/syntax';
import { BlobStore, WriteOpAction } from '@atproto/repo';
import { ActorDb, Backlink } from '../db';
import { RecordReader } from './reader';
import { StatusAttr } from '../../lexicon/types/com/atproto/admin/defs';
import { RepoRecord } from '@atproto/lexicon';
export declare class RecordTransactor extends RecordReader {
    db: ActorDb;
    blobstore: BlobStore;
    constructor(db: ActorDb, blobstore: BlobStore);
    indexRecord(uri: AtUri, cid: CID, record: RepoRecord | null, action: (WriteOpAction.Create | WriteOpAction.Update) | undefined, repoRev: string, timestamp?: string): Promise<void>;
    deleteRecord(uri: AtUri): Promise<void>;
    removeBacklinksByUri(uri: AtUri): Promise<void>;
    addBacklinks(backlinks: Backlink[]): Promise<void>;
    updateRecordTakedownStatus(uri: AtUri, takedown: StatusAttr): Promise<void>;
}
//# sourceMappingURL=transactor.d.ts.map