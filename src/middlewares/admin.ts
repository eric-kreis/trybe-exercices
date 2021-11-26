import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const admin: RequestHandler = (req, _res, next) => {
  const { user } = req;

  if (!user.admin) {
    return next({
      status: StatusCodes.FORBIDDEN,
      message: 'Restricted access',
    });
  }

  next();
};

export default admin;
