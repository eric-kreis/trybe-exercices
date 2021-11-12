import { config } from 'dotenv';
import { app } from './app';
import { IEnv } from '../interfaces';

declare const process: { env: IEnv };

config();

const PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
