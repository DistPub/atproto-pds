/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
export interface QueryParams {
}
export type InputSchema = undefined;
export interface OutputSchema {
    suggestions: Suggestion[];
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
export interface Suggestion {
    tag: string;
    subjectType: 'actor' | 'feed' | (string & {});
    subject: string;
    [k: string]: unknown;
}
export declare function isSuggestion(v: unknown): v is Suggestion;
export declare function validateSuggestion(v: unknown): ValidationResult;
//# sourceMappingURL=getTaggedSuggestions.d.ts.map