import { idValidate } from '@schemas/ProductSchema';
import { RequestHandler } from 'express';

const validateProductId: RequestHandler = (req, _res, next) => {
  const { id } = req.params;
  const { error } = idValidate.validate(id);

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

export default validateProductId;
