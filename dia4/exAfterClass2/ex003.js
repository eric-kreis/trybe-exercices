let arrayTeste = [2, 4, -6, 7, 10, 0, -3];

function indiceMaiorValor(array) {
  let maiorValor = 0;
  for (let valor of array) {
    if (valor < maiorValor) {
      maiorValor = valor;
    };
  };
  return (console.log(array.indexOf(maiorValor)));
};

indiceMaiorValor(arrayTeste);