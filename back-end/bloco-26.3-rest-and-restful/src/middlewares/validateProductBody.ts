import ProductSchema from '@schemas/ProductSchema';
import { RequestHandler } from 'express';

const validateProductBody: RequestHandler = (req, _res, next) => {
  const { name, brand } = req.body;
  const { error } = ProductSchema.validate({ name, brand });

  if (error) {
    return next({
      error: {
        status: 400,
        message: error.details[0].message,
      },
    });
  }

  next();
};

export default validateProductBody;
