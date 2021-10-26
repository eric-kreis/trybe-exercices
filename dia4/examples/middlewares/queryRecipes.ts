import { Request, Response } from 'express';

import IQueryParams from '../interfaces/IQueryParams';
import { recipes } from '../src';

export default (req: Request<{}, {}, {}, IQueryParams>, res: Response) => {
  const { name, minPrice, maxPrice } = req.query;
  const filtredRecipes = recipes.filter(({ name: recipeName, price }) => (
    recipeName.includes(name)
    && price > +minPrice
    && price < +maxPrice
  ));

  res.status(200).json(filtredRecipes);
};
