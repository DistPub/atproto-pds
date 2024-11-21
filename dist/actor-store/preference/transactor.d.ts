import { PreferenceReader, AccountPreference } from './reader';
import { AuthScope } from '../../auth-verifier';
export declare class PreferenceTransactor extends PreferenceReader {
    putPreferences(values: AccountPreference[], namespace: string, scope: AuthScope): Promise<void>;
}
//# sourceMappingURL=transactor.d.ts.map