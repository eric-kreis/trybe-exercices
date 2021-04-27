let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

function indiceMaiorValor(array) {
  let maiorLength = '';
  for (let nome of array) {
    if (nome.length > maiorLength.length) {
      maiorLength = nome;
    };
  };
  return console.log(maiorLength);
};

indiceMaiorValor(arrayTeste);