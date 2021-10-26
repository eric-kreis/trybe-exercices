import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token || token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });

  return next();
};
