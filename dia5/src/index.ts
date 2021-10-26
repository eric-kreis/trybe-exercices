import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validatePrice = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Price is not valid' });
  }

  next();
};

app.get('/recipes', (_req: Request, res: Response) => {
  return res.status(200).json(recipes);
});

app.get('/recipes/search', (req: Request<{}, {}, {}, { name: string, maxPrice: string }>, res: Response) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < +maxPrice);
  return res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === +id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.status(200).json(recipe);
});

app.post('/recipes', validatePrice, (req: Request, res: Response) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validatePrice, (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  return res.status(204).end();
});

app.delete('/recipes/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === +id);

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});

app.all('*', (req: Request, res: Response) => {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});


app.listen(3001, () => {
  console.log('The server is running on PORT 3001');
});
