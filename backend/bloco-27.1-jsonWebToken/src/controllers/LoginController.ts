import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import UserSchema from '@schemas/UserSchema';
import createUserToken from '@helpers/createUserToken';
import User from '@models/User';

class LoginController {
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  private static async createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const { error } = UserSchema.validate({ username, password });
  
    if (error) return next(error);
  
    const user = await User.findOne({ username });

    if (!user) {
      return next({
        status: StatusCodes.NOT_FOUND,
        message: 'user not found',
      });
    }

    if (password !== user.password) {
      return next({
        status: StatusCodes.UNAUTHORIZED,
        message: 'password does not match',
      });
    }

    const token = createUserToken({ username, admin: user.admin });

    res.status(StatusCodes.CREATED).json({ token });
  }

  handle() {
    this.route.post('/', LoginController.createUser);
  }
}

export default LoginController;
