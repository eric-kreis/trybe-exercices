import mysql, { Pool } from 'mysql2/promise';
import { config } from 'dotenv';
import { IEnv } from '../../interfaces';

declare const process: { env: IEnv };

config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_PORT,
  MYSQL_DATABASE,
} = process.env;

let connection: null | Pool = null;

export default () => {
  connection = connection || (connection = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DATABASE,
  }));

  return connection;
};
