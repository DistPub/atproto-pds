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
    /** If true, an invite code must be supplied to create an account on this instance. */
    inviteCodeRequired?: boolean;
    /** If true, a phone verification token must be supplied to create an account on this instance. */
    phoneVerificationRequired?: boolean;
    /** List of domain suffixes that can be used in account handles. */
    availableUserDomains: string[];
    links?: Links;
    contact?: Contact;
    did: string;
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
export interface Links {
    privacyPolicy?: string;
    termsOfService?: string;
    [k: string]: unknown;
}
export declare function isLinks(v: unknown): v is Links;
export declare function validateLinks(v: unknown): ValidationResult;
export interface Contact {
    email?: string;
    [k: string]: unknown;
}
export declare function isContact(v: unknown): v is Contact;
export declare function validateContact(v: unknown): ValidationResult;
//# sourceMappingURL=describeServer.d.ts.map