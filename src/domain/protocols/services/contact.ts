import { Contact } from '../../Contact';

export interface IContactService {
  submitContact: (contact: Contact) => Promise<boolean>,
}

export interface SubmitResponse {
  StatusCode: number,
  Status: string,
}
