import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import findDrinkByID from '../middlewares/findDrinkByID';
import findRecipeByID from '../middlewares/findRecipeByID';
import queryRecipes from '../middlewares/queryRecipes';
import queryDrinks from '../middlewares/queryDrinks';
import IProduct from '../interfaces/IProduct';
import IRecipe from '../interfaces/IRecipe';
import createRecipe from '../middlewares/createRecipe';
import createDrink from '../middlewares/createDrink';
import changeRecipe from '../middlewares/changeRecipe';
import changeDrink from '../middlewares/changeDrink';
import deleteRecipe from '../middlewares/deleteRecipe';
import deleteDrink from '../middlewares/deleteDrink';

const app = express();
app.use(bodyParser.json());

export const drinks: IProduct[] = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

export const recipes: IRecipe[] = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const orderByName = (a: IProduct, b: IProduct): number => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
} 

drinks.sort(orderByName);
recipes.sort(orderByName);

app.get('/drinks', (_: Request, res: Response) => {
  res.json(drinks);
});

app.get('/recipes', (_: Request, res: Response) => {
  res.json(recipes);
});

app.get('/recipe/:id', findRecipeByID);
app.get('/drink/:id', findDrinkByID);
app.get('/recipes/search', queryRecipes);
app.get('/drinks/search', queryDrinks);

app.post('/recipes', createRecipe);
app.post('/drinks', createDrink);

app.put('/recipe/:id', changeRecipe);
app.put('/drink/:id', changeDrink);

app.delete('/recipe/:id', deleteRecipe);
app.delete('/drink/:id', deleteDrink);

app.all('*', (req: Request, res: Response) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});

export default app;
