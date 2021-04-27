let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function indiceMaiorValor(array) {
  let contRepeticao = 0;
  let contNumero = 0;
  let indexNumRepetido = 0;
  for (let valor of array) {
    for (let index in array) {
      if (valor === array[index]) {
        contNumero += 1;
      };
    };
    if(contNumero > contRepeticao) {
      contRepeticao = contNumero;
      indexNumRepetido = array.indexOf(valor);
    }
    contNumero = 0;
  };
  return (console.log(array[indexNumRepetido]));
};

indiceMaiorValor(arrayTeste);