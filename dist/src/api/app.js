"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const middlewares_1 = require("./config/middlewares");
const app = express_1.default();
middlewares_1.setupMiddleware(app);
router_1.registerRoutes(app);
exports.default = app;
