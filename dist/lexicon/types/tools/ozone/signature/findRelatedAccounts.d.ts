/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express';
import { ValidationResult } from '@atproto/lexicon';
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server';
import * as ComAtprotoAdminDefs from '../../../com/atproto/admin/defs';
import * as ToolsOzoneSignatureDefs from './defs';
export interface QueryParams {
    did: string;
    cursor?: string;
    limit: number;
}
export type InputSchema = undefined;
export interface OutputSchema {
    cursor?: string;
    accounts: RelatedAccount[];
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
export interface RelatedAccount {
    account: ComAtprotoAdminDefs.AccountView;
    similarities?: ToolsOzoneSignatureDefs.SigDetail[];
    [k: string]: unknown;
}
export declare function isRelatedAccount(v: unknown): v is RelatedAccount;
export declare function validateRelatedAccount(v: unknown): ValidationResult;
//# sourceMappingURL=findRelatedAccounts.d.ts.map