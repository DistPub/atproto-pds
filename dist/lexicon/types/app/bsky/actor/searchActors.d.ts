/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
import * as AppBskyActorDefs from './defs';
export interface QueryParams {
    /** DEPRECATED: use 'q' instead. */
    term?: string;
    /** Search query string. Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. */
    q?: string;
    limit: number;
    cursor?: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    cursor?: string;
    actors: AppBskyActorDefs.ProfileView[];
    [k: string]: unknown;
}
export type HandlerInput = undefined;
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
//# sourceMappingURL=searchActors.d.ts.map