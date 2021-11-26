import { NextFunction, Request, Response, Router } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';

import UserSchema from '@schemas/UserSchema';
import IUser from '@interfaces/IUser';

dotenv.config();

const { SECRET } = process.env;

class LoginController {
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  private static createUserToken({ username, password }: IUser) {
    const admin = username === 'admin' && password === 's3nh4S3gur4???';

    const payload = {
      username,
      admin,
    };

    const jwtConfig: SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    return jwt.sign({ data: payload }, SECRET, jwtConfig);
  }

  private static createUser(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const { error } = UserSchema.validate({ username, password });
  
    if (error) return next(error);

    const token = LoginController.createUserToken({ username, password });

    res.status(StatusCodes.CREATED).json({ token });
  }

  handle() {
    this.route.post('/', LoginController.createUser);
  }
}

export default LoginController;
