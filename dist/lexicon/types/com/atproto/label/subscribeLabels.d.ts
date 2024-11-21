/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, ErrorFrame } from '@atproto/xrpc-server';
import { IncomingMessage } from 'http';
import * as ComAtprotoLabelDefs from './defs';
export interface QueryParams {
    /** The last known event seq number to backfill from. */
    cursor?: number;
}
export type OutputSchema = Labels | Info | {
    $type: string;
    [k: string]: unknown;
};
export type HandlerError = ErrorFrame<'FutureCursor'>;
export type HandlerOutput = HandlerError | OutputSchema;
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
    auth: HA;
    params: QueryParams;
    req: IncomingMessage;
    signal: AbortSignal;
};
export type Handler<HA extends HandlerAuth = never> = (ctx: HandlerReqCtx<HA>) => AsyncIterable<HandlerOutput>;
export interface Labels {
    seq: number;
    labels: ComAtprotoLabelDefs.Label[];
    [k: string]: unknown;
}
export declare function isLabels(v: unknown): v is Labels;
export declare function validateLabels(v: unknown): ValidationResult;
export interface Info {
    name: 'OutdatedCursor' | (string & {});
    message?: string;
    [k: string]: unknown;
}
export declare function isInfo(v: unknown): v is Info;
export declare function validateInfo(v: unknown): ValidationResult;
//# sourceMappingURL=subscribeLabels.d.ts.map