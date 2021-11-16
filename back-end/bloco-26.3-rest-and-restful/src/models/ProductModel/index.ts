import { OkPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import connection from '../connection';
import { IProduct, IProductDB } from './interfaces';

class ProductModel {
  private connection: Pool;

  public constructor() {
    this.connection = connection();
  }

  private static serealize(product: IProductDB) {
    return {
      id: product.product_id,
      name: product.name,
      brand: product.brand,
    };
  }

  public async findAll(): Promise<IProduct[]> {
    try {
      const query = 'SELECT product_id, name, brand FROM products;';
      const [rows] = await this.connection.query<IProductDB[]>(query);
  
      return rows.map(ProductModel.serealize);
    } catch (e) {
      console.log(e);
      return process.exit(1);
    }
  }

  public async findById(id: number): Promise<IProduct | null> {
    try {
      const query = 'SELECT product_id, name, brand FROM products WHERE product_id = ?;';
      const [rows] = await this.connection.query<IProductDB[]>(query, [id]);

      if (!rows[0]) return null;
  
      return ProductModel.serealize(rows[0]);
    } catch (e) {
      console.log(e);
      return process.exit(1);
    }
  }

  public async add(name: string, brand: string): Promise<IProduct> {
    try {
      const query = 'INSERT INTO products (name, brand) VALUES (?, ?);';
      const [result] = await this.connection.query<OkPacket>(query, [name, brand]);
      return { id: result.insertId, name, brand };
    } catch (e) {
      console.log(e);
      return process.exit(1);
    }
  }

  public async change(id: number, name: string, brand: string): Promise<IProduct | null> {
    try {
      const product = await this.findById(id);
      if (!product) return null;
      const query = 'UPDATE products SET name = ?, brand = ? WHERE product_id = ?;';
      await this.connection.query(query, [name, brand, id]);
      return { id, name, brand };
    } catch (e) {
      console.log(e);
      return process.exit(1);
    }
  }

  public async remove(id: number): Promise<IProduct | null> {
    try {
      const product = await this.findById(id);
      if (!product) return null;
      const query = 'DELETE FROM products WHERE product_id = ?;';
      await this.connection.query(query, [id]);
      return product;
    } catch (e) {
      console.log(e);
      return process.exit(1);
    }
  }
}

export default ProductModel;
