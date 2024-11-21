/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
export interface QueryParams {
}
export interface InputSchema {
    /** A short name for the App Password, to help distinguish them. */
    name: string;
    /** If an app password has 'privileged' access to possibly sensitive account state. Meant for use with trusted clients. */
    privileged?: boolean;
    [k: string]: unknown;
}
export type OutputSchema = AppPassword;
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
    error?: 'AccountTakedown';
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
export interface AppPassword {
    name: string;
    password: string;
    createdAt: string;
    privileged?: boolean;
    [k: string]: unknown;
}
export declare function isAppPassword(v: unknown): v is AppPassword;
export declare function validateAppPassword(v: unknown): ValidationResult;
//# sourceMappingURL=createAppPassword.d.ts.map