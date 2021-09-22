import { Express } from 'express';
import contactRouter from './contact';

export const registerRoutes = (app: Express): void => {
  app.use('/api', contactRouter);
};
