import { AsyncBuffer } from '@atproto/common';
import { Sequencer, SeqEvt } from '.';
export type OutboxOpts = {
    maxBufferSize: number;
};
export declare class Outbox {
    sequencer: Sequencer;
    private caughtUp;
    lastSeen: number;
    cutoverBuffer: SeqEvt[];
    outBuffer: AsyncBuffer<SeqEvt>;
    constructor(sequencer: Sequencer, opts?: Partial<OutboxOpts>);
    events(backfillCursor?: number, signal?: AbortSignal): AsyncGenerator<SeqEvt>;
    getBackfill(backfillCursor: number): AsyncGenerator<SeqEvt, void, unknown>;
}
export default Outbox;
//# sourceMappingURL=outbox.d.ts.map