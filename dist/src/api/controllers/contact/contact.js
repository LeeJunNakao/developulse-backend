"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = exports.controllerResp = void 0;
const GenericController_1 = __importDefault(require("../GenericController"));
const handleError_1 = require("../../helper/handleError");
const handlerResponse_1 = require("../../helper/handlerResponse");
const errors_1 = require("../../errors");
exports.controllerResp = {
    post: {
        success: 'contact info submited successfully',
        error: 'could not submit contact info',
    },
};
class ContactController extends GenericController_1.default {
    constructor(service) {
        super();
        this.service = service;
    }
    async post(httpRequest) {
        try {
            const { body } = httpRequest;
            const { Name, Address, Address2, City, Province, Email } = body;
            this.verifyRequiredFields(body, ['Name', 'Address', 'Address2', 'City', 'Province', 'Email']);
            const isSubmited = await this.service.submitContact({ Name, Address, Address2, City, Province, Email });
            return isSubmited ? handlerResponse_1.createResponse(exports.controllerResp.post.success) : handlerResponse_1.errorResponse(exports.controllerResp.post.error);
        }
        catch (error) {
            return error instanceof errors_1.MissingFieldsError ? handleError_1.missingFieldsError(error.fields) : handleError_1.serverError();
        }
    }
}
exports.ContactController = ContactController;
