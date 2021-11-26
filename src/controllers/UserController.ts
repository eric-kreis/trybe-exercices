import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

class UserController {
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  private static getUserInfo(req: Request, res: Response, _next: NextFunction) {
    const { user } = req;
  
    res.status(StatusCodes.OK).json(user);
  }

  handle() {
    this.route.get('/me', UserController.getUserInfo);
  }
}

export default UserController;
