/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
import * as ToolsOzoneModerationDefs from './defs';
export interface QueryParams {
    did: string;
}
export type InputSchema = undefined;
export type OutputSchema = ToolsOzoneModerationDefs.RepoViewDetail;
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
    error?: 'RepoNotFound';
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
//# sourceMappingURL=getRepo.d.ts.map