import { IError } from '../interfaces';
import { CepModel } from '../models';
import { ICep } from '../models/CepModel/interfaces';

interface ICepServiceReturn extends ICep {
  error?: IError,
}

class CepService {
  private model: CepModel;

  public constructor() {
    this.model = new CepModel();
  }

  private static cepFormarter(cep: string) {
    return cep.split('-').join('');
  }

  public async findByCep(cep: string): Promise<ICepServiceReturn | IError> {
    const response = await this.model.findByCep(cep);

    if (response.length === 0) {
      return { error: { code: 'notFound', message: 'CEP não encontrado' } };
    }

    return response[0];
  }

  public async create(cepObj: ICep): Promise<ICepServiceReturn | IError> {
    const cep = CepService.cepFormarter(cepObj.cep);
    const alreadyExists = await this.model.findByCep(cep);

    if (alreadyExists.length !== 0) {
      return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
    }

    const { logradouro, bairro, localidade, uf } = cepObj;

    const response = await this.model.createCep({ cep, logradouro, bairro, localidade, uf });

    return response;
  }
}

export default CepService;
