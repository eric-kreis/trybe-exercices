// Retorna true se dois números forem iguais false senão.
const checkSortedNumber = (num1, num2) => (num1 === num2) ? true : false;

// Gera um número sorteado aleatório e por meio da função checSortedNumber confere se é igual ou não.
const giveawayResult = (userNumber, callback) => {
  const sortedNumber = Math.round(Math.random() * 5);
  if (callback(userNumber, sortedNumber)) {
    return 'Parabéns você ganhou!';
  } else {
    return `Tente novamente, o número era ${sortedNumber}.`;
  }
}

// console.log(giveawayResult(4, checkSortedNumber));