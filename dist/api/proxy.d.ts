import { Headers } from '@atproto/xrpc';
import { IncomingMessage } from 'node:http';
export declare const resultPassthru: <T>(result: {
    headers: Headers;
    data: T;
}) => {
    encoding: "application/json";
    body: T;
};
export declare function authPassthru(req: IncomingMessage, withEncoding?: false): {
    headers: {
        authorization: string;
    };
    encoding: undefined;
} | undefined;
export declare function authPassthru(req: IncomingMessage, withEncoding: true): {
    headers: {
        authorization: string;
    };
    encoding: 'application/json';
} | undefined;
//# sourceMappingURL=proxy.d.ts.map