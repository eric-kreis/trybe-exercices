import { Request, Response } from 'express';
import IRecipe from '../interfaces/IRecipe';
import { recipes } from '../src';

export default (req: Request, res: Response) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex(({ id: recipeId }) => recipeId === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });
  
  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
};
