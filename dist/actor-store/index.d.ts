import { Keypair, ExportableKeypair } from '@atproto/crypto';
import { BlobStore } from '@atproto/repo';
import { ActorDb } from './db';
import { BackgroundQueue } from '../background';
import { RecordReader } from './record/reader';
import { PreferenceReader } from './preference/reader';
import { RepoReader } from './repo/reader';
import { RepoTransactor } from './repo/transactor';
import { PreferenceTransactor } from './preference/transactor';
import { RecordTransactor } from './record/transactor';
import { ActorStoreConfig } from '../config';
type ActorStoreResources = {
    blobstore: (did: string) => BlobStore;
    backgroundQueue: BackgroundQueue;
    reservedKeyDir?: string;
};
export declare class ActorStore {
    cfg: ActorStoreConfig;
    resources: ActorStoreResources;
    reservedKeyDir: string;
    constructor(cfg: ActorStoreConfig, resources: ActorStoreResources);
    getLocation(did: string): Promise<{
        directory: string;
        dbLocation: string;
        keyLocation: string;
    }>;
    exists(did: string): Promise<boolean>;
    keypair(did: string): Promise<Keypair>;
    openDb(did: string): Promise<ActorDb>;
    read<T>(did: string, fn: ActorStoreReadFn<T>): Promise<T>;
    transact<T>(did: string, fn: ActorStoreTransactFn<T>): Promise<T>;
    writeNoTransaction<T>(did: string, fn: ActorStoreWriterFn<T>): Promise<T>;
    create(did: string, keypair: ExportableKeypair): Promise<void>;
    destroy(did: string): Promise<void>;
    reserveKeypair(did?: string): Promise<string>;
    getReservedKeypair(signingKeyOrDid: string): Promise<ExportableKeypair | undefined>;
    clearReservedKeypair(keyDid: string, did?: string): Promise<void>;
    storePlcOp(did: string, op: Uint8Array): Promise<void>;
    getPlcOp(did: string): Promise<Uint8Array>;
    clearPlcOp(did: string): Promise<void>;
}
export type ActorStoreReadFn<T> = (fn: ActorStoreReader) => Promise<T>;
export type ActorStoreTransactFn<T> = (fn: ActorStoreTransactor) => Promise<T>;
export type ActorStoreWriterFn<T> = (fn: ActorStoreWriter) => Promise<T>;
export type ActorStoreReader = {
    did: string;
    db: ActorDb;
    repo: RepoReader;
    record: RecordReader;
    pref: PreferenceReader;
    keypair: () => Promise<Keypair>;
    transact: <T>(fn: ActorStoreTransactFn<T>) => Promise<T>;
};
export type ActorStoreTransactor = {
    did: string;
    db: ActorDb;
    repo: RepoTransactor;
    record: RecordTransactor;
    pref: PreferenceTransactor;
};
export type ActorStoreWriter = ActorStoreTransactor & {
    transact: <T>(fn: ActorStoreTransactFn<T>) => Promise<T>;
};
export {};
//# sourceMappingURL=index.d.ts.map