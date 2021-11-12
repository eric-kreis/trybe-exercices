import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

declare const process: {
  env: {
    MONGO_URI: string;
    MONGO_DATABASE: string;
  }
};

config();

const { MONGO_URI, MONGO_DATABASE } = process.env;
const client = new MongoClient(MONGO_URI);

const connection = async () => {
  const connect = await client.connect();
  console.log('Connected to DB');

  return connect.db(MONGO_DATABASE);
};

export { connection };
