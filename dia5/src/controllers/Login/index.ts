import { Request, Response } from 'express';

import LoginValidation from '../../services/LoginValidation';
import { createToken } from '../../utils';

class LoginController {
  handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const validation = new LoginValidation();

    if (!validation.execute({ email, password })) {
      return res.status(400).json({ message: 'email or password is incorrect' });
    }

    const token = createToken();
    return res.status(201).json({ token });
  }
}

export default LoginController;
