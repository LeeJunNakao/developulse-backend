"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
class HttpClient {
    constructor(response) {
        this.response = response;
    }
    async post(url, data) {
        return this.response ? { StatusCode: 200, Status: 'All Good!' } : { StatusCode: 400, Status: 'Validation Error!' };
    }
}
const sutClient = (response = true) => {
    return new HttpClient(response);
};
const contact = {
    Name: 'Mary Bucks',
    Address: 'Bank Street Uniondale',
    Address2: 'Old Saxon St. Egg Harbor Township',
    Province: 'New York',
    City: 'New York',
    Email: 'mary@email.com',
};
describe('Contact Service Unit - submitContact', () => {
    test('Should return false if submition failed', async () => {
        const service = new contact_1.ContactService(sutClient(false));
        const response = await service.submitContact(contact);
        expect(response).toBe(false);
    });
    test('Should return true if submition is successfull', async () => {
        const service = new contact_1.ContactService(sutClient());
        const response = await service.submitContact(contact);
        expect(response).toBe(true);
    });
});
