import express from 'express';
import { json } from 'body-parser';
import { cep } from './routes';
import { generalError } from '../middlewares';

const app = express();

app.use(json());

app.use(cep);

app.use(generalError);

app.get('/ping', (_req, res) => {
  res.status(200).json({ messsage: 'pong!' });
});

export { app };
