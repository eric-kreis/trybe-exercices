const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  // https://nodejs.org/api/readline.html#readlinepromisescreateinterfaceoptions
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // https://nodejs.org/api/readline.html#rlquestionquery-options-callback
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
  
      resolve(answer);
    });
  })
};

const readUserFile = async () => {
  try {
    const fileName = await question('Digite o nome do arquivo você deseja ler: ');
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
  } catch (e) {
    console.log('Arquivo inexistente');
  }
};

readUserFile();
