import { Application, Router } from 'express';
import UserController from '@controllers/UserController';
import auth from '@middlewares/auth';

const route = Router();

const controller = new UserController(route);

controller.handle();

export default (app: Application) => {
  app.use('/users', auth, route);
};
