const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsPrices = (productList, priceList) =>
 productList.map(((product, index) => (
  { [product]: priceList[index] })));

console.log(productsPrices(products, prices));