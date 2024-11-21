import AppContext from '../context';
export declare const normalizeAndValidateHandle: (opts: {
    ctx: AppContext;
    handle: string;
    did?: string;
    allowReserved?: boolean;
}) => Promise<string>;
export declare const baseNormalizeAndValidate: (handle: string) => string;
export declare const isServiceDomain: (handle: string, availableUserDomains: string[]) => boolean;
export declare const ensureHandleServiceConstraints: (handle: string, availableUserDomains: string[], allowReserved?: boolean) => void;
//# sourceMappingURL=index.d.ts.map