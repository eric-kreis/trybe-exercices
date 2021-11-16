import { RowDataPacket } from 'mysql2';

interface IProductDB extends RowDataPacket {
  product_id: number;
  name: string;
  brand: string;
}

export default IProductDB;
