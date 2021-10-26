import express, { Request, Response } from 'express';
import crypto from 'crypto';

import authMiddleware from '../middlewares/auth';
import { readSimpsons, writeSimpson } from '../utils';

const app = express();

app.use(express.json());
app.use((err: { message: string }, _req: any, res: any, _next: any) => {
  res.status(500).send(`Ocorreu um erro! Erro: ${err.message}`);
});

// Exercício Bônus 01
app.use(authMiddleware);

// Exercício 01
app.get('/ping', (_req: Request, res: Response) => (
  res.json({ message: 'pong' })
));

// Exercício 02
app.post('/hello', (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'Name is not defined!' });

  return res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercício 03
app.post('/greetings', (req: Request, res: Response) => {
  const { name, age } = req.body;

  if (!age || +age <= 17) return res.status(401).json({ message: 'Unauthorized' });

  return res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercício 04
app.put('/users/:name/:age', (req: Request, res: Response) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

// Simpsons API;

// Exercício 06
app.get('/simpsons', async (_req: Request, res: Response) => {
  try {
    const simpsons = await readSimpsons();

    return res.status(200).json(simpsons);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// Exercício 07
app.get('/simpsons/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const simpsons = await readSimpsons();
    const simpson = simpsons.find(({ id: simpsonId }) => simpsonId === id);

    if (!simpson) return res.status(404).json({ message: 'simpson not found' });

    return res.status(200).json(simpson);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// Exercício 08
app.post('/simpsons', async (req: Request, res: Response) => {
  const { id, name } = req.body;
  
  try {
    const simpsons = await readSimpsons();
    const exists = simpsons.some(({ id: simpsonId }) => simpsonId === id);

    if (exists) return res.status(409).json({ message: 'id already exists' });

    await writeSimpson([...simpsons, { id, name }]);

    return res.status(204).end();
  } catch (e) {
    return res.status(500).json(e);
  }
});

interface IUser {
  email: string,
  password: string | number,
  firstName: string,
  phone: string,
}

// Exercício Bônus 02
app.post('/signup', (req: Request, res: Response) => {
  const { email, password, firstName, phone }: IUser = req.body;

  if (!email || !password || !password || !phone) {
    return res.status(401).json({ message: 'missing fields' }); 
  }

  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

app.all('*', (_req: Request, res: Response) => {
  return res.status(404).json({ message: 'Not found :(' });
});

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
