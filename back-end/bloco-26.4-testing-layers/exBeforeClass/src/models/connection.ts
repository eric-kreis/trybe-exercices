import { Db, MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

declare const process: {
  env: {
    MONGO_URI: string,
    MONGO_DATABASE: string;
  }
};

const { MONGO_URI, MONGO_DATABASE } = process.env;

const client = new MongoClient(MONGO_URI);

let db: null | Db = null;

const connection = async (): Promise<Db> => {
  db = db
    ? await Promise.resolve(db)
    : (db = (await client.connect()).db(MONGO_DATABASE));

  return db;
};

export default connection;
