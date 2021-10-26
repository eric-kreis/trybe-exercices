import express from 'express';
import IUser from './interfaces/IUser';
import user from './routes/user';

const app = express();

app.use(express.json());

export const users: IUser[] = [];

app.use('/user', user)

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
