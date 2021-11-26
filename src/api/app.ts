import globalError from '@middlewares/globalError';
import bodyParser from 'body-parser';
import express from 'express';
import login from './routes/login';
import topSecret from './routes/top-secret';
import users from './routes/users';

const app = express();

app.use(bodyParser.json());

login(app);
users(app);
topSecret(app);

globalError(app);

export default app;
