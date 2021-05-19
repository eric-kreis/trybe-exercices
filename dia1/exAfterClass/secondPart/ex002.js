// Função para retornar a maior palavra de uma frase.
const longestWord = (frase) => {

  // Compara palavras.
  const verificaPalavra = (maiorPalavra, palavra) => (
    maiorPalavra.length < palavra.length ? maiorPalavra = palavra : maiorPalavra
  )

  const fraseArray = frase.split(' ');
  let maiorPalavra = fraseArray[0];
  let resultado = null;
  for (const palavra of fraseArray) {
    resultado = verificaPalavra(maiorPalavra, palavra);
  }
  return resultado;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));