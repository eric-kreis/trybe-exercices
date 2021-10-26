import { Request, Response } from 'express';
import IProduct from '../interfaces/IProduct';

import { drinks } from '../src';

export default (req: Request<{}, {}, IProduct>, res: Response) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' });
};
