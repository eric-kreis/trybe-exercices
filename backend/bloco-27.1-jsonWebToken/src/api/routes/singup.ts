import { Application, Router } from 'express';
import SignupController from '@controllers/SignupController';

const route = Router();

const controller = new SignupController(route);

controller.handle();

export default (app: Application) => {
  app.use('/signup', route);
};
