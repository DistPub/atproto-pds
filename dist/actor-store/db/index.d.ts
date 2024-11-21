import { DatabaseSchema } from './schema';
import { Database, Migrator } from '../../db';
export * from './schema';
export type ActorDb = Database<DatabaseSchema>;
export declare const getDb: (location: string, disableWalAutoCheckpoint?: boolean) => ActorDb;
export declare const getMigrator: (db: Database<DatabaseSchema>) => Migrator<DatabaseSchema>;
//# sourceMappingURL=index.d.ts.map