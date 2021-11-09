import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
    }
  }
}

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  const conn = await client.connect();
  return conn.db('model_example');
};

export default connection;
