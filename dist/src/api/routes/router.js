"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const contact_1 = __importDefault(require("./contact"));
const registerRoutes = (app) => {
    app.use('/api', contact_1.default);
};
exports.registerRoutes = registerRoutes;
