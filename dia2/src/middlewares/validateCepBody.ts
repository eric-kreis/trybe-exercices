import { RequestHandler } from 'express';
import { ICep } from '../models/CepModel/interfaces';
import { CepSchema } from '../schemas';

const validateCepBody: RequestHandler<{}, {}, ICep> = (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const { error } = CepSchema.validate({ cep, logradouro, bairro, localidade, uf });

  if (error) {
    return res.status(400).json({
      error: { code: 'invalidData', message: error.details[0].message },
    });
  }

  next();
};

export default validateCepBody;
