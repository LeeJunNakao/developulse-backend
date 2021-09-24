"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = void 0;
const contact_1 = require("./contact");
const http_client_1 = __importDefault(require("../../http-client"));
const httpClient = new http_client_1.default();
exports.contactService = new contact_1.ContactService(httpClient);
