import ProductModel from '@models/ProductModel';
import { Request, Response, NextFunction } from 'express';

const errors = {
  notFound: () => ({
    error: { status: 404, message: 'Product not found' },
  }),
};

class ProductController {
  public static async findAll(_req: Request, res: Response, next: NextFunction) {
    const products = await new ProductModel().findAll();

    if (!products) return next(errors.notFound());

    res.status(200).json(products);
  }

  public static async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const product = await new ProductModel().findById(+id);

    if (!product) return next(errors.notFound());

    res.status(200).json(product);
  }
 
  public static async add(req: Request, res: Response) {
    const { name, brand } = req.body;
    const newProduct = await new ProductModel().add(name, brand);

    res.status(200).json(newProduct);
  }

  public static async change(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name, brand } = req.body;
    const changedProduct = await new ProductModel().change(+id, name, brand);

    if (!changedProduct) return next(errors.notFound());

    res.status(200).json(changedProduct);
  }

  public static async remove(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const deletedProduct = await new ProductModel().remove(+id);

    if (!deletedProduct) return next(errors.notFound());

    res.status(200).json(deletedProduct);
  }
}

export default ProductController;
