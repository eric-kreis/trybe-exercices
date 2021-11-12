import { MongoClient } from 'mongodb';
import { config } from 'dotenv';
import { IEnv } from '../../interfaces';

declare const process: { env: IEnv };

config();

const { MONGO_URI, MONGO_DATABASE } = process.env;
const client = new MongoClient(MONGO_URI);

const connection = async () => {
  const connect = await client.connect();
  console.log('Connected to DB');

  return connect.db(MONGO_DATABASE);
};

export default connection;
