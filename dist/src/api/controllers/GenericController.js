"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const defaultResponse = {
    status: 405,
    body: { message: 'Method not allowed' },
};
class GenericController {
    async post(httpRequest) {
        return await new Promise(resolve => resolve(defaultResponse));
    }
    async get(httpRequest) {
        return await new Promise(resolve => resolve(defaultResponse));
    }
    async put(httpRequest) {
        return await new Promise(resolve => resolve(defaultResponse));
    }
    async delete(httpRequest) {
        return await new Promise(resolve => resolve(defaultResponse));
    }
    verifyRequiredFields(body, requiredFields) {
        const missingFields = requiredFields.filter(reqField => !body[reqField]);
        if (missingFields.length)
            throw new errors_1.MissingFieldsError(missingFields);
    }
}
exports.default = GenericController;
