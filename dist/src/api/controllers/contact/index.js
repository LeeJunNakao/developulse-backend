"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const contact_1 = require("./contact");
const services_1 = require("../../../domain/services");
exports.contactController = new contact_1.ContactController(services_1.contactService);
