import { Request, Response } from 'express';

import IQueryParams from '../interfaces/IQueryParams';
import { drinks } from '../src';

export default (req: Request<{}, {}, {}, IQueryParams>, res: Response) => {
  const { name, minPrice, maxPrice } = req.query;
  const filtredDrinks = drinks.filter(({ name: drinkName, price }) => (
    drinkName.includes(name)
    && price > +minPrice
    && price < +maxPrice
  ));

  res.status(200).json(filtredDrinks);
};
