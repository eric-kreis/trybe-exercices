let arrayTeste = [2, 10, 6, 7, 3, 1];

function indiceMaiorValor(array) {
  let maiorValor = 0;
  for (let valor of array) {
    if (valor > maiorValor) {
      maiorValor = valor;
    };
  };
  return (console.log(array.indexOf(maiorValor)));
};

indiceMaiorValor(arrayTeste);
