import { ContactService } from './contact';
import { IHttpClient } from '../../http-client/protocols';
import { Contact } from '../Contact';
import { SubmitResponse } from '../protocols/services/contact';

class HttpClient implements IHttpClient {
  private readonly response: boolean;

  constructor(response: boolean) {
    this.response = response;
  }

  async post(url: string, data: any): Promise<SubmitResponse> {
    return this.response ? { StatusCode: 200, Status: 'All Good!' } : { StatusCode: 400, Status: 'Validation Error!' };
  }
}

const sutClient = (response: boolean = true): HttpClient => {
  return new HttpClient(response);
};

const contact: Contact = {
  Name: 'Mary Bucks',
  Address: 'Bank Street Uniondale',
  Address2: 'Old Saxon St. Egg Harbor Township',
  Province: 'New York',
  City: 'New York',
  Email: 'mary@email.com',
};

describe('Contact Service Unit - submitContact', () => {
  test('Should return false if submition failed', async() => {
    const service = new ContactService(sutClient(false));
    const response = await service.submitContact(contact);

    expect(response).toBe(false);
  });

  test('Should return true if submition is successfull', async() => {
    const service = new ContactService(sutClient());
    const response = await service.submitContact(contact);

    expect(response).toBe(true);
  });
});
