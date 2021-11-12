import { RequestHandler } from 'express';

const CEP_REGEX = new RegExp(/\d{5}-?\d{3}/);

const validateCepParameter: RequestHandler = (req, res, next) => {
  const { cep } = req.params;

  if (!CEP_REGEX.test(cep) || cep.length > 9) {
    return res.status(400).json({
      error: { code: 'invalidData', message: 'CEP inválido' },
    });
  }

  next();
};

export default validateCepParameter;
