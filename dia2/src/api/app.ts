import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ messsage: 'pong!' });
});

export { app };
