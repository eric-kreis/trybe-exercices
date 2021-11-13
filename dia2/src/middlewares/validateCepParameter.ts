import { RequestHandler } from 'express';

const CEP_REGEX = new RegExp(/\d{5}-?\d{3}/);

const validateCepParameter: RequestHandler = (req, _res, next) => {
  const { cep } = req.params;

  if (!CEP_REGEX.test(cep) || (!cep.includes('-') && cep.length > 8)) {
    return next({
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
        status: 400,
      },
    });
  }

  next();
};

export default validateCepParameter;
