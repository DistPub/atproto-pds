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
    did: string;
    feeds: Feed[];
    links?: Links;
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
export interface Feed {
    uri: string;
    [k: string]: unknown;
}
export declare function isFeed(v: unknown): v is Feed;
export declare function validateFeed(v: unknown): ValidationResult;
export interface Links {
    privacyPolicy?: string;
    termsOfService?: string;
    [k: string]: unknown;
}
export declare function isLinks(v: unknown): v is Links;
export declare function validateLinks(v: unknown): ValidationResult;
//# sourceMappingURL=describeFeedGenerator.d.ts.map