import globalError from '@middlewares/globalError';
import bodyParser from 'body-parser';
import express from 'express';
import product from './routes/product';

const app = express();

app.use(bodyParser.json());

app.use(product);

app.use(globalError);

export default app;
