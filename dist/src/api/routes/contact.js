"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
const adapter_1 = require("./adapter");
const router = express_1.default.Router();
router.use(adapter_1.routeAdapter(contact_1.contactController));
exports.default = router;
