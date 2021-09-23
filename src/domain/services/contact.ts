import { IContactService, SubmitResponse } from '../protocols/services/contact';
import { IHttpClient } from '../../http-client/protocols';
import { Contact } from '../Contact';

export class ContactService implements IContactService {
  private readonly client: IHttpClient;

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async submitContact(contact: Contact): Promise<boolean> {
    try {
      const { StatusCode: statusCode }: SubmitResponse = await this.client.post(process.env.SUBMIT_URL as string, contact);
      return statusCode === 200;
    } catch {
      return false;
    }
  }
}
