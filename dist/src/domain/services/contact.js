"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
class ContactService {
    constructor(client) {
        this.client = client;
    }
    async submitContact(contact) {
        try {
            const { StatusCode: statusCode } = await this.client.post(process.env.SUBMIT_URL, contact);
            return statusCode === 200;
        }
        catch {
            return false;
        }
    }
}
exports.ContactService = ContactService;
