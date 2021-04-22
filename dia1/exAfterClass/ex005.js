let peca = 'bobo da corte';

function funcaoPecaXadrez(peca) {
  switch (peca.toLowerCase()) {
    case 'piao':
      return console.log('Anda somente uma casa pra frente e mata na diagonal.');
      break;
    case 'cavalo':
      return console.log('Anda e mata em L (pode pular peças.)');
      break;
    case 'bispo':
      return console.log('Anda e mata na diagonal.');
      break;
    case 'torre':
      return console.log('Anda e mata na vertical e horizontal.');
      break;
    case 'rainha':
      return console.log('Anda e mata na vertial, horizontal e nas diagonais.');
      break;
    case 'rei':
      return console.log('Anda e mata em uma casa, pode ser na vertical, horizontal e diagonais. Se o rei morrer o jogo acaba.');
      break;
    default:
      return console.log('[ERROR]Não é uma peça válida!');
  } 
}

funcaoPecaXadrez(peca)