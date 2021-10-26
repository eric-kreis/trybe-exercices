import { Request, Response } from 'express';
import IRecipe from '../interfaces/IRecipe';
import { recipes } from '../src';

export default (req: Request<{ id: string }, {}, IRecipe>, res: Response) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;

  const recipeIndex = recipes.findIndex(({ id: recipeId }) => recipeId === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { id: +id, name, price, waitTime };

  return res.status(204).end();
};
