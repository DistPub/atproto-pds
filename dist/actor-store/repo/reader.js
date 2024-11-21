"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoReader = void 0;
const sql_repo_reader_1 = require("./sql-repo-reader");
const reader_1 = require("../blob/reader");
const reader_2 = require("../record/reader");
class RepoReader {
    constructor(db, blobstore) {
        Object.defineProperty(this, "db", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: db
        });
        Object.defineProperty(this, "blobstore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: blobstore
        });
        Object.defineProperty(this, "blob", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "record", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.blob = new reader_1.BlobReader(db, blobstore);
        this.record = new reader_2.RecordReader(db);
        this.storage = new sql_repo_reader_1.SqlRepoReader(db);
    }
}
exports.RepoReader = RepoReader;
//# sourceMappingURL=reader.js.map