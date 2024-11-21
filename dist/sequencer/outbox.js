"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outbox = void 0;
const common_1 = require("@atproto/common");
const xrpc_server_1 = require("@atproto/xrpc-server");
class Outbox {
    constructor(sequencer, opts = {}) {
        Object.defineProperty(this, "sequencer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: sequencer
        });
        Object.defineProperty(this, "caughtUp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "lastSeen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: -1
        });
        Object.defineProperty(this, "cutoverBuffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "outBuffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const { maxBufferSize = 500 } = opts;
        this.cutoverBuffer = [];
        this.outBuffer = new common_1.AsyncBuffer(maxBufferSize);
    }
    // event stream occurs in 3 phases
    // 1. backfill events: events that have been added to the DB since the last time a connection was open.
    // The outbox is not yet listening for new events from the sequencer
    // 2. cutover: the outbox has caught up with where the sequencer purports to be,
    // but the sequencer might already be halfway through sending out a round of updates.
    // Therefore, we start accepting the sequencer's events in a buffer, while making our own request to the
    // database to ensure we're caught up. We then dedupe the query & the buffer & stream the events in order
    // 3. streaming: we're all caught up on historic state, so the sequencer outputs events and we
    // immediately yield them
    async *events(backfillCursor, signal) {
        // catch up as much as we can
        if (backfillCursor !== undefined) {
            for await (const evt of this.getBackfill(backfillCursor)) {
                if (signal?.aborted)
                    return;
                this.lastSeen = evt.seq;
                yield evt;
            }
        }
        else {
            // if not backfill, we don't need to cutover, just start streaming
            this.caughtUp = true;
        }
        // streams updates from sequencer, but buffers them for cutover as it makes a last request
        const addToBuffer = (evts) => {
            if (this.caughtUp) {
                this.outBuffer.pushMany(evts);
            }
            else {
                this.cutoverBuffer = [...this.cutoverBuffer, ...evts];
            }
        };
        if (!signal?.aborted) {
            this.sequencer.on('events', addToBuffer);
        }
        signal?.addEventListener('abort', () => this.sequencer.off('events', addToBuffer));
        const cutover = async () => {
            // only need to perform cutover if we've been backfilling
            if (backfillCursor !== undefined) {
                const cutoverEvts = await this.sequencer.requestSeqRange({
                    earliestSeq: this.lastSeen > -1 ? this.lastSeen : backfillCursor,
                });
                this.outBuffer.pushMany(cutoverEvts);
                // dont worry about dupes, we ensure order on yield
                this.outBuffer.pushMany(this.cutoverBuffer);
                this.caughtUp = true;
                this.cutoverBuffer = [];
            }
            else {
                this.caughtUp = true;
            }
        };
        cutover();
        while (true) {
            try {
                for await (const evt of this.outBuffer.events()) {
                    if (signal?.aborted)
                        return;
                    if (evt.seq > this.lastSeen) {
                        this.lastSeen = evt.seq;
                        yield evt;
                    }
                }
            }
            catch (err) {
                if (err instanceof common_1.AsyncBufferFullError) {
                    throw new xrpc_server_1.InvalidRequestError('Stream consumer too slow', 'ConsumerTooSlow');
                }
                else {
                    throw err;
                }
            }
        }
    }
    // yields only historical events
    async *getBackfill(backfillCursor) {
        const PAGE_SIZE = 500;
        while (true) {
            const evts = await this.sequencer.requestSeqRange({
                earliestSeq: this.lastSeen > -1 ? this.lastSeen : backfillCursor,
                limit: PAGE_SIZE,
            });
            for (const evt of evts) {
                yield evt;
            }
            // if we're within half a pagesize of the sequencer, we call it good & switch to cutover
            const seqCursor = this.sequencer.lastSeen ?? -1;
            if (seqCursor - this.lastSeen < PAGE_SIZE / 2)
                break;
            if (evts.length < 1)
                break;
        }
    }
}
exports.Outbox = Outbox;
exports.default = Outbox;
//# sourceMappingURL=outbox.js.map