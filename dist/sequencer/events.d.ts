import { z } from 'zod';
import { CommitData } from '@atproto/repo';
import { PreparedWrite } from '../repo';
import { CID } from 'multiformats/cid';
import { RepoSeqInsert } from './db';
import { AccountStatus } from '../account-manager';
export declare const formatSeqCommit: (did: string, commitData: CommitData, writes: PreparedWrite[]) => Promise<RepoSeqInsert>;
export declare const formatSeqHandleUpdate: (did: string, handle: string) => Promise<RepoSeqInsert>;
export declare const formatSeqIdentityEvt: (did: string, handle?: string) => Promise<RepoSeqInsert>;
export declare const formatSeqAccountEvt: (did: string, status: AccountStatus) => Promise<RepoSeqInsert>;
export declare const formatSeqTombstone: (did: string) => Promise<RepoSeqInsert>;
export declare const commitEvtOp: z.ZodObject<{
    action: z.ZodUnion<[z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">]>;
    path: z.ZodString;
    cid: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, CID, any>>;
}, "strip", z.ZodTypeAny, {
    cid: CID | null;
    action: "create" | "update" | "delete";
    path: string;
}, {
    action: "create" | "update" | "delete";
    path: string;
    cid?: any;
}>;
export type CommitEvtOp = z.infer<typeof commitEvtOp>;
export declare const commitEvt: z.ZodObject<{
    rebase: z.ZodBoolean;
    tooBig: z.ZodBoolean;
    repo: z.ZodString;
    commit: z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, CID, any>;
    prev: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, CID, any>>;
    rev: z.ZodString;
    since: z.ZodNullable<z.ZodString>;
    blocks: z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>;
    ops: z.ZodArray<z.ZodObject<{
        action: z.ZodUnion<[z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">]>;
        path: z.ZodString;
        cid: z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, CID, any>>;
    }, "strip", z.ZodTypeAny, {
        cid: CID | null;
        action: "create" | "update" | "delete";
        path: string;
    }, {
        action: "create" | "update" | "delete";
        path: string;
        cid?: any;
    }>, "many">;
    blobs: z.ZodArray<z.ZodEffects<z.ZodEffects<z.ZodAny, any, any>, CID, any>, "many">;
}, "strip", z.ZodTypeAny, {
    repo: string;
    rev: string;
    blobs: CID[];
    rebase: boolean;
    tooBig: boolean;
    commit: CID;
    since: string | null;
    blocks: Uint8Array;
    ops: {
        cid: CID | null;
        action: "create" | "update" | "delete";
        path: string;
    }[];
    prev: CID | null;
}, {
    repo: string;
    rev: string;
    blobs: any[];
    rebase: boolean;
    tooBig: boolean;
    since: string | null;
    blocks: Uint8Array;
    ops: {
        action: "create" | "update" | "delete";
        path: string;
        cid?: any;
    }[];
    commit?: any;
    prev?: any;
}>;
export type CommitEvt = z.infer<typeof commitEvt>;
export declare const handleEvt: z.ZodObject<{
    did: z.ZodString;
    handle: z.ZodString;
}, "strip", z.ZodTypeAny, {
    did: string;
    handle: string;
}, {
    did: string;
    handle: string;
}>;
export type HandleEvt = z.infer<typeof handleEvt>;
export declare const identityEvt: z.ZodObject<{
    did: z.ZodString;
    handle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    did: string;
    handle?: string | undefined;
}, {
    did: string;
    handle?: string | undefined;
}>;
export type IdentityEvt = z.infer<typeof identityEvt>;
export declare const accountEvt: z.ZodObject<{
    did: z.ZodString;
    active: z.ZodBoolean;
    status: z.ZodOptional<z.ZodEnum<[AccountStatus.Takendown, AccountStatus.Suspended, AccountStatus.Deleted, AccountStatus.Deactivated]>>;
}, "strip", z.ZodTypeAny, {
    did: string;
    active: boolean;
    status?: AccountStatus.Takendown | AccountStatus.Suspended | AccountStatus.Deleted | AccountStatus.Deactivated | undefined;
}, {
    did: string;
    active: boolean;
    status?: AccountStatus.Takendown | AccountStatus.Suspended | AccountStatus.Deleted | AccountStatus.Deactivated | undefined;
}>;
export type AccountEvt = z.infer<typeof accountEvt>;
export declare const tombstoneEvt: z.ZodObject<{
    did: z.ZodString;
}, "strip", z.ZodTypeAny, {
    did: string;
}, {
    did: string;
}>;
export type TombstoneEvt = z.infer<typeof tombstoneEvt>;
type TypedCommitEvt = {
    type: 'commit';
    seq: number;
    time: string;
    evt: CommitEvt;
};
type TypedHandleEvt = {
    type: 'handle';
    seq: number;
    time: string;
    evt: HandleEvt;
};
type TypedIdentityEvt = {
    type: 'identity';
    seq: number;
    time: string;
    evt: IdentityEvt;
};
type TypedAccountEvt = {
    type: 'account';
    seq: number;
    time: string;
    evt: AccountEvt;
};
type TypedTombstoneEvt = {
    type: 'tombstone';
    seq: number;
    time: string;
    evt: TombstoneEvt;
};
export type SeqEvt = TypedCommitEvt | TypedHandleEvt | TypedIdentityEvt | TypedAccountEvt | TypedTombstoneEvt;
export {};
//# sourceMappingURL=events.d.ts.map