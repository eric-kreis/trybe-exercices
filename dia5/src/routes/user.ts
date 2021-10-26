import { Request, Response, Router } from 'express';
import { users } from '..';
import RegisterController from '../controllers/Register';

const user = Router();

user.get('/all', (_req: Request, res: Response) => {
  res.status(200).json(users);
});

user.post('/register', new RegisterController().handle);

export default user;
