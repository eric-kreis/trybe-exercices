const readline = require('readline-sync');

const getAvgSpeed = (distance, time) => distance / time;

const velocidadeScript = () => {
  const distance = readline.questionInt('Digite a distância em metros: ');
  const time = readline.questionInt('Digite o tempo em segundos: ');
  
  console.log(`A velocidade média é: ${getAvgSpeed(distance, time).toFixed(2)}`)
};  

velocidadeScript();
