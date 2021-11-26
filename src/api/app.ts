import bodyParser from 'body-parser';
import express from 'express';

import globalError from '@middlewares/globalError';
import connection from '@models/connection';

import login from './routes/login';
import topSecret from './routes/top-secret';
import users from './routes/users';
import singup from './routes/singup';

const app = express();

app.use(bodyParser.json());

connection();
singup(app);
login(app);
users(app);
topSecret(app);

globalError(app);

export default app;
