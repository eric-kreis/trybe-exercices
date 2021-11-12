import { Request, Response } from 'express';
import { CepService } from '../services';
import { ICep } from '../models/CepModel/interfaces';

const service = new CepService();

class CepController {
  public static async findByCep(req: Request, res: Response) {
    const { cep } = req.params;
    const dbResponse = await service.findByCep(cep);
    const { error } = dbResponse;

    if (error) return res.status(404).json({ error });

    res.status(200).json(dbResponse);
  }

  public static async create(req: Request<{}, {}, ICep>, res: Response) {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const dbResponse = await service.create({ cep, logradouro, bairro, localidade, uf });
    const { error } = dbResponse;

    if (error) return res.status(409).json({ error });

    res.status(201).json(dbResponse);
  }
}

export default CepController;
