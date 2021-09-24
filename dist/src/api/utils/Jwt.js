"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    decode(token) {
        var _a;
        const secretKey = (_a = process.env.JWT_KEY) !== null && _a !== void 0 ? _a : 'secret_key';
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        return {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
        };
    }
}
exports.Jwt = Jwt;
