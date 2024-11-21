/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { LexiconDoc, Lexicons } from '@atproto/lexicon';
export declare const schemaDict: {
    ComAtprotoAdminDefs: {
        lexicon: number;
        id: string;
        defs: {
            statusAttr: {
                type: string;
                required: string[];
                properties: {
                    applied: {
                        type: string;
                    };
                    ref: {
                        type: string;
                    };
                };
            };
            accountView: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    email: {
                        type: string;
                    };
                    relatedRecords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    invitedBy: {
                        type: string;
                        ref: string;
                    };
                    invites: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    invitesDisabled: {
                        type: string;
                    };
                    emailConfirmedAt: {
                        type: string;
                        format: string;
                    };
                    inviteNote: {
                        type: string;
                    };
                    deactivatedAt: {
                        type: string;
                        format: string;
                    };
                    threatSignatures: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            repoRef: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
            repoBlobRef: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    recordUri: {
                        type: string;
                        format: string;
                    };
                };
            };
            threatSignature: {
                type: string;
                required: string[];
                properties: {
                    property: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoAdminDeleteAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminDisableAccountInvites: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            account: {
                                type: string;
                                format: string;
                            };
                            note: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminDisableInviteCodes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            codes: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            accounts: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminEnableAccountInvites: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            account: {
                                type: string;
                                format: string;
                            };
                            note: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminGetAccountInfo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ComAtprotoAdminGetAccountInfos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        dids: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            infos: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminGetInviteCodes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        sort: {
                            type: string;
                            knownValues: string[];
                            default: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            codes: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminGetSubjectStatus: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        did: {
                            type: string;
                            format: string;
                        };
                        uri: {
                            type: string;
                            format: string;
                        };
                        blob: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                refs: string[];
                            };
                            takedown: {
                                type: string;
                                ref: string;
                            };
                            deactivated: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminSearchAccounts: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        email: {
                            type: string;
                        };
                        cursor: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            accounts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminSendEmail: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            recipientDid: {
                                type: string;
                                format: string;
                            };
                            content: {
                                type: string;
                            };
                            subject: {
                                type: string;
                            };
                            senderDid: {
                                type: string;
                                format: string;
                            };
                            comment: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            sent: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminUpdateAccountEmail: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            account: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            email: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminUpdateAccountHandle: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            handle: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminUpdateAccountPassword: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            password: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoAdminUpdateSubjectStatus: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                refs: string[];
                            };
                            takedown: {
                                type: string;
                                ref: string;
                            };
                            deactivated: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                refs: string[];
                            };
                            takedown: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoIdentityGetRecommendedDidCredentials: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            rotationKeys: {
                                description: string;
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            alsoKnownAs: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            verificationMethods: {
                                type: string;
                            };
                            services: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoIdentityRequestPlcOperationSignature: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoIdentityResolveHandle: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        handle: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoIdentitySignPlcOperation: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            token: {
                                description: string;
                                type: string;
                            };
                            rotationKeys: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            alsoKnownAs: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            verificationMethods: {
                                type: string;
                            };
                            services: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            operation: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoIdentitySubmitPlcOperation: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            operation: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoIdentityUpdateHandle: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            handle: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoLabelDefs: {
        lexicon: number;
        id: string;
        defs: {
            label: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    ver: {
                        type: string;
                        description: string;
                    };
                    src: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    uri: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    val: {
                        type: string;
                        maxLength: number;
                        description: string;
                    };
                    neg: {
                        type: string;
                        description: string;
                    };
                    cts: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    exp: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    sig: {
                        type: string;
                        description: string;
                    };
                };
            };
            selfLabels: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    values: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                        maxLength: number;
                    };
                };
            };
            selfLabel: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    val: {
                        type: string;
                        maxLength: number;
                        description: string;
                    };
                };
            };
            labelValueDefinition: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    identifier: {
                        type: string;
                        description: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                    severity: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                    blurs: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                    defaultSetting: {
                        type: string;
                        description: string;
                        knownValues: string[];
                        default: string;
                    };
                    adultOnly: {
                        type: string;
                        description: string;
                    };
                    locales: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            labelValueDefinitionStrings: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    lang: {
                        type: string;
                        description: string;
                        format: string;
                    };
                    name: {
                        type: string;
                        description: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        description: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                };
            };
            labelValue: {
                type: string;
                knownValues: string[];
            };
        };
    };
    ComAtprotoLabelQueryLabels: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uriPatterns: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        sources: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            labels: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoLabelSubscribeLabels: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        cursor: {
                            type: string;
                            description: string;
                        };
                    };
                };
                message: {
                    schema: {
                        type: string;
                        refs: string[];
                    };
                };
                errors: {
                    name: string;
                }[];
            };
            labels: {
                type: string;
                required: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            info: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        knownValues: string[];
                    };
                    message: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoModerationCreateReport: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            reasonType: {
                                type: string;
                                description: string;
                                ref: string;
                            };
                            reason: {
                                type: string;
                                maxGraphemes: number;
                                maxLength: number;
                                description: string;
                            };
                            subject: {
                                type: string;
                                refs: string[];
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            id: {
                                type: string;
                            };
                            reasonType: {
                                type: string;
                                ref: string;
                            };
                            reason: {
                                type: string;
                                maxGraphemes: number;
                                maxLength: number;
                            };
                            subject: {
                                type: string;
                                refs: string[];
                            };
                            reportedBy: {
                                type: string;
                                format: string;
                            };
                            createdAt: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoModerationDefs: {
        lexicon: number;
        id: string;
        defs: {
            reasonType: {
                type: string;
                knownValues: string[];
            };
            reasonSpam: {
                type: string;
                description: string;
            };
            reasonViolation: {
                type: string;
                description: string;
            };
            reasonMisleading: {
                type: string;
                description: string;
            };
            reasonSexual: {
                type: string;
                description: string;
            };
            reasonRude: {
                type: string;
                description: string;
            };
            reasonOther: {
                type: string;
                description: string;
            };
            reasonAppeal: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoRepoApplyWrites: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            repo: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            validate: {
                                type: string;
                                description: string;
                            };
                            writes: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                    closed: boolean;
                                };
                            };
                            swapCommit: {
                                type: string;
                                description: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: never[];
                        properties: {
                            commit: {
                                type: string;
                                ref: string;
                            };
                            results: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                    closed: boolean;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
            create: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    collection: {
                        type: string;
                        format: string;
                    };
                    rkey: {
                        type: string;
                        maxLength: number;
                    };
                    value: {
                        type: string;
                    };
                };
            };
            update: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    collection: {
                        type: string;
                        format: string;
                    };
                    rkey: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                };
            };
            delete: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    collection: {
                        type: string;
                        format: string;
                    };
                    rkey: {
                        type: string;
                    };
                };
            };
            createResult: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    validationStatus: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
            updateResult: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    validationStatus: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
            deleteResult: {
                type: string;
                required: never[];
                properties: {};
            };
        };
    };
    ComAtprotoRepoCreateRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            repo: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            collection: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            rkey: {
                                type: string;
                                description: string;
                                maxLength: number;
                            };
                            validate: {
                                type: string;
                                description: string;
                            };
                            record: {
                                type: string;
                                description: string;
                            };
                            swapCommit: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            commit: {
                                type: string;
                                ref: string;
                            };
                            validationStatus: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ComAtprotoRepoDefs: {
        lexicon: number;
        id: string;
        defs: {
            commitMeta: {
                type: string;
                required: string[];
                properties: {
                    cid: {
                        type: string;
                        format: string;
                    };
                    rev: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoRepoDeleteRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            repo: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            collection: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            rkey: {
                                type: string;
                                description: string;
                            };
                            swapRecord: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            swapCommit: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            commit: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoRepoDescribeRepo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        repo: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            handle: {
                                type: string;
                                format: string;
                            };
                            did: {
                                type: string;
                                format: string;
                            };
                            didDoc: {
                                type: string;
                                description: string;
                            };
                            collections: {
                                type: string;
                                description: string;
                                items: {
                                    type: string;
                                    format: string;
                                };
                            };
                            handleIsCorrect: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoRepoGetRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        repo: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        collection: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        rkey: {
                            type: string;
                            description: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            value: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoRepoImportRepo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                };
            };
        };
    };
    ComAtprotoRepoListMissingBlobs: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            blobs: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            recordBlob: {
                type: string;
                required: string[];
                properties: {
                    cid: {
                        type: string;
                        format: string;
                    };
                    recordUri: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ComAtprotoRepoListRecords: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        repo: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        collection: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                            description: string;
                        };
                        cursor: {
                            type: string;
                        };
                        rkeyStart: {
                            type: string;
                            description: string;
                        };
                        rkeyEnd: {
                            type: string;
                            description: string;
                        };
                        reverse: {
                            type: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            records: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            record: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    value: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoRepoPutRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        nullable: string[];
                        properties: {
                            repo: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            collection: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            rkey: {
                                type: string;
                                description: string;
                                maxLength: number;
                            };
                            validate: {
                                type: string;
                                description: string;
                            };
                            record: {
                                type: string;
                                description: string;
                            };
                            swapRecord: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            swapCommit: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            commit: {
                                type: string;
                                ref: string;
                            };
                            validationStatus: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoRepoStrongRef: {
        lexicon: number;
        id: string;
        description: string;
        defs: {
            main: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ComAtprotoRepoUploadBlob: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            blob: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerActivateAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoServerCheckAccountStatus: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            activated: {
                                type: string;
                            };
                            validDid: {
                                type: string;
                            };
                            repoCommit: {
                                type: string;
                                format: string;
                            };
                            repoRev: {
                                type: string;
                            };
                            repoBlocks: {
                                type: string;
                            };
                            indexedRecords: {
                                type: string;
                            };
                            privateStateValues: {
                                type: string;
                            };
                            expectedBlobs: {
                                type: string;
                            };
                            importedBlobs: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerConfirmEmail: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            email: {
                                type: string;
                            };
                            token: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerCreateAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            email: {
                                type: string;
                            };
                            handle: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            did: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            inviteCode: {
                                type: string;
                            };
                            verificationCode: {
                                type: string;
                            };
                            verificationPhone: {
                                type: string;
                            };
                            password: {
                                type: string;
                                description: string;
                            };
                            recoveryKey: {
                                type: string;
                                description: string;
                            };
                            plcOp: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        description: string;
                        required: string[];
                        properties: {
                            accessJwt: {
                                type: string;
                            };
                            refreshJwt: {
                                type: string;
                            };
                            handle: {
                                type: string;
                                format: string;
                            };
                            did: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            didDoc: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerCreateAppPassword: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                                description: string;
                            };
                            privileged: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
            appPassword: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    privileged: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoServerCreateInviteCode: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            useCount: {
                                type: string;
                            };
                            forAccount: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            code: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerCreateInviteCodes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            codeCount: {
                                type: string;
                                default: number;
                            };
                            useCount: {
                                type: string;
                            };
                            forAccounts: {
                                type: string;
                                items: {
                                    type: string;
                                    format: string;
                                };
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            codes: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            accountCodes: {
                type: string;
                required: string[];
                properties: {
                    account: {
                        type: string;
                    };
                    codes: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerCreateSession: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            identifier: {
                                type: string;
                                description: string;
                            };
                            password: {
                                type: string;
                            };
                            authFactorToken: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            accessJwt: {
                                type: string;
                            };
                            refreshJwt: {
                                type: string;
                            };
                            handle: {
                                type: string;
                                format: string;
                            };
                            did: {
                                type: string;
                                format: string;
                            };
                            didDoc: {
                                type: string;
                            };
                            email: {
                                type: string;
                            };
                            emailConfirmed: {
                                type: string;
                            };
                            emailAuthFactor: {
                                type: string;
                            };
                            active: {
                                type: string;
                            };
                            status: {
                                type: string;
                                description: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerDeactivateAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            deleteAfter: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerDefs: {
        lexicon: number;
        id: string;
        defs: {
            inviteCode: {
                type: string;
                required: string[];
                properties: {
                    code: {
                        type: string;
                    };
                    available: {
                        type: string;
                    };
                    disabled: {
                        type: string;
                    };
                    forAccount: {
                        type: string;
                    };
                    createdBy: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    uses: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            inviteCodeUse: {
                type: string;
                required: string[];
                properties: {
                    usedBy: {
                        type: string;
                        format: string;
                    };
                    usedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ComAtprotoServerDeleteAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            password: {
                                type: string;
                            };
                            token: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerDeleteSession: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoServerDescribeServer: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            inviteCodeRequired: {
                                type: string;
                                description: string;
                            };
                            phoneVerificationRequired: {
                                type: string;
                                description: string;
                            };
                            availableUserDomains: {
                                type: string;
                                description: string;
                                items: {
                                    type: string;
                                };
                            };
                            links: {
                                type: string;
                                description: string;
                                ref: string;
                            };
                            contact: {
                                type: string;
                                description: string;
                                ref: string;
                            };
                            did: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
            links: {
                type: string;
                properties: {
                    privacyPolicy: {
                        type: string;
                        format: string;
                    };
                    termsOfService: {
                        type: string;
                        format: string;
                    };
                };
            };
            contact: {
                type: string;
                properties: {
                    email: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoServerGetAccountInviteCodes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        includeUsed: {
                            type: string;
                            default: boolean;
                        };
                        createAvailable: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            codes: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerGetServiceAuth: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        aud: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        exp: {
                            type: string;
                            description: string;
                        };
                        lxm: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            token: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ComAtprotoServerGetSession: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            handle: {
                                type: string;
                                format: string;
                            };
                            did: {
                                type: string;
                                format: string;
                            };
                            email: {
                                type: string;
                            };
                            emailConfirmed: {
                                type: string;
                            };
                            emailAuthFactor: {
                                type: string;
                            };
                            didDoc: {
                                type: string;
                            };
                            active: {
                                type: string;
                            };
                            status: {
                                type: string;
                                description: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerListAppPasswords: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            passwords: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
            appPassword: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    privileged: {
                        type: string;
                    };
                };
            };
        };
    };
    ComAtprotoServerRefreshSession: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            accessJwt: {
                                type: string;
                            };
                            refreshJwt: {
                                type: string;
                            };
                            handle: {
                                type: string;
                                format: string;
                            };
                            did: {
                                type: string;
                                format: string;
                            };
                            didDoc: {
                                type: string;
                            };
                            active: {
                                type: string;
                            };
                            status: {
                                type: string;
                                description: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerRequestAccountDelete: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoServerRequestEmailConfirmation: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
            };
        };
    };
    ComAtprotoServerRequestEmailUpdate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            tokenRequired: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerRequestPasswordReset: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            email: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerReserveSigningKey: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            did: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            signingKey: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerResetPassword: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            token: {
                                type: string;
                            };
                            password: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoServerRevokeAppPassword: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoServerUpdateEmail: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            email: {
                                type: string;
                            };
                            emailAuthFactor: {
                                type: string;
                            };
                            token: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetBlob: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetBlocks: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        cids: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetCheckout: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                };
            };
        };
    };
    ComAtprotoSyncGetHead: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            root: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetLatestCommit: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cid: {
                                type: string;
                                format: string;
                            };
                            rev: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        collection: {
                            type: string;
                            format: string;
                        };
                        rkey: {
                            type: string;
                            description: string;
                        };
                        commit: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetRepo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        since: {
                            type: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncGetRepoStatus: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            active: {
                                type: string;
                            };
                            status: {
                                type: string;
                                description: string;
                                knownValues: string[];
                            };
                            rev: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncListBlobs: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        since: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            cids: {
                                type: string;
                                items: {
                                    type: string;
                                    format: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ComAtprotoSyncListRepos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            repos: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            repo: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    head: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    rev: {
                        type: string;
                    };
                    active: {
                        type: string;
                    };
                    status: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                };
            };
        };
    };
    ComAtprotoSyncNotifyOfUpdate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            hostname: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoSyncRequestCrawl: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            hostname: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoSyncSubscribeRepos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        cursor: {
                            type: string;
                            description: string;
                        };
                    };
                };
                message: {
                    schema: {
                        type: string;
                        refs: string[];
                    };
                };
                errors: ({
                    name: string;
                    description?: undefined;
                } | {
                    name: string;
                    description: string;
                })[];
            };
            commit: {
                type: string;
                description: string;
                required: string[];
                nullable: string[];
                properties: {
                    seq: {
                        type: string;
                        description: string;
                    };
                    rebase: {
                        type: string;
                        description: string;
                    };
                    tooBig: {
                        type: string;
                        description: string;
                    };
                    repo: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    commit: {
                        type: string;
                        description: string;
                    };
                    prev: {
                        type: string;
                        description: string;
                    };
                    rev: {
                        type: string;
                        description: string;
                    };
                    since: {
                        type: string;
                        description: string;
                    };
                    blocks: {
                        type: string;
                        description: string;
                        maxLength: number;
                    };
                    ops: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                            description: string;
                        };
                        maxLength: number;
                    };
                    blobs: {
                        type: string;
                        items: {
                            type: string;
                            description: string;
                        };
                    };
                    time: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
            identity: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    time: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
            account: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    time: {
                        type: string;
                        format: string;
                    };
                    active: {
                        type: string;
                        description: string;
                    };
                    status: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                };
            };
            handle: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    time: {
                        type: string;
                        format: string;
                    };
                };
            };
            migrate: {
                type: string;
                description: string;
                required: string[];
                nullable: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    migrateTo: {
                        type: string;
                    };
                    time: {
                        type: string;
                        format: string;
                    };
                };
            };
            tombstone: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    seq: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    time: {
                        type: string;
                        format: string;
                    };
                };
            };
            info: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        knownValues: string[];
                    };
                    message: {
                        type: string;
                    };
                };
            };
            repoOp: {
                type: string;
                description: string;
                required: string[];
                nullable: string[];
                properties: {
                    action: {
                        type: string;
                        knownValues: string[];
                    };
                    path: {
                        type: string;
                    };
                    cid: {
                        type: string;
                        description: string;
                    };
                };
            };
        };
    };
    ComAtprotoTempCheckSignupQueue: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            activated: {
                                type: string;
                            };
                            placeInQueue: {
                                type: string;
                            };
                            estimatedTimeMs: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoTempFetchLabels: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        since: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            labels: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ComAtprotoTempRequestPhoneVerification: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            phoneNumber: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorDefs: {
        lexicon: number;
        id: string;
        defs: {
            profileViewBasic: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    displayName: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    associated: {
                        type: string;
                        ref: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            profileView: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    displayName: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    associated: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            profileViewDetailed: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    displayName: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    banner: {
                        type: string;
                        format: string;
                    };
                    followersCount: {
                        type: string;
                    };
                    followsCount: {
                        type: string;
                    };
                    postsCount: {
                        type: string;
                    };
                    associated: {
                        type: string;
                        ref: string;
                    };
                    joinedViaStarterPack: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    pinnedPost: {
                        type: string;
                        ref: string;
                    };
                };
            };
            profileAssociated: {
                type: string;
                properties: {
                    lists: {
                        type: string;
                    };
                    feedgens: {
                        type: string;
                    };
                    starterPacks: {
                        type: string;
                    };
                    labeler: {
                        type: string;
                    };
                    chat: {
                        type: string;
                        ref: string;
                    };
                };
            };
            profileAssociatedChat: {
                type: string;
                required: string[];
                properties: {
                    allowIncoming: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
            viewerState: {
                type: string;
                description: string;
                properties: {
                    muted: {
                        type: string;
                    };
                    mutedByList: {
                        type: string;
                        ref: string;
                    };
                    blockedBy: {
                        type: string;
                    };
                    blocking: {
                        type: string;
                        format: string;
                    };
                    blockingByList: {
                        type: string;
                        ref: string;
                    };
                    following: {
                        type: string;
                        format: string;
                    };
                    followedBy: {
                        type: string;
                        format: string;
                    };
                    knownFollowers: {
                        type: string;
                        ref: string;
                    };
                };
            };
            knownFollowers: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    count: {
                        type: string;
                    };
                    followers: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            preferences: {
                type: string;
                items: {
                    type: string;
                    refs: string[];
                };
            };
            adultContentPref: {
                type: string;
                required: string[];
                properties: {
                    enabled: {
                        type: string;
                        default: boolean;
                    };
                };
            };
            contentLabelPref: {
                type: string;
                required: string[];
                properties: {
                    labelerDid: {
                        type: string;
                        description: string;
                        format: string;
                    };
                    label: {
                        type: string;
                    };
                    visibility: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
            savedFeed: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    type: {
                        type: string;
                        knownValues: string[];
                    };
                    value: {
                        type: string;
                    };
                    pinned: {
                        type: string;
                    };
                };
            };
            savedFeedsPrefV2: {
                type: string;
                required: string[];
                properties: {
                    items: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            savedFeedsPref: {
                type: string;
                required: string[];
                properties: {
                    pinned: {
                        type: string;
                        items: {
                            type: string;
                            format: string;
                        };
                    };
                    saved: {
                        type: string;
                        items: {
                            type: string;
                            format: string;
                        };
                    };
                    timelineIndex: {
                        type: string;
                    };
                };
            };
            personalDetailsPref: {
                type: string;
                properties: {
                    birthDate: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
            feedViewPref: {
                type: string;
                required: string[];
                properties: {
                    feed: {
                        type: string;
                        description: string;
                    };
                    hideReplies: {
                        type: string;
                        description: string;
                    };
                    hideRepliesByUnfollowed: {
                        type: string;
                        description: string;
                        default: boolean;
                    };
                    hideRepliesByLikeCount: {
                        type: string;
                        description: string;
                    };
                    hideReposts: {
                        type: string;
                        description: string;
                    };
                    hideQuotePosts: {
                        type: string;
                        description: string;
                    };
                };
            };
            threadViewPref: {
                type: string;
                properties: {
                    sort: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                    prioritizeFollowedUsers: {
                        type: string;
                        description: string;
                    };
                };
            };
            interestsPref: {
                type: string;
                required: string[];
                properties: {
                    tags: {
                        type: string;
                        maxLength: number;
                        items: {
                            type: string;
                            maxLength: number;
                            maxGraphemes: number;
                        };
                        description: string;
                    };
                };
            };
            mutedWordTarget: {
                type: string;
                knownValues: string[];
                maxLength: number;
                maxGraphemes: number;
            };
            mutedWord: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    value: {
                        type: string;
                        description: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                    targets: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    actorTarget: {
                        type: string;
                        description: string;
                        knownValues: string[];
                        default: string;
                    };
                    expiresAt: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
            mutedWordsPref: {
                type: string;
                required: string[];
                properties: {
                    items: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                        description: string;
                    };
                };
            };
            hiddenPostsPref: {
                type: string;
                required: string[];
                properties: {
                    items: {
                        type: string;
                        items: {
                            type: string;
                            format: string;
                        };
                        description: string;
                    };
                };
            };
            labelersPref: {
                type: string;
                required: string[];
                properties: {
                    labelers: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            labelerPrefItem: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
            bskyAppStatePref: {
                description: string;
                type: string;
                properties: {
                    activeProgressGuide: {
                        type: string;
                        ref: string;
                    };
                    queuedNudges: {
                        description: string;
                        type: string;
                        maxLength: number;
                        items: {
                            type: string;
                            maxLength: number;
                        };
                    };
                    nuxs: {
                        description: string;
                        type: string;
                        maxLength: number;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            bskyAppProgressGuide: {
                description: string;
                type: string;
                required: string[];
                properties: {
                    guide: {
                        type: string;
                        maxLength: number;
                    };
                };
            };
            nux: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    completed: {
                        type: string;
                        default: boolean;
                    };
                    data: {
                        description: string;
                        type: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                    expiresAt: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
        };
    };
    AppBskyActorGetPreferences: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {};
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            preferences: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorGetProfile: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    AppBskyActorGetProfiles: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actors: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                            maxLength: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            profiles: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorGetSuggestions: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            actors: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorProfile: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    properties: {
                        displayName: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        description: {
                            type: string;
                            description: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        avatar: {
                            type: string;
                            description: string;
                            accept: string[];
                            maxSize: number;
                        };
                        banner: {
                            type: string;
                            description: string;
                            accept: string[];
                            maxSize: number;
                        };
                        labels: {
                            type: string;
                            description: string;
                            refs: string[];
                        };
                        joinedViaStarterPack: {
                            type: string;
                            ref: string;
                        };
                        pinnedPost: {
                            type: string;
                            ref: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyActorPutPreferences: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            preferences: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorSearchActors: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        term: {
                            type: string;
                            description: string;
                        };
                        q: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            actors: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyActorSearchActorsTypeahead: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        term: {
                            type: string;
                            description: string;
                        };
                        q: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            actors: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyEmbedDefs: {
        lexicon: number;
        id: string;
        defs: {
            aspectRatio: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    width: {
                        type: string;
                        minimum: number;
                    };
                    height: {
                        type: string;
                        minimum: number;
                    };
                };
            };
        };
    };
    AppBskyEmbedExternal: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    external: {
                        type: string;
                        ref: string;
                    };
                };
            };
            external: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    thumb: {
                        type: string;
                        accept: string[];
                        maxSize: number;
                    };
                };
            };
            view: {
                type: string;
                required: string[];
                properties: {
                    external: {
                        type: string;
                        ref: string;
                    };
                };
            };
            viewExternal: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    thumb: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    AppBskyEmbedImages: {
        lexicon: number;
        id: string;
        description: string;
        defs: {
            main: {
                type: string;
                required: string[];
                properties: {
                    images: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                        maxLength: number;
                    };
                };
            };
            image: {
                type: string;
                required: string[];
                properties: {
                    image: {
                        type: string;
                        accept: string[];
                        maxSize: number;
                    };
                    alt: {
                        type: string;
                        description: string;
                    };
                    aspectRatio: {
                        type: string;
                        ref: string;
                    };
                };
            };
            view: {
                type: string;
                required: string[];
                properties: {
                    images: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                        maxLength: number;
                    };
                };
            };
            viewImage: {
                type: string;
                required: string[];
                properties: {
                    thumb: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    fullsize: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    alt: {
                        type: string;
                        description: string;
                    };
                    aspectRatio: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    AppBskyEmbedRecord: {
        lexicon: number;
        id: string;
        description: string;
        defs: {
            main: {
                type: string;
                required: string[];
                properties: {
                    record: {
                        type: string;
                        ref: string;
                    };
                };
            };
            view: {
                type: string;
                required: string[];
                properties: {
                    record: {
                        type: string;
                        refs: string[];
                    };
                };
            };
            viewRecord: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    author: {
                        type: string;
                        ref: string;
                    };
                    value: {
                        type: string;
                        description: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    replyCount: {
                        type: string;
                    };
                    repostCount: {
                        type: string;
                    };
                    likeCount: {
                        type: string;
                    };
                    quoteCount: {
                        type: string;
                    };
                    embeds: {
                        type: string;
                        items: {
                            type: string;
                            refs: string[];
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            viewNotFound: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    notFound: {
                        type: string;
                        const: boolean;
                    };
                };
            };
            viewBlocked: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    blocked: {
                        type: string;
                        const: boolean;
                    };
                    author: {
                        type: string;
                        ref: string;
                    };
                };
            };
            viewDetached: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    detached: {
                        type: string;
                        const: boolean;
                    };
                };
            };
        };
    };
    AppBskyEmbedRecordWithMedia: {
        lexicon: number;
        id: string;
        description: string;
        defs: {
            main: {
                type: string;
                required: string[];
                properties: {
                    record: {
                        type: string;
                        ref: string;
                    };
                    media: {
                        type: string;
                        refs: string[];
                    };
                };
            };
            view: {
                type: string;
                required: string[];
                properties: {
                    record: {
                        type: string;
                        ref: string;
                    };
                    media: {
                        type: string;
                        refs: string[];
                    };
                };
            };
        };
    };
    AppBskyEmbedVideo: {
        lexicon: number;
        id: string;
        description: string;
        defs: {
            main: {
                type: string;
                required: string[];
                properties: {
                    video: {
                        type: string;
                        accept: string[];
                        maxSize: number;
                    };
                    captions: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                        maxLength: number;
                    };
                    alt: {
                        type: string;
                        description: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    aspectRatio: {
                        type: string;
                        ref: string;
                    };
                };
            };
            caption: {
                type: string;
                required: string[];
                properties: {
                    lang: {
                        type: string;
                        format: string;
                    };
                    file: {
                        type: string;
                        accept: string[];
                        maxSize: number;
                    };
                };
            };
            view: {
                type: string;
                required: string[];
                properties: {
                    cid: {
                        type: string;
                        format: string;
                    };
                    playlist: {
                        type: string;
                        format: string;
                    };
                    thumbnail: {
                        type: string;
                        format: string;
                    };
                    alt: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    aspectRatio: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    AppBskyFeedDefs: {
        lexicon: number;
        id: string;
        defs: {
            postView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    author: {
                        type: string;
                        ref: string;
                    };
                    record: {
                        type: string;
                    };
                    embed: {
                        type: string;
                        refs: string[];
                    };
                    replyCount: {
                        type: string;
                    };
                    repostCount: {
                        type: string;
                    };
                    likeCount: {
                        type: string;
                    };
                    quoteCount: {
                        type: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    threadgate: {
                        type: string;
                        ref: string;
                    };
                };
            };
            viewerState: {
                type: string;
                description: string;
                properties: {
                    repost: {
                        type: string;
                        format: string;
                    };
                    like: {
                        type: string;
                        format: string;
                    };
                    threadMuted: {
                        type: string;
                    };
                    replyDisabled: {
                        type: string;
                    };
                    embeddingDisabled: {
                        type: string;
                    };
                    pinned: {
                        type: string;
                    };
                };
            };
            feedViewPost: {
                type: string;
                required: string[];
                properties: {
                    post: {
                        type: string;
                        ref: string;
                    };
                    reply: {
                        type: string;
                        ref: string;
                    };
                    reason: {
                        type: string;
                        refs: string[];
                    };
                    feedContext: {
                        type: string;
                        description: string;
                        maxLength: number;
                    };
                };
            };
            replyRef: {
                type: string;
                required: string[];
                properties: {
                    root: {
                        type: string;
                        refs: string[];
                    };
                    parent: {
                        type: string;
                        refs: string[];
                    };
                    grandparentAuthor: {
                        type: string;
                        ref: string;
                        description: string;
                    };
                };
            };
            reasonRepost: {
                type: string;
                required: string[];
                properties: {
                    by: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            reasonPin: {
                type: string;
                properties: {};
            };
            threadViewPost: {
                type: string;
                required: string[];
                properties: {
                    post: {
                        type: string;
                        ref: string;
                    };
                    parent: {
                        type: string;
                        refs: string[];
                    };
                    replies: {
                        type: string;
                        items: {
                            type: string;
                            refs: string[];
                        };
                    };
                };
            };
            notFoundPost: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    notFound: {
                        type: string;
                        const: boolean;
                    };
                };
            };
            blockedPost: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    blocked: {
                        type: string;
                        const: boolean;
                    };
                    author: {
                        type: string;
                        ref: string;
                    };
                };
            };
            blockedAuthor: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                };
            };
            generatorView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    displayName: {
                        type: string;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    descriptionFacets: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    likeCount: {
                        type: string;
                        minimum: number;
                    };
                    acceptsInteractions: {
                        type: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            generatorViewerState: {
                type: string;
                properties: {
                    like: {
                        type: string;
                        format: string;
                    };
                };
            };
            skeletonFeedPost: {
                type: string;
                required: string[];
                properties: {
                    post: {
                        type: string;
                        format: string;
                    };
                    reason: {
                        type: string;
                        refs: string[];
                    };
                    feedContext: {
                        type: string;
                        description: string;
                        maxLength: number;
                    };
                };
            };
            skeletonReasonRepost: {
                type: string;
                required: string[];
                properties: {
                    repost: {
                        type: string;
                        format: string;
                    };
                };
            };
            skeletonReasonPin: {
                type: string;
                properties: {};
            };
            threadgateView: {
                type: string;
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    record: {
                        type: string;
                    };
                    lists: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            interaction: {
                type: string;
                properties: {
                    item: {
                        type: string;
                        format: string;
                    };
                    event: {
                        type: string;
                        knownValues: string[];
                    };
                    feedContext: {
                        type: string;
                        description: string;
                        maxLength: number;
                    };
                };
            };
            requestLess: {
                type: string;
                description: string;
            };
            requestMore: {
                type: string;
                description: string;
            };
            clickthroughItem: {
                type: string;
                description: string;
            };
            clickthroughAuthor: {
                type: string;
                description: string;
            };
            clickthroughReposter: {
                type: string;
                description: string;
            };
            clickthroughEmbed: {
                type: string;
                description: string;
            };
            interactionSeen: {
                type: string;
                description: string;
            };
            interactionLike: {
                type: string;
                description: string;
            };
            interactionRepost: {
                type: string;
                description: string;
            };
            interactionReply: {
                type: string;
                description: string;
            };
            interactionQuote: {
                type: string;
                description: string;
            };
            interactionShare: {
                type: string;
                description: string;
            };
        };
    };
    AppBskyFeedDescribeFeedGenerator: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            feeds: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                            links: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
            feed: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                };
            };
            links: {
                type: string;
                properties: {
                    privacyPolicy: {
                        type: string;
                    };
                    termsOfService: {
                        type: string;
                    };
                };
            };
        };
    };
    AppBskyFeedGenerator: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                        };
                        displayName: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        description: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        descriptionFacets: {
                            type: string;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        avatar: {
                            type: string;
                            accept: string[];
                            maxSize: number;
                        };
                        acceptsInteractions: {
                            type: string;
                            description: string;
                        };
                        labels: {
                            type: string;
                            description: string;
                            refs: string[];
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetActorFeeds: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feeds: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetActorLikes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetAuthorFeed: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                        filter: {
                            type: string;
                            description: string;
                            knownValues: string[];
                            default: string;
                        };
                        includePins: {
                            type: string;
                            default: boolean;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetFeed: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        feed: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetFeedGenerator: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        feed: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            view: {
                                type: string;
                                ref: string;
                            };
                            isOnline: {
                                type: string;
                                description: string;
                            };
                            isValid: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetFeedGenerators: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        feeds: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            feeds: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetFeedSkeleton: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        feed: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetLikes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uri: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            cursor: {
                                type: string;
                            };
                            likes: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            like: {
                type: string;
                required: string[];
                properties: {
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    actor: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    AppBskyFeedGetListFeed: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        list: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetPostThread: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uri: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        depth: {
                            type: string;
                            description: string;
                            default: number;
                            minimum: number;
                            maximum: number;
                        };
                        parentHeight: {
                            type: string;
                            description: string;
                            default: number;
                            minimum: number;
                            maximum: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            thread: {
                                type: string;
                                refs: string[];
                            };
                            threadgate: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedGetPosts: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uris: {
                            type: string;
                            description: string;
                            items: {
                                type: string;
                                format: string;
                            };
                            maxLength: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            posts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetQuotes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uri: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            cursor: {
                                type: string;
                            };
                            posts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetRepostedBy: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uri: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            uri: {
                                type: string;
                                format: string;
                            };
                            cid: {
                                type: string;
                                format: string;
                            };
                            cursor: {
                                type: string;
                            };
                            repostedBy: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetSuggestedFeeds: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feeds: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedGetTimeline: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        algorithm: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feed: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedLike: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            ref: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedPost: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        text: {
                            type: string;
                            maxLength: number;
                            maxGraphemes: number;
                            description: string;
                        };
                        entities: {
                            type: string;
                            description: string;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        facets: {
                            type: string;
                            description: string;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        reply: {
                            type: string;
                            ref: string;
                        };
                        embed: {
                            type: string;
                            refs: string[];
                        };
                        langs: {
                            type: string;
                            description: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        labels: {
                            type: string;
                            description: string;
                            refs: string[];
                        };
                        tags: {
                            type: string;
                            description: string;
                            maxLength: number;
                            items: {
                                type: string;
                                maxLength: number;
                                maxGraphemes: number;
                            };
                        };
                        createdAt: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
            };
            replyRef: {
                type: string;
                required: string[];
                properties: {
                    root: {
                        type: string;
                        ref: string;
                    };
                    parent: {
                        type: string;
                        ref: string;
                    };
                };
            };
            entity: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    index: {
                        type: string;
                        ref: string;
                    };
                    type: {
                        type: string;
                        description: string;
                    };
                    value: {
                        type: string;
                    };
                };
            };
            textSlice: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    start: {
                        type: string;
                        minimum: number;
                    };
                    end: {
                        type: string;
                        minimum: number;
                    };
                };
            };
        };
    };
    AppBskyFeedPostgate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                key: string;
                description: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        createdAt: {
                            type: string;
                            format: string;
                        };
                        post: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        detachedEmbeddingUris: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                            description: string;
                        };
                        embeddingRules: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                refs: string[];
                            };
                        };
                    };
                };
            };
            disableRule: {
                type: string;
                description: string;
                properties: {};
            };
        };
    };
    AppBskyFeedRepost: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                description: string;
                type: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            ref: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyFeedSearchPosts: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        q: {
                            type: string;
                            description: string;
                        };
                        sort: {
                            type: string;
                            knownValues: string[];
                            default: string;
                            description: string;
                        };
                        since: {
                            type: string;
                            description: string;
                        };
                        until: {
                            type: string;
                            description: string;
                        };
                        mentions: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        author: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        lang: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        domain: {
                            type: string;
                            description: string;
                        };
                        url: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        tag: {
                            type: string;
                            items: {
                                type: string;
                                maxLength: number;
                                maxGraphemes: number;
                            };
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            hitsTotal: {
                                type: string;
                                description: string;
                            };
                            posts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyFeedSendInteractions: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            interactions: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {};
                    };
                };
            };
        };
    };
    AppBskyFeedThreadgate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                key: string;
                description: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        post: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        allow: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                refs: string[];
                            };
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                        hiddenReplies: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                            description: string;
                        };
                    };
                };
            };
            mentionRule: {
                type: string;
                description: string;
                properties: {};
            };
            followingRule: {
                type: string;
                description: string;
                properties: {};
            };
            listRule: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    list: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    AppBskyGraphBlock: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphDefs: {
        lexicon: number;
        id: string;
        defs: {
            listViewBasic: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    name: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    purpose: {
                        type: string;
                        ref: string;
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    listItemCount: {
                        type: string;
                        minimum: number;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            listView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    name: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    purpose: {
                        type: string;
                        ref: string;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    descriptionFacets: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    listItemCount: {
                        type: string;
                        minimum: number;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            listItemView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    subject: {
                        type: string;
                        ref: string;
                    };
                };
            };
            starterPackView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    record: {
                        type: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    list: {
                        type: string;
                        ref: string;
                    };
                    listItemsSample: {
                        type: string;
                        maxLength: number;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    feeds: {
                        type: string;
                        maxLength: number;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    joinedWeekCount: {
                        type: string;
                        minimum: number;
                    };
                    joinedAllTimeCount: {
                        type: string;
                        minimum: number;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            starterPackViewBasic: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    record: {
                        type: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    listItemCount: {
                        type: string;
                        minimum: number;
                    };
                    joinedWeekCount: {
                        type: string;
                        minimum: number;
                    };
                    joinedAllTimeCount: {
                        type: string;
                        minimum: number;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            listPurpose: {
                type: string;
                knownValues: string[];
            };
            modlist: {
                type: string;
                description: string;
            };
            curatelist: {
                type: string;
                description: string;
            };
            referencelist: {
                type: string;
                description: string;
            };
            listViewerState: {
                type: string;
                properties: {
                    muted: {
                        type: string;
                    };
                    blocked: {
                        type: string;
                        format: string;
                    };
                };
            };
            notFoundActor: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    actor: {
                        type: string;
                        format: string;
                    };
                    notFound: {
                        type: string;
                        const: boolean;
                    };
                };
            };
            relationship: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    following: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    followedBy: {
                        type: string;
                        format: string;
                        description: string;
                    };
                };
            };
        };
    };
    AppBskyGraphFollow: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            format: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetActorStarterPacks: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            starterPacks: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetBlocks: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            blocks: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetFollowers: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                ref: string;
                            };
                            cursor: {
                                type: string;
                            };
                            followers: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetFollows: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                ref: string;
                            };
                            cursor: {
                                type: string;
                            };
                            follows: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetKnownFollowers: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            subject: {
                                type: string;
                                ref: string;
                            };
                            cursor: {
                                type: string;
                            };
                            followers: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetList: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        list: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            list: {
                                type: string;
                                ref: string;
                            };
                            items: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetListBlocks: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            lists: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetListMutes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            lists: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetLists: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            lists: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetMutes: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            mutes: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetRelationships: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        others: {
                            type: string;
                            description: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            actor: {
                                type: string;
                                format: string;
                            };
                            relationships: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    AppBskyGraphGetStarterPack: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        starterPack: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            starterPack: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetStarterPacks: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uris: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                            maxLength: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            starterPacks: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphGetSuggestedFollowsByActor: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            suggestions: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                            isFallback: {
                                type: string;
                                description: string;
                                default: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphList: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        purpose: {
                            type: string;
                            description: string;
                            ref: string;
                        };
                        name: {
                            type: string;
                            maxLength: number;
                            minLength: number;
                            description: string;
                        };
                        description: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        descriptionFacets: {
                            type: string;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        avatar: {
                            type: string;
                            accept: string[];
                            maxSize: number;
                        };
                        labels: {
                            type: string;
                            refs: string[];
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphListblock: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphListitem: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        subject: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        list: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphMuteActor: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            actor: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphMuteActorList: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            list: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphMuteThread: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            root: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphStarterpack: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                            minLength: number;
                            description: string;
                        };
                        description: {
                            type: string;
                            maxGraphemes: number;
                            maxLength: number;
                        };
                        descriptionFacets: {
                            type: string;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        list: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        feeds: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                ref: string;
                            };
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
            feedItem: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    AppBskyGraphUnmuteActor: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            actor: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphUnmuteActorList: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            list: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyGraphUnmuteThread: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            root: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyLabelerDefs: {
        lexicon: number;
        id: string;
        defs: {
            labelerView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    likeCount: {
                        type: string;
                        minimum: number;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            labelerViewDetailed: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    creator: {
                        type: string;
                        ref: string;
                    };
                    policies: {
                        type: string;
                        ref: string;
                    };
                    likeCount: {
                        type: string;
                        minimum: number;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            labelerViewerState: {
                type: string;
                properties: {
                    like: {
                        type: string;
                        format: string;
                    };
                };
            };
            labelerPolicies: {
                type: string;
                required: string[];
                properties: {
                    labelValues: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    labelValueDefinitions: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyLabelerGetServices: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        dids: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        detailed: {
                            type: string;
                            default: boolean;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            views: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyLabelerService: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        policies: {
                            type: string;
                            ref: string;
                        };
                        labels: {
                            type: string;
                            refs: string[];
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyNotificationGetUnreadCount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        priority: {
                            type: string;
                        };
                        seenAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            count: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyNotificationListNotifications: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        priority: {
                            type: string;
                        };
                        cursor: {
                            type: string;
                        };
                        seenAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            notifications: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                            priority: {
                                type: string;
                            };
                            seenAt: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
            notification: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    author: {
                        type: string;
                        ref: string;
                    };
                    reason: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                    reasonSubject: {
                        type: string;
                        format: string;
                    };
                    record: {
                        type: string;
                    };
                    isRead: {
                        type: string;
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
        };
    };
    AppBskyNotificationPutPreferences: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            priority: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyNotificationRegisterPush: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            serviceDid: {
                                type: string;
                                format: string;
                            };
                            token: {
                                type: string;
                            };
                            platform: {
                                type: string;
                                knownValues: string[];
                            };
                            appId: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyNotificationUpdateSeen: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            seenAt: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyRichtextFacet: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    index: {
                        type: string;
                        ref: string;
                    };
                    features: {
                        type: string;
                        items: {
                            type: string;
                            refs: string[];
                        };
                    };
                };
            };
            mention: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
            link: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                };
            };
            tag: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    tag: {
                        type: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                };
            };
            byteSlice: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    byteStart: {
                        type: string;
                        minimum: number;
                    };
                    byteEnd: {
                        type: string;
                        minimum: number;
                    };
                };
            };
        };
    };
    AppBskyUnspeccedDefs: {
        lexicon: number;
        id: string;
        defs: {
            skeletonSearchPost: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                };
            };
            skeletonSearchActor: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    AppBskyUnspeccedGetConfig: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: never[];
                        properties: {
                            checkEmailConfirmed: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyUnspeccedGetPopularFeedGenerators: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                        query: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            feeds: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyUnspeccedGetSuggestionsSkeleton: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        viewer: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                        relativeToDid: {
                            type: string;
                            format: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            actors: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                            relativeToDid: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyUnspeccedGetTaggedSuggestions: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {};
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            suggestions: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            suggestion: {
                type: string;
                required: string[];
                properties: {
                    tag: {
                        type: string;
                    };
                    subjectType: {
                        type: string;
                        knownValues: string[];
                    };
                    subject: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    AppBskyUnspeccedSearchActorsSkeleton: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        q: {
                            type: string;
                            description: string;
                        };
                        viewer: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        typeahead: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            hitsTotal: {
                                type: string;
                                description: string;
                            };
                            actors: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyUnspeccedSearchPostsSkeleton: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        q: {
                            type: string;
                            description: string;
                        };
                        sort: {
                            type: string;
                            knownValues: string[];
                            default: string;
                            description: string;
                        };
                        since: {
                            type: string;
                            description: string;
                        };
                        until: {
                            type: string;
                            description: string;
                        };
                        mentions: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        author: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        lang: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        domain: {
                            type: string;
                            description: string;
                        };
                        url: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        tag: {
                            type: string;
                            items: {
                                type: string;
                                maxLength: number;
                                maxGraphemes: number;
                            };
                            description: string;
                        };
                        viewer: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            hitsTotal: {
                                type: string;
                                description: string;
                            };
                            posts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    AppBskyVideoDefs: {
        lexicon: number;
        id: string;
        defs: {
            jobStatus: {
                type: string;
                required: string[];
                properties: {
                    jobId: {
                        type: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    state: {
                        type: string;
                        description: string;
                        knownValues: string[];
                    };
                    progress: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        description: string;
                    };
                    blob: {
                        type: string;
                    };
                    error: {
                        type: string;
                    };
                    message: {
                        type: string;
                    };
                };
            };
        };
    };
    AppBskyVideoGetJobStatus: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        jobId: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            jobStatus: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyVideoGetUploadLimits: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            canUpload: {
                                type: string;
                            };
                            remainingDailyVideos: {
                                type: string;
                            };
                            remainingDailyBytes: {
                                type: string;
                            };
                            message: {
                                type: string;
                            };
                            error: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    AppBskyVideoUploadVideo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            jobStatus: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyActorDeclaration: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                key: string;
                record: {
                    type: string;
                    required: string[];
                    properties: {
                        allowIncoming: {
                            type: string;
                            knownValues: string[];
                        };
                    };
                };
            };
        };
    };
    ChatBskyActorDefs: {
        lexicon: number;
        id: string;
        defs: {
            profileViewBasic: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    displayName: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    avatar: {
                        type: string;
                        format: string;
                    };
                    associated: {
                        type: string;
                        ref: string;
                    };
                    viewer: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    chatDisabled: {
                        type: string;
                        description: string;
                    };
                };
            };
        };
    };
    ChatBskyActorDeleteAccount: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {};
                    };
                };
            };
        };
    };
    ChatBskyActorExportAccountData: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                output: {
                    encoding: string;
                };
            };
        };
    };
    ChatBskyConvoDefs: {
        lexicon: number;
        id: string;
        defs: {
            messageRef: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    convoId: {
                        type: string;
                    };
                    messageId: {
                        type: string;
                    };
                };
            };
            messageInput: {
                type: string;
                required: string[];
                properties: {
                    text: {
                        type: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                    facets: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    embed: {
                        type: string;
                        refs: string[];
                    };
                };
            };
            messageView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    rev: {
                        type: string;
                    };
                    text: {
                        type: string;
                        maxLength: number;
                        maxGraphemes: number;
                    };
                    facets: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    embed: {
                        type: string;
                        refs: string[];
                    };
                    sender: {
                        type: string;
                        ref: string;
                    };
                    sentAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            deletedMessageView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    rev: {
                        type: string;
                    };
                    sender: {
                        type: string;
                        ref: string;
                    };
                    sentAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            messageViewSender: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
            convoView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    rev: {
                        type: string;
                    };
                    members: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    lastMessage: {
                        type: string;
                        refs: string[];
                    };
                    muted: {
                        type: string;
                    };
                    opened: {
                        type: string;
                    };
                    unreadCount: {
                        type: string;
                    };
                };
            };
            logBeginConvo: {
                type: string;
                required: string[];
                properties: {
                    rev: {
                        type: string;
                    };
                    convoId: {
                        type: string;
                    };
                };
            };
            logLeaveConvo: {
                type: string;
                required: string[];
                properties: {
                    rev: {
                        type: string;
                    };
                    convoId: {
                        type: string;
                    };
                };
            };
            logCreateMessage: {
                type: string;
                required: string[];
                properties: {
                    rev: {
                        type: string;
                    };
                    convoId: {
                        type: string;
                    };
                    message: {
                        type: string;
                        refs: string[];
                    };
                };
            };
            logDeleteMessage: {
                type: string;
                required: string[];
                properties: {
                    rev: {
                        type: string;
                    };
                    convoId: {
                        type: string;
                    };
                    message: {
                        type: string;
                        refs: string[];
                    };
                };
            };
        };
    };
    ChatBskyConvoDeleteMessageForSelf: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                            messageId: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ChatBskyConvoGetConvo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        convoId: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convo: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoGetConvoForMembers: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        members: {
                            type: string;
                            minLength: number;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convo: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoGetLog: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: never[];
                    properties: {
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            logs: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoGetMessages: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        convoId: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            messages: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoLeaveConvo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                            rev: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoListConvos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            convos: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoMuteConvo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convo: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoSendMessage: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                            message: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ChatBskyConvoSendMessageBatch: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            items: {
                                type: string;
                                maxLength: number;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            items: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            batchItem: {
                type: string;
                required: string[];
                properties: {
                    convoId: {
                        type: string;
                    };
                    message: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ChatBskyConvoUnmuteConvo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convo: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyConvoUpdateRead: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convoId: {
                                type: string;
                            };
                            messageId: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            convo: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyModerationGetActorMetadata: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        actor: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            day: {
                                type: string;
                                ref: string;
                            };
                            month: {
                                type: string;
                                ref: string;
                            };
                            all: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
            metadata: {
                type: string;
                required: string[];
                properties: {
                    messagesSent: {
                        type: string;
                    };
                    messagesReceived: {
                        type: string;
                    };
                    convos: {
                        type: string;
                    };
                    convosStarted: {
                        type: string;
                    };
                };
            };
        };
    };
    ChatBskyModerationGetMessageContext: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        convoId: {
                            type: string;
                            description: string;
                        };
                        messageId: {
                            type: string;
                        };
                        before: {
                            type: string;
                            default: number;
                        };
                        after: {
                            type: string;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            messages: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ChatBskyModerationUpdateActorAccess: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            actor: {
                                type: string;
                                format: string;
                            };
                            allowAccess: {
                                type: string;
                            };
                            ref: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneCommunicationCreateTemplate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                                description: string;
                            };
                            contentMarkdown: {
                                type: string;
                                description: string;
                            };
                            subject: {
                                type: string;
                                description: string;
                            };
                            lang: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            createdBy: {
                                type: string;
                                format: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ToolsOzoneCommunicationDefs: {
        lexicon: number;
        id: string;
        defs: {
            templateView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                    subject: {
                        type: string;
                        description: string;
                    };
                    contentMarkdown: {
                        type: string;
                        description: string;
                    };
                    disabled: {
                        type: string;
                    };
                    lang: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    lastUpdatedBy: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ToolsOzoneCommunicationDeleteTemplate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            id: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneCommunicationListTemplates: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            communicationTemplates: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneCommunicationUpdateTemplate: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            id: {
                                type: string;
                                description: string;
                            };
                            name: {
                                type: string;
                                description: string;
                            };
                            lang: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            contentMarkdown: {
                                type: string;
                                description: string;
                            };
                            subject: {
                                type: string;
                                description: string;
                            };
                            updatedBy: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            disabled: {
                                type: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ToolsOzoneModerationDefs: {
        lexicon: number;
        id: string;
        defs: {
            modEventView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    event: {
                        type: string;
                        refs: string[];
                    };
                    subject: {
                        type: string;
                        refs: string[];
                    };
                    subjectBlobCids: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    createdBy: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    creatorHandle: {
                        type: string;
                    };
                    subjectHandle: {
                        type: string;
                    };
                };
            };
            modEventViewDetail: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    event: {
                        type: string;
                        refs: string[];
                    };
                    subject: {
                        type: string;
                        refs: string[];
                    };
                    subjectBlobs: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    createdBy: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            subjectStatusView: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                    };
                    subject: {
                        type: string;
                        refs: string[];
                    };
                    hosting: {
                        type: string;
                        refs: string[];
                    };
                    subjectBlobCids: {
                        type: string;
                        items: {
                            type: string;
                            format: string;
                        };
                    };
                    subjectRepoHandle: {
                        type: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    reviewState: {
                        type: string;
                        ref: string;
                    };
                    comment: {
                        type: string;
                        description: string;
                    };
                    muteUntil: {
                        type: string;
                        format: string;
                    };
                    muteReportingUntil: {
                        type: string;
                        format: string;
                    };
                    lastReviewedBy: {
                        type: string;
                        format: string;
                    };
                    lastReviewedAt: {
                        type: string;
                        format: string;
                    };
                    lastReportedAt: {
                        type: string;
                        format: string;
                    };
                    lastAppealedAt: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    takendown: {
                        type: string;
                    };
                    appealed: {
                        type: string;
                        description: string;
                    };
                    suspendUntil: {
                        type: string;
                        format: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
            subjectReviewState: {
                type: string;
                knownValues: string[];
            };
            reviewOpen: {
                type: string;
                description: string;
            };
            reviewEscalated: {
                type: string;
                description: string;
            };
            reviewClosed: {
                type: string;
                description: string;
            };
            reviewNone: {
                type: string;
                description: string;
            };
            modEventTakedown: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                    };
                    durationInHours: {
                        type: string;
                        description: string;
                    };
                    acknowledgeAccountSubjects: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventReverseTakedown: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventResolveAppeal: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventComment: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    sticky: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventReport: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    isReporterMuted: {
                        type: string;
                        description: string;
                    };
                    reportType: {
                        type: string;
                        ref: string;
                    };
                };
            };
            modEventLabel: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    createLabelVals: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    negateLabelVals: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
            modEventAcknowledge: {
                type: string;
                properties: {
                    comment: {
                        type: string;
                    };
                };
            };
            modEventEscalate: {
                type: string;
                properties: {
                    comment: {
                        type: string;
                    };
                };
            };
            modEventMute: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    durationInHours: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventUnmute: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventMuteReporter: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                    };
                    durationInHours: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventUnmuteReporter: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventEmail: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    subjectLine: {
                        type: string;
                        description: string;
                    };
                    content: {
                        type: string;
                        description: string;
                    };
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            modEventDivert: {
                type: string;
                description: string;
                properties: {
                    comment: {
                        type: string;
                    };
                };
            };
            modEventTag: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    add: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    remove: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    comment: {
                        type: string;
                        description: string;
                    };
                };
            };
            accountEvent: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    active: {
                        type: string;
                        description: string;
                    };
                    status: {
                        type: string;
                        knownValues: string[];
                    };
                    timestamp: {
                        type: string;
                        format: string;
                    };
                };
            };
            identityEvent: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    pdsHost: {
                        type: string;
                        format: string;
                    };
                    tombstone: {
                        type: string;
                    };
                    timestamp: {
                        type: string;
                        format: string;
                    };
                };
            };
            recordEvent: {
                type: string;
                description: string;
                required: string[];
                properties: {
                    comment: {
                        type: string;
                    };
                    op: {
                        type: string;
                        knownValues: string[];
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    timestamp: {
                        type: string;
                        format: string;
                    };
                };
            };
            repoView: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    email: {
                        type: string;
                    };
                    relatedRecords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    moderation: {
                        type: string;
                        ref: string;
                    };
                    invitedBy: {
                        type: string;
                        ref: string;
                    };
                    invitesDisabled: {
                        type: string;
                    };
                    inviteNote: {
                        type: string;
                    };
                    deactivatedAt: {
                        type: string;
                        format: string;
                    };
                    threatSignatures: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            repoViewDetail: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    handle: {
                        type: string;
                        format: string;
                    };
                    email: {
                        type: string;
                    };
                    relatedRecords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    moderation: {
                        type: string;
                        ref: string;
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    invitedBy: {
                        type: string;
                        ref: string;
                    };
                    invites: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    invitesDisabled: {
                        type: string;
                    };
                    inviteNote: {
                        type: string;
                    };
                    emailConfirmedAt: {
                        type: string;
                        format: string;
                    };
                    deactivatedAt: {
                        type: string;
                        format: string;
                    };
                    threatSignatures: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
            repoViewNotFound: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                };
            };
            recordView: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    value: {
                        type: string;
                    };
                    blobCids: {
                        type: string;
                        items: {
                            type: string;
                            format: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    moderation: {
                        type: string;
                        ref: string;
                    };
                    repo: {
                        type: string;
                        ref: string;
                    };
                };
            };
            recordViewDetail: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                    cid: {
                        type: string;
                        format: string;
                    };
                    value: {
                        type: string;
                    };
                    blobs: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    labels: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                    indexedAt: {
                        type: string;
                        format: string;
                    };
                    moderation: {
                        type: string;
                        ref: string;
                    };
                    repo: {
                        type: string;
                        ref: string;
                    };
                };
            };
            recordViewNotFound: {
                type: string;
                required: string[];
                properties: {
                    uri: {
                        type: string;
                        format: string;
                    };
                };
            };
            moderation: {
                type: string;
                properties: {
                    subjectStatus: {
                        type: string;
                        ref: string;
                    };
                };
            };
            moderationDetail: {
                type: string;
                properties: {
                    subjectStatus: {
                        type: string;
                        ref: string;
                    };
                };
            };
            blobView: {
                type: string;
                required: string[];
                properties: {
                    cid: {
                        type: string;
                        format: string;
                    };
                    mimeType: {
                        type: string;
                    };
                    size: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    details: {
                        type: string;
                        refs: string[];
                    };
                    moderation: {
                        type: string;
                        ref: string;
                    };
                };
            };
            imageDetails: {
                type: string;
                required: string[];
                properties: {
                    width: {
                        type: string;
                    };
                    height: {
                        type: string;
                    };
                };
            };
            videoDetails: {
                type: string;
                required: string[];
                properties: {
                    width: {
                        type: string;
                    };
                    height: {
                        type: string;
                    };
                    length: {
                        type: string;
                    };
                };
            };
            accountHosting: {
                type: string;
                required: string[];
                properties: {
                    status: {
                        type: string;
                        knownValues: string[];
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                    deactivatedAt: {
                        type: string;
                        format: string;
                    };
                    reactivatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            recordHosting: {
                type: string;
                required: string[];
                properties: {
                    status: {
                        type: string;
                        knownValues: string[];
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    deletedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ToolsOzoneModerationEmitEvent: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            event: {
                                type: string;
                                refs: string[];
                            };
                            subject: {
                                type: string;
                                refs: string[];
                            };
                            subjectBlobCids: {
                                type: string;
                                items: {
                                    type: string;
                                    format: string;
                                };
                            };
                            createdBy: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ToolsOzoneModerationGetEvent: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        id: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ToolsOzoneModerationGetRecord: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uri: {
                            type: string;
                            format: string;
                        };
                        cid: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ToolsOzoneModerationGetRecords: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        uris: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            records: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneModerationGetRepo: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                }[];
            };
        };
    };
    ToolsOzoneModerationGetRepos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        dids: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            repos: {
                                type: string;
                                items: {
                                    type: string;
                                    refs: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneModerationQueryEvents: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        types: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        createdBy: {
                            type: string;
                            format: string;
                        };
                        sortDirection: {
                            type: string;
                            default: string;
                            enum: string[];
                            description: string;
                        };
                        createdAfter: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        createdBefore: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        subject: {
                            type: string;
                            format: string;
                        };
                        collections: {
                            type: string;
                            maxLength: number;
                            description: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        subjectType: {
                            type: string;
                            description: string;
                            knownValues: string[];
                        };
                        includeAllUserRecords: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        hasComment: {
                            type: string;
                            description: string;
                        };
                        comment: {
                            type: string;
                            description: string;
                        };
                        addedLabels: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        removedLabels: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        addedTags: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        removedTags: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        reportTypes: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            events: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneModerationQueryStatuses: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        includeAllUserRecords: {
                            type: string;
                            description: string;
                        };
                        subject: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        comment: {
                            type: string;
                            description: string;
                        };
                        reportedAfter: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        reportedBefore: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        reviewedAfter: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        hostingDeletedAfter: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        hostingDeletedBefore: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        hostingUpdatedAfter: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        hostingUpdatedBefore: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        hostingStatuses: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        reviewedBefore: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        includeMuted: {
                            type: string;
                            description: string;
                        };
                        onlyMuted: {
                            type: string;
                            description: string;
                        };
                        reviewState: {
                            type: string;
                            description: string;
                        };
                        ignoreSubjects: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        lastReviewedBy: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        sortField: {
                            type: string;
                            default: string;
                            enum: string[];
                        };
                        sortDirection: {
                            type: string;
                            default: string;
                            enum: string[];
                        };
                        takendown: {
                            type: string;
                            description: string;
                        };
                        appealed: {
                            type: string;
                            description: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        tags: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        excludeTags: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        cursor: {
                            type: string;
                        };
                        collections: {
                            type: string;
                            maxLength: number;
                            description: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                        subjectType: {
                            type: string;
                            description: string;
                            knownValues: string[];
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            subjectStatuses: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneModerationSearchRepos: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        term: {
                            type: string;
                            description: string;
                        };
                        q: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            repos: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneServerGetConfig: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {
                            appview: {
                                type: string;
                                ref: string;
                            };
                            pds: {
                                type: string;
                                ref: string;
                            };
                            blobDivert: {
                                type: string;
                                ref: string;
                            };
                            chat: {
                                type: string;
                                ref: string;
                            };
                            viewer: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
            serviceConfig: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                };
            };
            viewerConfig: {
                type: string;
                properties: {
                    role: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
        };
    };
    ToolsOzoneSetAddValues: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                                description: string;
                            };
                            values: {
                                type: string;
                                minLength: number;
                                maxLength: number;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSetDefs: {
        lexicon: number;
        id: string;
        defs: {
            set: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                };
            };
            setView: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    setSize: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ToolsOzoneSetDeleteSet: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                                description: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {};
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ToolsOzoneSetDeleteValues: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                                description: string;
                            };
                            values: {
                                type: string;
                                minLength: number;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ToolsOzoneSetGetValues: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            set: {
                                type: string;
                                ref: string;
                            };
                            values: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            cursor: {
                                type: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ToolsOzoneSetQuerySets: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                        namePrefix: {
                            type: string;
                        };
                        sortBy: {
                            type: string;
                            enum: string[];
                            default: string;
                        };
                        sortDirection: {
                            type: string;
                            default: string;
                            enum: string[];
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            sets: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                            cursor: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSetUpsertSet: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
            };
        };
    };
    ToolsOzoneSettingDefs: {
        lexicon: number;
        id: string;
        defs: {
            option: {
                type: string;
                required: string[];
                properties: {
                    key: {
                        type: string;
                        format: string;
                    };
                    did: {
                        type: string;
                        format: string;
                    };
                    value: {
                        type: string;
                    };
                    description: {
                        type: string;
                        maxGraphemes: number;
                        maxLength: number;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    managerRole: {
                        type: string;
                        knownValues: string[];
                    };
                    scope: {
                        type: string;
                        knownValues: string[];
                    };
                    createdBy: {
                        type: string;
                        format: string;
                    };
                    lastUpdatedBy: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
    ToolsOzoneSettingListOptions: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                        scope: {
                            type: string;
                            knownValues: string[];
                            default: string;
                        };
                        prefix: {
                            type: string;
                            description: string;
                        };
                        keys: {
                            type: string;
                            maxLength: number;
                            items: {
                                type: string;
                                format: string;
                            };
                            description: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            options: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSettingRemoveOptions: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            keys: {
                                type: string;
                                minLength: number;
                                maxLength: number;
                                items: {
                                    type: string;
                                    format: string;
                                };
                            };
                            scope: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        properties: {};
                    };
                };
            };
        };
    };
    ToolsOzoneSettingUpsertOption: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            key: {
                                type: string;
                                format: string;
                            };
                            scope: {
                                type: string;
                                knownValues: string[];
                            };
                            value: {
                                type: string;
                            };
                            description: {
                                type: string;
                                maxLength: number;
                            };
                            managerRole: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            option: {
                                type: string;
                                ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSignatureDefs: {
        lexicon: number;
        id: string;
        defs: {
            sigDetail: {
                type: string;
                required: string[];
                properties: {
                    property: {
                        type: string;
                    };
                    value: {
                        type: string;
                    };
                };
            };
        };
    };
    ToolsOzoneSignatureFindCorrelation: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        dids: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            details: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSignatureFindRelatedAccounts: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        did: {
                            type: string;
                            format: string;
                        };
                        cursor: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            accounts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
            relatedAccount: {
                type: string;
                required: string[];
                properties: {
                    account: {
                        type: string;
                        ref: string;
                    };
                    similarities: {
                        type: string;
                        items: {
                            type: string;
                            ref: string;
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneSignatureSearchAccounts: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    required: string[];
                    properties: {
                        values: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        cursor: {
                            type: string;
                        };
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            accounts: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneTeamAddMember: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            role: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ToolsOzoneTeamDefs: {
        lexicon: number;
        id: string;
        defs: {
            member: {
                type: string;
                required: string[];
                properties: {
                    did: {
                        type: string;
                        format: string;
                    };
                    disabled: {
                        type: string;
                    };
                    profile: {
                        type: string;
                        ref: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                    lastUpdatedBy: {
                        type: string;
                    };
                    role: {
                        type: string;
                        knownValues: string[];
                    };
                };
            };
            roleAdmin: {
                type: string;
                description: string;
            };
            roleModerator: {
                type: string;
                description: string;
            };
            roleTriage: {
                type: string;
                description: string;
            };
        };
    };
    ToolsOzoneTeamDeleteMember: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                        };
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
    ToolsOzoneTeamListMembers: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                parameters: {
                    type: string;
                    properties: {
                        limit: {
                            type: string;
                            minimum: number;
                            maximum: number;
                            default: number;
                        };
                        cursor: {
                            type: string;
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            cursor: {
                                type: string;
                            };
                            members: {
                                type: string;
                                items: {
                                    type: string;
                                    ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    ToolsOzoneTeamUpdateMember: {
        lexicon: number;
        id: string;
        defs: {
            main: {
                type: string;
                description: string;
                input: {
                    encoding: string;
                    schema: {
                        type: string;
                        required: string[];
                        properties: {
                            did: {
                                type: string;
                                format: string;
                            };
                            disabled: {
                                type: string;
                            };
                            role: {
                                type: string;
                                knownValues: string[];
                            };
                        };
                    };
                };
                output: {
                    encoding: string;
                    schema: {
                        type: string;
                        ref: string;
                    };
                };
                errors: {
                    name: string;
                    description: string;
                }[];
            };
        };
    };
};
export declare const schemas: LexiconDoc[];
export declare const lexicons: Lexicons;
export declare const ids: {
    ComAtprotoAdminDefs: string;
    ComAtprotoAdminDeleteAccount: string;
    ComAtprotoAdminDisableAccountInvites: string;
    ComAtprotoAdminDisableInviteCodes: string;
    ComAtprotoAdminEnableAccountInvites: string;
    ComAtprotoAdminGetAccountInfo: string;
    ComAtprotoAdminGetAccountInfos: string;
    ComAtprotoAdminGetInviteCodes: string;
    ComAtprotoAdminGetSubjectStatus: string;
    ComAtprotoAdminSearchAccounts: string;
    ComAtprotoAdminSendEmail: string;
    ComAtprotoAdminUpdateAccountEmail: string;
    ComAtprotoAdminUpdateAccountHandle: string;
    ComAtprotoAdminUpdateAccountPassword: string;
    ComAtprotoAdminUpdateSubjectStatus: string;
    ComAtprotoIdentityGetRecommendedDidCredentials: string;
    ComAtprotoIdentityRequestPlcOperationSignature: string;
    ComAtprotoIdentityResolveHandle: string;
    ComAtprotoIdentitySignPlcOperation: string;
    ComAtprotoIdentitySubmitPlcOperation: string;
    ComAtprotoIdentityUpdateHandle: string;
    ComAtprotoLabelDefs: string;
    ComAtprotoLabelQueryLabels: string;
    ComAtprotoLabelSubscribeLabels: string;
    ComAtprotoModerationCreateReport: string;
    ComAtprotoModerationDefs: string;
    ComAtprotoRepoApplyWrites: string;
    ComAtprotoRepoCreateRecord: string;
    ComAtprotoRepoDefs: string;
    ComAtprotoRepoDeleteRecord: string;
    ComAtprotoRepoDescribeRepo: string;
    ComAtprotoRepoGetRecord: string;
    ComAtprotoRepoImportRepo: string;
    ComAtprotoRepoListMissingBlobs: string;
    ComAtprotoRepoListRecords: string;
    ComAtprotoRepoPutRecord: string;
    ComAtprotoRepoStrongRef: string;
    ComAtprotoRepoUploadBlob: string;
    ComAtprotoServerActivateAccount: string;
    ComAtprotoServerCheckAccountStatus: string;
    ComAtprotoServerConfirmEmail: string;
    ComAtprotoServerCreateAccount: string;
    ComAtprotoServerCreateAppPassword: string;
    ComAtprotoServerCreateInviteCode: string;
    ComAtprotoServerCreateInviteCodes: string;
    ComAtprotoServerCreateSession: string;
    ComAtprotoServerDeactivateAccount: string;
    ComAtprotoServerDefs: string;
    ComAtprotoServerDeleteAccount: string;
    ComAtprotoServerDeleteSession: string;
    ComAtprotoServerDescribeServer: string;
    ComAtprotoServerGetAccountInviteCodes: string;
    ComAtprotoServerGetServiceAuth: string;
    ComAtprotoServerGetSession: string;
    ComAtprotoServerListAppPasswords: string;
    ComAtprotoServerRefreshSession: string;
    ComAtprotoServerRequestAccountDelete: string;
    ComAtprotoServerRequestEmailConfirmation: string;
    ComAtprotoServerRequestEmailUpdate: string;
    ComAtprotoServerRequestPasswordReset: string;
    ComAtprotoServerReserveSigningKey: string;
    ComAtprotoServerResetPassword: string;
    ComAtprotoServerRevokeAppPassword: string;
    ComAtprotoServerUpdateEmail: string;
    ComAtprotoSyncGetBlob: string;
    ComAtprotoSyncGetBlocks: string;
    ComAtprotoSyncGetCheckout: string;
    ComAtprotoSyncGetHead: string;
    ComAtprotoSyncGetLatestCommit: string;
    ComAtprotoSyncGetRecord: string;
    ComAtprotoSyncGetRepo: string;
    ComAtprotoSyncGetRepoStatus: string;
    ComAtprotoSyncListBlobs: string;
    ComAtprotoSyncListRepos: string;
    ComAtprotoSyncNotifyOfUpdate: string;
    ComAtprotoSyncRequestCrawl: string;
    ComAtprotoSyncSubscribeRepos: string;
    ComAtprotoTempCheckSignupQueue: string;
    ComAtprotoTempFetchLabels: string;
    ComAtprotoTempRequestPhoneVerification: string;
    AppBskyActorDefs: string;
    AppBskyActorGetPreferences: string;
    AppBskyActorGetProfile: string;
    AppBskyActorGetProfiles: string;
    AppBskyActorGetSuggestions: string;
    AppBskyActorProfile: string;
    AppBskyActorPutPreferences: string;
    AppBskyActorSearchActors: string;
    AppBskyActorSearchActorsTypeahead: string;
    AppBskyEmbedDefs: string;
    AppBskyEmbedExternal: string;
    AppBskyEmbedImages: string;
    AppBskyEmbedRecord: string;
    AppBskyEmbedRecordWithMedia: string;
    AppBskyEmbedVideo: string;
    AppBskyFeedDefs: string;
    AppBskyFeedDescribeFeedGenerator: string;
    AppBskyFeedGenerator: string;
    AppBskyFeedGetActorFeeds: string;
    AppBskyFeedGetActorLikes: string;
    AppBskyFeedGetAuthorFeed: string;
    AppBskyFeedGetFeed: string;
    AppBskyFeedGetFeedGenerator: string;
    AppBskyFeedGetFeedGenerators: string;
    AppBskyFeedGetFeedSkeleton: string;
    AppBskyFeedGetLikes: string;
    AppBskyFeedGetListFeed: string;
    AppBskyFeedGetPostThread: string;
    AppBskyFeedGetPosts: string;
    AppBskyFeedGetQuotes: string;
    AppBskyFeedGetRepostedBy: string;
    AppBskyFeedGetSuggestedFeeds: string;
    AppBskyFeedGetTimeline: string;
    AppBskyFeedLike: string;
    AppBskyFeedPost: string;
    AppBskyFeedPostgate: string;
    AppBskyFeedRepost: string;
    AppBskyFeedSearchPosts: string;
    AppBskyFeedSendInteractions: string;
    AppBskyFeedThreadgate: string;
    AppBskyGraphBlock: string;
    AppBskyGraphDefs: string;
    AppBskyGraphFollow: string;
    AppBskyGraphGetActorStarterPacks: string;
    AppBskyGraphGetBlocks: string;
    AppBskyGraphGetFollowers: string;
    AppBskyGraphGetFollows: string;
    AppBskyGraphGetKnownFollowers: string;
    AppBskyGraphGetList: string;
    AppBskyGraphGetListBlocks: string;
    AppBskyGraphGetListMutes: string;
    AppBskyGraphGetLists: string;
    AppBskyGraphGetMutes: string;
    AppBskyGraphGetRelationships: string;
    AppBskyGraphGetStarterPack: string;
    AppBskyGraphGetStarterPacks: string;
    AppBskyGraphGetSuggestedFollowsByActor: string;
    AppBskyGraphList: string;
    AppBskyGraphListblock: string;
    AppBskyGraphListitem: string;
    AppBskyGraphMuteActor: string;
    AppBskyGraphMuteActorList: string;
    AppBskyGraphMuteThread: string;
    AppBskyGraphStarterpack: string;
    AppBskyGraphUnmuteActor: string;
    AppBskyGraphUnmuteActorList: string;
    AppBskyGraphUnmuteThread: string;
    AppBskyLabelerDefs: string;
    AppBskyLabelerGetServices: string;
    AppBskyLabelerService: string;
    AppBskyNotificationGetUnreadCount: string;
    AppBskyNotificationListNotifications: string;
    AppBskyNotificationPutPreferences: string;
    AppBskyNotificationRegisterPush: string;
    AppBskyNotificationUpdateSeen: string;
    AppBskyRichtextFacet: string;
    AppBskyUnspeccedDefs: string;
    AppBskyUnspeccedGetConfig: string;
    AppBskyUnspeccedGetPopularFeedGenerators: string;
    AppBskyUnspeccedGetSuggestionsSkeleton: string;
    AppBskyUnspeccedGetTaggedSuggestions: string;
    AppBskyUnspeccedSearchActorsSkeleton: string;
    AppBskyUnspeccedSearchPostsSkeleton: string;
    AppBskyVideoDefs: string;
    AppBskyVideoGetJobStatus: string;
    AppBskyVideoGetUploadLimits: string;
    AppBskyVideoUploadVideo: string;
    ChatBskyActorDeclaration: string;
    ChatBskyActorDefs: string;
    ChatBskyActorDeleteAccount: string;
    ChatBskyActorExportAccountData: string;
    ChatBskyConvoDefs: string;
    ChatBskyConvoDeleteMessageForSelf: string;
    ChatBskyConvoGetConvo: string;
    ChatBskyConvoGetConvoForMembers: string;
    ChatBskyConvoGetLog: string;
    ChatBskyConvoGetMessages: string;
    ChatBskyConvoLeaveConvo: string;
    ChatBskyConvoListConvos: string;
    ChatBskyConvoMuteConvo: string;
    ChatBskyConvoSendMessage: string;
    ChatBskyConvoSendMessageBatch: string;
    ChatBskyConvoUnmuteConvo: string;
    ChatBskyConvoUpdateRead: string;
    ChatBskyModerationGetActorMetadata: string;
    ChatBskyModerationGetMessageContext: string;
    ChatBskyModerationUpdateActorAccess: string;
    ToolsOzoneCommunicationCreateTemplate: string;
    ToolsOzoneCommunicationDefs: string;
    ToolsOzoneCommunicationDeleteTemplate: string;
    ToolsOzoneCommunicationListTemplates: string;
    ToolsOzoneCommunicationUpdateTemplate: string;
    ToolsOzoneModerationDefs: string;
    ToolsOzoneModerationEmitEvent: string;
    ToolsOzoneModerationGetEvent: string;
    ToolsOzoneModerationGetRecord: string;
    ToolsOzoneModerationGetRecords: string;
    ToolsOzoneModerationGetRepo: string;
    ToolsOzoneModerationGetRepos: string;
    ToolsOzoneModerationQueryEvents: string;
    ToolsOzoneModerationQueryStatuses: string;
    ToolsOzoneModerationSearchRepos: string;
    ToolsOzoneServerGetConfig: string;
    ToolsOzoneSetAddValues: string;
    ToolsOzoneSetDefs: string;
    ToolsOzoneSetDeleteSet: string;
    ToolsOzoneSetDeleteValues: string;
    ToolsOzoneSetGetValues: string;
    ToolsOzoneSetQuerySets: string;
    ToolsOzoneSetUpsertSet: string;
    ToolsOzoneSettingDefs: string;
    ToolsOzoneSettingListOptions: string;
    ToolsOzoneSettingRemoveOptions: string;
    ToolsOzoneSettingUpsertOption: string;
    ToolsOzoneSignatureDefs: string;
    ToolsOzoneSignatureFindCorrelation: string;
    ToolsOzoneSignatureFindRelatedAccounts: string;
    ToolsOzoneSignatureSearchAccounts: string;
    ToolsOzoneTeamAddMember: string;
    ToolsOzoneTeamDefs: string;
    ToolsOzoneTeamDeleteMember: string;
    ToolsOzoneTeamListMembers: string;
    ToolsOzoneTeamUpdateMember: string;
};
//# sourceMappingURL=lexicons.d.ts.map