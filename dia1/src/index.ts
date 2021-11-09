import bodyParser from 'body-parser';
import express from 'express';
import { user } from './routes/user';

const app = express();

app.use(bodyParser.json());

app.use(user);

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
