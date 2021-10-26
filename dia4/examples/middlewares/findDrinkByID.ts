import { Request, Response } from 'express';

import { drinks } from '../src';

export default (req: Request, res: Response) => {
  const { id } = req.params;
  const drink = drinks.find(({ id: drinkId }) => drinkId === +id);

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
};
