import { Application, ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const globalError: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: { message: err.message } });
  }

  if (err.status) {
    return res.status(err.status).json({ error: { message: err.message } });
  }

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: {
      message: 'Erro interno do servidor',
    },
  });
};

export default (app: Application) => {
  app.use(globalError);
};
