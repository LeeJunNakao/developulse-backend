import { HttpResponse } from '../protocols';

export const errorResponse = (message: string): HttpResponse => ({
  status: 400,
  body: message,
});

export const createResponse = (message: string): HttpResponse => ({
  status: 201,
  body: message,
});
