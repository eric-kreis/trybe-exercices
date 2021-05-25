const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// Função que confere duas respostas e retorna o valor da questão. N.A (no answered)
const checkAndCount = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

// Função que recebe dois arrays  com resposta e retorna o resultado final da avaliação.
const returnScore = (correctArray, studentArray, callback) => {
  let score = 0;
  for (let index = 0; index < 10; index += 1) {
    score += callback(correctArray[index], studentArray[index]);
  }
  return `Resultado final = ${score}`;
};

console.log(returnScore(rightAnswers, studentAnswers, checkAndCount));