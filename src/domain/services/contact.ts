import { IContactService } from '../protocols/services/contact';
import { IHttpClient } from '../../http-client/protocols';
import { Contact } from '../Contact';

export class ContactService implements IContactService {
  private readonly client: IHttpClient;

  constructor(client: IHttpClient) {
    this.client = client;
  }

  async submitContact(contact: Contact): Promise<boolean> {
    try {
      await this.client.post(process.env.SUBMIT_URL as string, contact);
      return true;
    } catch {
      return false;
    }
  }
}
