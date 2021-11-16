import mysql, { Pool } from 'mysql2/promise';
import { config } from 'dotenv';
import IDotEnv from '@interfaces/IDotEnv';

declare const process: { env: IDotEnv };

config();

let connection: null | Pool = null;

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_PORT,
  MYSQL_DATABASE,
} = process.env;

export default () => {
  connection = connection || (
    connection = mysql.createPool({
      host: MYSQL_HOST,
      port: MYSQL_PORT,
      user: MYSQL_USER,
      password: MYSQL_PASS,
      database: MYSQL_DATABASE,
    })
  );

  return connection;
};
