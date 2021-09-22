import { Contact } from '../../Contact';

export interface IContactService {
  submitContact: (contact: Contact) => Promise<boolean>,
}
