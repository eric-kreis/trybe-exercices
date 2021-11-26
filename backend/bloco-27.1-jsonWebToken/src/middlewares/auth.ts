import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';

dotenv.config();

const { SECRET } = process.env;

const auth: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: 'token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    if (typeof decoded !== 'string') {
      const { data: { username, admin } } = decoded;

      req.user = { username, admin };
    }
  
    next();
  } catch (e: any) {
    console.log(e.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

export default auth;
