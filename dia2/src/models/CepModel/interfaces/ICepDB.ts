import { RowDataPacket } from 'mysql2';

interface ICepDB extends RowDataPacket {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default ICepDB;
