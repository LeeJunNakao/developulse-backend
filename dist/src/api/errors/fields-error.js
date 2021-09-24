"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingFieldsError = void 0;
class MissingFieldsError extends Error {
    constructor(fields) {
        const errorMessage = `Missing required fields: ${fields}`;
        super(errorMessage);
        this.message = errorMessage;
        this.fields = fields;
    }
}
exports.MissingFieldsError = MissingFieldsError;
