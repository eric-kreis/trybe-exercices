let pai = document.getElementById('pai');
let primeiroFilho = document.getElementById('primeiroFilho');
let terceiroFilho = document.getElementById('terceiroFilho');
let quartoFilho = document.getElementById('quartoEUltimoFilho');
let segundoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
let remover = [primeiroFilho, terceiroFilho, quartoFilho, segundoFilhoDoFilho];
for (filho of remover) {
  pai.removeChild(filho);
}
