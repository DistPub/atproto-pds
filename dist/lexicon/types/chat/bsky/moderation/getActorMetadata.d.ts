/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
export interface QueryParams {
    actor: string;
}
export type InputSchema = undefined;
export interface OutputSchema {
    day: Metadata;
    month: Metadata;
    all: Metadata;
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
export interface Metadata {
    messagesSent: number;
    messagesReceived: number;
    convos: number;
    convosStarted: number;
    [k: string]: unknown;
}
export declare function isMetadata(v: unknown): v is Metadata;
export declare function validateMetadata(v: unknown): ValidationResult;
//# sourceMappingURL=getActorMetadata.d.ts.map