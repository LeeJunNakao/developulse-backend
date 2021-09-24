"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
const handleError_1 = require("../../helper/handleError");
const handlerResponse_1 = require("../../helper/handlerResponse");
const serviceMocker = (response) => ({
    async submitContact(contact) {
        return response;
    },
});
const contactData = {
    Name: 'Mark Hayne',
    Address: 'Bank Street Uniondale',
    Address2: 'Old Saxon St. Egg Harbor Township',
    City: 'New York',
    Province: 'New York',
    Email: 'mark.hayne@email.com',
};
describe('Contact Controller Unit - POST', () => {
    test('Should return missing error if required fields are not provided', async () => {
        const controller = new contact_1.ContactController(serviceMocker(true));
        const requiredFields = Object.keys(contactData);
        requiredFields.forEach(async (field) => {
            const data = { ...contactData };
            data[field] = '';
            const response = await controller.post({ body: data });
            expect(response).toEqual(handleError_1.missingFieldsError([field]));
        });
    });
    test('Should return error response if service return false', async () => {
        const controller = new contact_1.ContactController(serviceMocker(false));
        const response = await controller.post({ body: contactData });
        expect(response).toEqual(handlerResponse_1.errorResponse(contact_1.controllerResp.post.error));
    });
    test('Should return success response if service return true', async () => {
        const controller = new contact_1.ContactController(serviceMocker(true));
        const response = await controller.post({ body: contactData });
        expect(response).toEqual(handlerResponse_1.createResponse(contact_1.controllerResp.post.success));
    });
    test('Should return server error if service throw error', async () => {
        const service = serviceMocker(true);
        jest.spyOn(service, 'submitContact').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
        const controller = new contact_1.ContactController(service);
        const response = await controller.post({ body: contactData });
        expect(response).toEqual(handleError_1.serverError());
    });
});
