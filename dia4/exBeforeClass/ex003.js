let carro = {
  modelo: 'A3 Sedan',
  marca: 'Audi',
  ano: 2021
};

for (let chave in carro) {
  console.log(`${chave} ${carro[chave]}`);
};