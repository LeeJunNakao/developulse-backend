"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = exports.errorResponse = void 0;
const errorResponse = (message) => ({
    status: 400,
    body: { message },
});
exports.errorResponse = errorResponse;
const createResponse = (message) => ({
    status: 201,
    body: { message },
});
exports.createResponse = createResponse;
