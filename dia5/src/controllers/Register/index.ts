import { Request, Response } from 'express';
import { users } from '../..';
import ValidationService from '../../services/ValidationService';

class RegisterController {
  handle(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const validation = new ValidationService();

    if (!validation.execute({ username, email, password })) {
      return res.status(400).json({ message: 'invalid data' });
    }

    users.push({ username, email, password });
    return res.status(201).json({ message: 'user created' });
  }
}

export default RegisterController;
