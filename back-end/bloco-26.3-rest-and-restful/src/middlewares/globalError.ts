import { ErrorRequestHandler } from 'express';

const globalError: ErrorRequestHandler = (err, _req, res, _next) => {
  const { error } = err;
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Erro interno do servidor' });
};

export default globalError;
