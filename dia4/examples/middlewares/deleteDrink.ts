import { Request, Response } from 'express';
import { drinks } from '../src';

export default (req: Request, res: Response) => {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex(({ id: drinkId }) => drinkId === +id);

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });
  
  drinks.splice(drinkIndex, 1);

  return res.status(204).end();
};
