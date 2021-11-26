import { NextFunction, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';

import UserSchema from '@schemas/UserSchema';
import createUserToken from '@helpers/createUserToken';
import User from '@models/User';

dotenv.config();

class SignupController {
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  private static async createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const { error } = UserSchema.validate({ username, password });
  
    if (error) return next(error);

    const user = await User.findOne({ username });

    if (user) {
      return next({
        status: StatusCodes.CONFLICT,
        message: 'user already exists',
      });
    }

    const admin = Math.floor(Math.random() * 100) > 50;

    await User.create({ username, password, admin });

    const token = createUserToken({ username, admin });

    res.status(StatusCodes.CREATED).json({ token });
  }

  handle() {
    this.route.post('/', SignupController.createUser);
  }
}

export default SignupController;
