const readline = require('readline-sync');

const getFatorial = (num) => (
  num > 1 ? num * getFatorial(num - 1) : num
);

const fatorialScript = () => {
  const usrNumber = readline.questionInt('Digite um número: ');

  if (usrNumber < 1) {
    console.log('Número inválido, digite um número maior que 0!');

    return fatorialScript();
  }

  console.log(`O fatorial de ${usrNumber} é ${getFatorial(usrNumber)}.`);
};

fatorialScript();
