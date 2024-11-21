import TypedEmitter from 'typed-emitter';
import { CommitData } from '@atproto/repo';
import { SeqEvt } from './events';
import { SequencerDb, RepoSeqEntry, RepoSeqInsert } from './db';
import { PreparedWrite } from '../repo';
import { Crawlers } from '../crawlers';
import { AccountStatus } from '../account-manager/helpers/account';
export * from './events';
declare const Sequencer_base: new () => SequencerEmitter;
export declare class Sequencer extends Sequencer_base {
    crawlers: Crawlers;
    lastSeen: number;
    db: SequencerDb;
    destroyed: boolean;
    pollPromise: Promise<void> | null;
    triesWithNoResults: number;
    constructor(dbLocation: string, crawlers: Crawlers, lastSeen?: number, disableWalAutoCheckpoint?: boolean);
    start(): Promise<void>;
    destroy(): Promise<void>;
    curr(): Promise<number | null>;
    next(cursor: number): Promise<SeqRow | null>;
    earliestAfterTime(time: string): Promise<SeqRow | null>;
    requestSeqRange(opts: {
        earliestSeq?: number;
        latestSeq?: number;
        earliestTime?: string;
        limit?: number;
    }): Promise<SeqEvt[]>;
    private pollDb;
    private exponentialBackoff;
    sequenceEvt(evt: RepoSeqInsert): Promise<number>;
    sequenceCommit(did: string, commitData: CommitData, writes: PreparedWrite[]): Promise<number>;
    sequenceHandleUpdate(did: string, handle: string): Promise<number>;
    sequenceIdentityEvt(did: string, handle?: string): Promise<number>;
    sequenceAccountEvt(did: string, status: AccountStatus): Promise<number>;
    sequenceTombstone(did: string): Promise<number>;
    deleteAllForUser(did: string, excludingSeqs?: number[]): Promise<void>;
}
type SeqRow = RepoSeqEntry;
type SequencerEvents = {
    events: (evts: SeqEvt[]) => void;
    close: () => void;
};
export type SequencerEmitter = TypedEmitter<SequencerEvents>;
export default Sequencer;
//# sourceMappingURL=sequencer.d.ts.map