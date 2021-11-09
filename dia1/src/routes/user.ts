import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { globalError } from '../middlewares/globalError';

const user = Router();

const controller = new UserController();

user.post('/user', controller.create);
user.get('/user', controller.getAll);
user.get('/user/:id', controller.getById);
user.put('/user/:id', controller.update);
user.delete('/user/:id', controller.delete);

user.use(globalError);

export { user };
