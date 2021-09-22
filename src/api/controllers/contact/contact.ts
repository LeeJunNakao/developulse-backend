import { HttpRequest, HttpResponse } from '../../protocols';
import GenericController from '../GenericController';
import { IContactService } from '../../../domain/protocols/services/contact';
import { Contact } from '../../../domain/Contact';
import { serverError, missingFieldsError } from '../../helper/handleError';
import { errorResponse, createResponse } from '../../helper/handlerResponse';
import { MissingFieldsError } from '../../errors';

export const controllerResp = {
  post: {
    success: 'contact info submited successfully',
    error: 'could not submit contact info',
  },
};

export class ContactController extends GenericController {
  private readonly service: IContactService;

  constructor(service: IContactService) {
    super();
    this.service = service;
  }

  async post(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest;
      const { name, address, address2, city, email }: Contact = body;

      this.verifyRequiredFields(body, ['name', 'address', 'address2', 'city', 'email']);

      const isSubmited = await this.service.submitContact({ name, address, address2, city, email });

      return isSubmited ? createResponse(controllerResp.post.success) : errorResponse(controllerResp.post.error);
    } catch (error) {
      return error instanceof MissingFieldsError ? missingFieldsError(error.fields) : serverError();
    }
  }
}
