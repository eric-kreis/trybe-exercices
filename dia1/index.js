const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogar adivinhação', script: './sorteio.js' },
  { name: 'Calcular fatorial', script: './fatorial.js' },
  { name: 'Ver dígitos da sequência de fibonacci', script: './fibonacci.js' },
  { name: 'Sair', script: 'stop' },
];

const getUserChoice = () => {
  const options = scripts.map(({ name }, index) => `[${index + 1}] ${name}`);
  options.unshift('O que você deseja? ');
  const message = options.join('\n');

  return readline.questionInt(`${message} \n`);
};

const defaultScript = () => {
  const usrResponse = getUserChoice();

  if (usrResponse > scripts.length || usrResponse < 1) {
    console.log('Opção inválida!');
    return defaultScript();
  }

  const { script } = scripts[usrResponse - 1];
  if (script === 'stop') return console.log('Até mais!');
  require(script);
};

defaultScript();
