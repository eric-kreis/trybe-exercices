import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import admin from '@middlewares/admin';

class TopSecretController {
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  private static getAdmInfo(_req: Request, res: Response) {
    res.status(StatusCodes.OK).json({ secretInfo: 'Peter Parker é o homem aranha' });
  }

  handle() {
    this.route.get('/', admin, TopSecretController.getAdmInfo);
  }
}

export default TopSecretController;
