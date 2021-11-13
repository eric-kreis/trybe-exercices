import { ErrorRequestHandler } from 'express';

const generalError: ErrorRequestHandler = (err, _req, res, _next) => {
  const { error } = err;
  if (error) {
    const { code, status, message } = err.error;
    if (status) return res.status(status).json({ error: { code, message } });
  }

  console.log(err);

  res.status(500).json({ message: 'Erro interno' });
};

export default generalError;
