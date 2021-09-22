import express from 'express';
import { contactController } from '../controllers/contact';
import { routeAdapter } from './adapter';

const router = express.Router();

router.use(routeAdapter(contactController));

export default router;
