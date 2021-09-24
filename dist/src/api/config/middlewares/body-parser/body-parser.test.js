"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
describe('Body Parser Middleware', () => {
    test('Should parse body as json', async () => {
        app_1.default.post('/test_body_parse', (req, res) => res.json(req.body));
        await supertest_1.default(app_1.default)
            .post('/test_body_parse')
            .send({ content: 'test' })
            .expect({ content: 'test' });
    });
});
