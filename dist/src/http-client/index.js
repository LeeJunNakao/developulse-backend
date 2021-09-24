"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    async post(url, data) {
        const response = await axios_1.default.post(url, data);
        return response.data;
    }
}
exports.default = HttpClient;
