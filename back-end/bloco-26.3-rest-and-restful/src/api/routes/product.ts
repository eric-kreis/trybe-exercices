import { Router } from 'express';
import rescue from 'express-rescue';
import ProductController from '@controllers/ProductContoller';
import validateProductId from '@middlewares/validateProductId';
import validateProductBody from '@middlewares/validateProductBody';

const product = Router();

const productsURI = '/products';
const productURI = '/products/:id';

product.get(productsURI, rescue(ProductController.findAll));

product.get(productURI, validateProductId, rescue(ProductController.findById));

product.post(productsURI, validateProductBody, rescue(ProductController.add));

product.put(productURI, validateProductId, validateProductBody, rescue(ProductController.change));

product.delete(productURI, validateProductId, rescue(ProductController.remove));

export default product;
