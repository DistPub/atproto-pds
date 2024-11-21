/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import stream from 'stream';
import { HandlerAuth } from '@atproto/xrpc-server';
export interface QueryParams {
}
export type InputSchema = string | Uint8Array | Blob;
export interface HandlerInput {
    encoding: 'application/vnd.ipld.car';
    body: stream.Readable;
}
export interface HandlerError {
    status: number;
    message?: string;
}
export type HandlerOutput = HandlerError | void;
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
    auth: HA;
    params: QueryParams;
    input: HandlerInput;
    req: express.Request;
    res: express.Response;
};
export type Handler<HA extends HandlerAuth = never> = (ctx: HandlerReqCtx<HA>) => Promise<HandlerOutput> | HandlerOutput;
//# sourceMappingURL=importRepo.d.ts.map