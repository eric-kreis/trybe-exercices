import { Request, Response } from 'express';

import IRecipe from '../interfaces/IRecipe';
import { recipes } from '../src';

export default (req: Request<{}, {}, IRecipe>, res: Response) => {
  const { id, name, price, waitTime} = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
};
