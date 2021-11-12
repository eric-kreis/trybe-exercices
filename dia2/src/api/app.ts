import express from 'express';
import { json } from 'body-parser';
import { cep } from './routes';

const app = express();

app.use(json());

app.use(cep);

app.get('/ping', (_req, res) => {
  res.status(200).json({ messsage: 'pong!' });
});

export { app };
