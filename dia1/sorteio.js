const readline = require('readline-sync');

const getNumbers = () => {
  const randomNumber = Math.ceil(Math.random() * 10);
  const userNumber = readline.questionInt('Digite um número inteiro de 1 a 10: ');
  return { randomNumber, userNumber };
};

const getResult = (usrNum, randomNum) => (
  usrNum === randomNum
    ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${randomNum}`
);

const sorteioScript = () => {
  console.log('Adivinhe!');

  const { randomNumber, userNumber } = getNumbers();
  const message = getResult(userNumber, randomNumber);
  console.log(message);

  const playAgain = readline.keyInSelect(
    ['Sim', 'Não'],
    '==== Você deseja continuar? ====',
    { cancel: false },
  );

  if (playAgain === 0) return sorteioScript();
  console.log('Até a próxima!');
};

sorteioScript();
