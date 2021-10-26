import { Request, Response } from 'express';

import { recipes } from '../src';

export default (req: Request, res: Response) => {
  const { id } = req.params;
  const recipe = recipes.find(({ id: recipeId }) => recipeId === +id);

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
};
