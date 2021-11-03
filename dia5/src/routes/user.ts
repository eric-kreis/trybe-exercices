import { Request, Response, Router } from 'express';
import { users } from '..';
import RegisterController from '../controllers/Register';
import LoginController from '../controllers/Login';

const user = Router();

user.post('/register', new RegisterController().handle);

user.post('/login', new LoginController().handle);

export default user;
