"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userData = {
    id: 1,
    name: 'João das Neves',
    email: 'joao@snow.com.br',
};
const token = jsonwebtoken_1.default.sign(userData, (_a = process.env.JWT_KEY) !== null && _a !== void 0 ? _a : 'secret_key');
describe('Content Type Middlware', () => {
    test('Should return json as default', async () => {
        app_1.default.get('/content_type', (req, res) => res.send({ message: 'hello' }));
        await supertest_1.default(app_1.default)
            .get('/content_type')
            .set('token', token)
            .expect('content-type', /json/);
    });
    test('Should return xml when type is set', async () => {
        app_1.default.get('/content_type_xml', (req, res) => {
            res.type('xml');
            res.send('');
        });
        await supertest_1.default(app_1.default)
            .get('/content_type_xml')
            .set('token', token)
            .expect('content-type', /xml/);
    });
});
