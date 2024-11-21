import { CID } from 'multiformats/cid';
import * as crypto from '@atproto/crypto';
import { BlobStore, CommitData } from '@atproto/repo';
import { AtUri } from '@atproto/syntax';
import { SqlRepoTransactor } from './sql-repo-transactor';
import { PreparedCreate, PreparedWrite } from '../../repo/types';
import { BlobTransactor } from '../blob/transactor';
import { BackgroundQueue } from '../../background';
import { ActorDb } from '../db';
import { RecordTransactor } from '../record/transactor';
import { RepoReader } from './reader';
export declare class RepoTransactor extends RepoReader {
    db: ActorDb;
    did: string;
    signingKey: crypto.Keypair;
    blobstore: BlobStore;
    backgroundQueue: BackgroundQueue;
    blob: BlobTransactor;
    record: RecordTransactor;
    storage: SqlRepoTransactor;
    now: string;
    constructor(db: ActorDb, did: string, signingKey: crypto.Keypair, blobstore: BlobStore, backgroundQueue: BackgroundQueue, now?: string);
    createRepo(writes: PreparedCreate[]): Promise<CommitData>;
    processWrites(writes: PreparedWrite[], swapCommitCid?: CID): Promise<CommitData>;
    formatCommit(writes: PreparedWrite[], swapCommit?: CID): Promise<CommitData>;
    indexWrites(writes: PreparedWrite[], rev: string): Promise<void>;
    getDuplicateRecordCids(cids: CID[], touchedUris: AtUri[]): Promise<CID[]>;
}
//# sourceMappingURL=transactor.d.ts.map