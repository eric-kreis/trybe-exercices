import { Request, Response } from 'express';
import IProduct from '../interfaces/IProduct';
import { drinks } from '../src';

export default (req: Request<{ id: string }, {}, IProduct>, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex(({ id: drinkId }) => drinkId === +id);

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });
  
  drinks[drinkIndex] = { id: +id, name, price };

  return res.status(204).end();
};
