"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMiddleware = void 0;
const body_parser_1 = require("./body-parser/body-parser");
const content_type_1 = require("./content-type/content-type");
const cors_1 = require("./cors/cors");
const setupMiddleware = (app) => {
    app.use(body_parser_1.bodyParser);
    app.use(content_type_1.contentType);
    app.use(cors_1.cors);
};
exports.setupMiddleware = setupMiddleware;
