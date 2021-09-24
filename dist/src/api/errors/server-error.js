"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = exports.ServerError = void 0;
class ServerError extends Error {
    constructor() {
        super('an unexpected error has occurred');
        this.name = 'ServerError';
    }
}
exports.ServerError = ServerError;
class NotAuthorizedError extends Error {
    constructor() {
        super('User not authorized to execute this action');
        this.name = 'NotAuthorizedError';
        this.message = 'User is not authorized to execute this action';
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
