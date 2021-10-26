import IProduct from './IProduct';

export default interface IRecipe extends IProduct {
  waitTime: number,
}
