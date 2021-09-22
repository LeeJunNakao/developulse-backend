import { ContactService } from './contact';
import HttpClient from '../../http-client';

const httpClient = new HttpClient();

export const contactService = new ContactService(httpClient);
