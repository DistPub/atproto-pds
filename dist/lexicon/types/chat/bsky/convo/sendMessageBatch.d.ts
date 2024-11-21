/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
import * as ChatBskyConvoDefs from './defs';
export interface QueryParams {
}
export interface InputSchema {
    items: BatchItem[];
    [k: string]: unknown;
}
export interface OutputSchema {
    items: ChatBskyConvoDefs.MessageView[];
    [k: string]: unknown;
}
export interface HandlerInput {
    encoding: 'application/json';
    body: InputSchema;
}
export interface HandlerSuccess {
    encoding: 'application/json';
    body: OutputSchema;
    headers?: {
        [key: string]: string;
    };
}
export interface HandlerError {
    status: number;
    message?: string;
}
export type HandlerOutput = HandlerError | HandlerSuccess | HandlerPipeThrough;
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
    auth: HA;
    params: QueryParams;
    input: HandlerInput;
    req: express.Request;
    res: express.Response;
};
export type Handler<HA extends HandlerAuth = never> = (ctx: HandlerReqCtx<HA>) => Promise<HandlerOutput> | HandlerOutput;
export interface BatchItem {
    convoId: string;
    message: ChatBskyConvoDefs.MessageInput;
    [k: string]: unknown;
}
export declare function isBatchItem(v: unknown): v is BatchItem;
export declare function validateBatchItem(v: unknown): ValidationResult;
//# sourceMappingURL=sendMessageBatch.d.ts.map