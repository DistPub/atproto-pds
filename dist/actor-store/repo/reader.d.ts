import { BlobStore } from '@atproto/repo';
import { SqlRepoReader } from './sql-repo-reader';
import { BlobReader } from '../blob/reader';
import { ActorDb } from '../db';
import { RecordReader } from '../record/reader';
export declare class RepoReader {
    db: ActorDb;
    blobstore: BlobStore;
    blob: BlobReader;
    record: RecordReader;
    storage: SqlRepoReader;
    constructor(db: ActorDb, blobstore: BlobStore);
}
//# sourceMappingURL=reader.d.ts.map