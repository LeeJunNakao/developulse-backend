import { ContactController, controllerResp } from './contact';
import { IContactService } from '../../../domain/protocols/services/contact';
import { missingFieldsError, serverError } from '../../helper/handleError';
import { errorResponse, createResponse } from '../../helper/handlerResponse';

const serviceMocker = (response: boolean): IContactService => ({
  async submitContact(contact): Promise<boolean> {
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
  test('Should return missing error if required fields are not provided', async() => {
    const controller = new ContactController(serviceMocker(true));
    const requiredFields = Object.keys(contactData);

    requiredFields.forEach(async(field) => {
      const data = { ...contactData };
      data[field] = '';

      const response = await controller.post({ body: data });

      expect(response).toEqual(missingFieldsError([field]));
    });
  });

  test('Should return error response if service return false', async() => {
    const controller = new ContactController(serviceMocker(false));

    const response = await controller.post({ body: contactData });

    expect(response).toEqual(errorResponse(controllerResp.post.error));
  });

  test('Should return success response if service return true', async() => {
    const controller = new ContactController(serviceMocker(true));

    const response = await controller.post({ body: contactData });

    expect(response).toEqual(createResponse(controllerResp.post.success));
  });

  test('Should return server error if service throw error', async() => {
    const service = serviceMocker(true);
    jest.spyOn(service, 'submitContact').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));

    const controller = new ContactController(service);

    const response = await controller.post({ body: contactData });

    expect(response).toEqual(serverError());
  });
});
