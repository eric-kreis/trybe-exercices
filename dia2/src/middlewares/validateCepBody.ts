import { RequestHandler } from 'express';
import { ICep } from '../models/CepModel/interfaces';
import { CepSchema } from '../schemas';

const validateCepBody: RequestHandler<{}, {}, ICep> = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error } = CepSchema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) {
    return next({
      error: {
        code: 'invalidData',
        message: error.details[0].message,
        status: 400,
      },
    });
  }

  next();
};

export default validateCepBody;
