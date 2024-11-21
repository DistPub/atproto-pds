import { AtUri } from '@atproto/syntax';
import { CID } from 'multiformats/cid';
import { ActorDb, Backlink } from '../db';
import { StatusAttr } from '../../lexicon/types/com/atproto/admin/defs';
import { RepoRecord } from '@atproto/lexicon';
export declare class RecordReader {
    db: ActorDb;
    constructor(db: ActorDb);
    recordCount(): Promise<number>;
    listCollections(): Promise<string[]>;
    listRecordsForCollection(opts: {
        collection: string;
        limit: number;
        reverse: boolean;
        cursor?: string;
        rkeyStart?: string;
        rkeyEnd?: string;
        includeSoftDeleted?: boolean;
    }): Promise<{
        uri: string;
        cid: string;
        value: object;
    }[]>;
    getRecord(uri: AtUri, cid: string | null, includeSoftDeleted?: boolean): Promise<{
        uri: string;
        cid: string;
        value: object;
        indexedAt: string;
        takedownRef: string | null;
    } | null>;
    hasRecord(uri: AtUri, cid: string | null, includeSoftDeleted?: boolean): Promise<boolean>;
    getRecordTakedownStatus(uri: AtUri): Promise<StatusAttr | null>;
    getCurrentRecordCid(uri: AtUri): Promise<CID | null>;
    getRecordBacklinks(opts: {
        collection: string;
        path: string;
        linkTo: string;
    }): Promise<{
        takedownRef: string | null;
        indexedAt: string;
        cid: string;
        uri: string;
        collection: string;
        rkey: string;
        repoRev: string;
    }[]>;
    getBacklinkConflicts(uri: AtUri, record: RepoRecord): Promise<AtUri[]>;
}
export declare const getBacklinks: (uri: AtUri, record: RepoRecord) => Backlink[];
//# sourceMappingURL=reader.d.ts.map