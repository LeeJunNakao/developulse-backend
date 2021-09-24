"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notAuthorizedError = exports.missingFieldsError = exports.serverError = void 0;
const errors_1 = require("../errors");
const serverError = () => ({
    status: 500,
    body: new errors_1.ServerError(),
});
exports.serverError = serverError;
const missingFieldsError = (fields) => ({
    status: 400,
    body: { message: 'missing fields', details: new errors_1.MissingFieldsError(fields) },
});
exports.missingFieldsError = missingFieldsError;
const notAuthorizedError = () => ({
    status: 401,
    body: new errors_1.NotAuthorizedError(),
});
exports.notAuthorizedError = notAuthorizedError;
