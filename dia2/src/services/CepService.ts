import { IError } from '../interfaces';
import { CepModel } from '../models';
import { ICep } from '../models/CepModel/interfaces';
import ExternCepModel from '../models/ExternCepModel';
import { CepSchema } from '../schemas';

const errors = {
  notFound: (): IError => ({
    error: {
      code: 'notFound',
      message: 'CEP não encontrado',
      status: 404,
    },
  }),
  invalidData: (message: string): IError => ({
    error: {
      code: 'invalidData',
      message,
      status: 400,
    },
  }),
  alreadyExists: (): IError => ({
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
      status: 409,
    },
  }),
};

interface ICepServiceReturn extends ICep {
  error?: IError,
}

class CepService {
  private formatedCep: string;

  private model: CepModel;

  private externModel: ExternCepModel;

  public constructor(cep?: string) {
    this.formatedCep = cep ? CepModel.cepFormarter(cep) : '';
    this.model = new CepModel(this.formatedCep);
    this.externModel = new ExternCepModel(this.formatedCep);
  }

  public async findAll(): Promise<ICep[]> {
    const response = await this.model.findAll();

    return response;
  }

  public async findByCep(): Promise<ICepServiceReturn | IError> {
    const response = await this.model.findByCep();
  
    if (response.length === 0) {
      const apiData = await this.externModel.get();
      const { cep, logradouro, bairro, localidade, uf, erro } = apiData;
      const { error } = CepSchema.validate({ cep, logradouro, bairro, localidade, uf });

      if (erro) return errors.notFound();
      if (error) return errors.invalidData(error.details[0].message);

      await this.model.createCep({ cep, logradouro, bairro, localidade, uf });

      return { cep, logradouro, bairro, localidade, uf };
    }
    
    return response[0];
  }

  public async create(cepObj: ICep): Promise<ICepServiceReturn | IError> {
    const { cep, logradouro, bairro, localidade, uf } = cepObj;
    const alreadyExists = await this.model.findByCep();

    if (alreadyExists.length !== 0) return errors.alreadyExists();

    const response = await this.model.createCep({ cep, logradouro, bairro, localidade, uf });

    return response;
  }
}

export default CepService;
