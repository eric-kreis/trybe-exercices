import { Application, Router } from 'express';
import LoginController from '@controllers/LoginController';

const route = Router();

const controller = new LoginController(route);

controller.handle();

export default (app: Application) => {
  app.use('/login', route);
};
