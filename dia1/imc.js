const readline = require('readline-sync');

const getImc = (weight, height) => (
  Number((weight / ((height / 100) ** 2)).toFixed(2))
);

const getSituation = (imc) => {
  if (imc < 18.5) return 'Magreza';
  if (imc >= 18.5 && imc <= 24.9) return 'Normal';
  if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
  if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
  if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
  if (imc >= 40) return 'Obesidade graus III e IV';
};

const imcScript = () => {
  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionInt('Qual sua altura (em centímetros)? ');
  
  const imc = getImc(weight, height)
  const situation = getSituation(imc);
  
  console.log(`IMC: ${imc}`)
  console.log(`Situação: ${situation}.`);
};

imcScript();
