import { ContactController } from './contact';
import { contactService } from '../../../domain/services';

export const contactController = new ContactController(contactService);
