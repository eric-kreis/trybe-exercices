import { Pool } from 'mysql2/promise';
import { config } from 'dotenv';
import { mysqlConnection } from '../connections';
import { IEnv } from '../../interfaces';
import { ICep, ICepDB } from './interfaces';

declare const process: { env: IEnv };

config();

class CepModel {
  private connection: Pool;

  public constructor() {
    this.connection = mysqlConnection();
  }

  public async findByCep(cep: string): Promise<ICepDB[]> {
    const query = `
      SELECT cep, logradouro, bairro, localidade, uf
      FROM ${process.env.MYSQL_DATABASE}.ceps
      WHERE cep LIKE ?
    `;

    const [rows] = await this.connection.execute<ICepDB[]>(query, [cep]);

    return rows;
  }

  public async createCep(cepObj: ICep): Promise<ICep> {
    const { cep, logradouro, bairro, localidade, uf } = cepObj;

    const query = `
      INSERT INTO ceps(cep, logradouro, bairro, localidade, uf)
      VALUES (?, ?, ?, ?, ?)
    `;

    await this.connection.execute(
      query,
      [cep, logradouro, bairro, localidade, uf],
    );

    return { cep, logradouro, bairro, localidade, uf };
  }
}

export default CepModel;
