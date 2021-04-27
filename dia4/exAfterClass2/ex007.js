function verificaFimPalavra(palavra, fimPalavra) {
  let palindromoPalavra = '';
  let palindromoFimPalavra = '';
  for (let index = palavra.length - 1; index >= 0; index--) {
    palindromoPalavra += palavra[index];
  };
  for (let index1 = fimPalavra.length - 1; index1 >= 0; index1--) {
    palindromoFimPalavra += fimPalavra[index1];
  };
  for (let index2 = 0; index2 < palindromoFimPalavra.length; index2 += 1) {
    if (palindromoPalavra[index2] !== palindromoFimPalavra[index2]) {
      return console.log(false);
    } else {
      return console.log(true);
    }
  };
};

verificaFimPalavra('trybe', 'yb');