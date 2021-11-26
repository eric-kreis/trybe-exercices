import { Application, Router } from 'express';
import auth from '@middlewares/auth';
import TopSecretController from '@controllers/TopSecretController';

const route = Router();

const controller = new TopSecretController(route);

controller.handle();

export default (app: Application) => {
  app.use('/top-secret', auth, route);
};
