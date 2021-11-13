import axios from 'axios';
import { IApiResponse } from './interfaces';

class ExternCepModel {
  private API_URL: string;

  public constructor(cep: string) {
    this.API_URL = `https://viacep.com.br/ws/${cep}/json/`;
  }

  public async get(): Promise<IApiResponse> {
    const { data } = await axios.get<IApiResponse>(this.API_URL);
    return data;
  }
}

export default ExternCepModel;
