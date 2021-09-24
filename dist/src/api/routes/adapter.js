"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeAdapter = void 0;
const routeAdapter = (controller) => {
    return async (req, res) => {
        const httpRequest = { body: { ...req.params, ...req.body } };
        if (req.method === 'GET') {
            const { status, body } = await controller.get(httpRequest);
            res.status(status).send(body);
        }
        else if (req.method === 'POST') {
            const { status, body } = await controller.post(httpRequest);
            res.status(status).send(body);
        }
        else if (req.method === 'PUT') {
            const { status, body } = await controller.put(httpRequest);
            res.status(status).send(body);
        }
        else if (req.method === 'DELETE') {
            const { status, body } = await controller.delete(httpRequest);
            res.status(status).send(body);
        }
        else {
            res.status(200).send();
        }
    };
};
exports.routeAdapter = routeAdapter;
