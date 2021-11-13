import { NextFunction, Request, Response } from 'express';
import { CepService } from '../services';
import { ICep } from '../models/CepModel/interfaces';

class CepController {
  public static async findAll(_req: Request, res: Response) {
    const service = new CepService();
    const dbResponse = await service.findAll();

    res.status(200).json(dbResponse);
  }

  public static async findByCep(req: Request, res: Response, next: NextFunction) {
    const { cep } = req.params;
    const service = new CepService(cep);
    const dbResponse = await service.findByCep();
    const { error } = dbResponse;

    if (error) return next({ error });

    res.status(200).json(dbResponse);
  }

  public static async create(req: Request<{}, {}, ICep>, res: Response, next: NextFunction) {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const service = new CepService(cep);
    const dbResponse = await service.create({ cep, logradouro, bairro, localidade, uf });
    const { error } = dbResponse;

    if (error) return next({ error });

    res.status(201).json(dbResponse);
  }
}

export default CepController;
