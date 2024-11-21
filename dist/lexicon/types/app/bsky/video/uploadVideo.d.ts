/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import stream from 'stream';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
import * as AppBskyVideoDefs from './defs';
export interface QueryParams {
}
export type InputSchema = string | Uint8Array | Blob;
export interface OutputSchema {
    jobStatus: AppBskyVideoDefs.JobStatus;
    [k: string]: unknown;
}
export interface HandlerInput {
    encoding: 'video/mp4';
    body: stream.Readable;
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
//# sourceMappingURL=uploadVideo.d.ts.map