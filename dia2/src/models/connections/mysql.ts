import mysql, { Pool } from 'mysql2/promise';
import { config } from 'dotenv';

declare const process: {
  env: {
    MYSQL_HOST: string;
    MYSQL_USER: string;
    MYSQL_PASS: string;
    MYSQL_PORT: number;
    MONGO_DATABASE: string;
  },
};

config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_PORT,
  MONGO_DATABASE,
} = process.env;

let connection: null | Pool = null;

export default () => {
  connection = connection || (connection = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MONGO_DATABASE,
  }));

  return connection;
};
