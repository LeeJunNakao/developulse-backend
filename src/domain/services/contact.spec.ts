import { ContactService } from './contact';
import { IHttpClient } from '../../http-client/protocols';
import { Contact } from '../Contact';

class HttpClient implements IHttpClient {
  private readonly response: boolean;

  constructor(response: boolean) {
    this.response = response;
  }

  async post(url: string, data: any): Promise<boolean> {
    if (!this.response) throw new Error();
    return this.response;
  }
}

const sutClient = (response: boolean = true): HttpClient => {
  return new HttpClient(response);
};

const contact: Contact = {
  name: 'Mary Bucks',
  address: 'Bank Street Uniondale',
  address2: 'Old Saxon St. Egg Harbor Township',
  city: 'New York',
  email: 'mary@email.com',
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
