import { Pool } from 'mysql2/promise';
import { mysqlConnection } from '../connections';
import { ICep, ICepDB } from './interfaces';

class CepModel {
  private connection: Pool;

  private cep: string;

  public constructor(cep: string) {
    this.connection = mysqlConnection();
    this.cep = cep;
  }

  public static cepFormarter(cep: string) {
    return cep.split('-').join('');
  }

  public async findAll() {
    const query = `
      SELECT cep, logradouro, bairro, localidade, uf
      FROM cep_lookup.ceps
    `;

    const [rows] = await this.connection.execute<ICepDB[]>(query);

    return rows;
  }

  public async findByCep(): Promise<ICepDB[]> {
    const query = `
      SELECT cep, logradouro, bairro, localidade, uf
      FROM cep_lookup.ceps
      WHERE cep LIKE ?
    `;

    const [rows] = await this.connection.execute<ICepDB[]>(query, [this.cep]);

    return rows;
  }

  public async createCep(cepObj: ICep): Promise<ICep> {
    const { logradouro, bairro, localidade, uf } = cepObj;

    const query = `
      INSERT INTO cep_lookup.ceps(cep, logradouro, bairro, localidade, uf)
      VALUES (?, ?, ?, ?, ?)
    `;

    await this.connection.execute(
      query,
      [CepModel.cepFormarter(this.cep), logradouro, bairro, localidade, uf],
    );

    return { cep: this.cep, logradouro, bairro, localidade, uf };
  }
}

export default CepModel;
