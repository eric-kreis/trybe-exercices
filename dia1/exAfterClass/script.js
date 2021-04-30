 /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
function modificaTexto() {
  let texto = document.getElementById('txt');
  texto.innerHTML = 'Quero estar <strong>super</strong> empregado'
}

modificaTexto();

function modifyBack(element, color) {
  let mainContent = document.getElementsByClassName(element);
  mainContent[0].style.background = color;
}

modifyBack('main-content', 'rgb(76,164,109');
modifyBack('center-content', 'white');

function textCorrect(element) {
  let titulo = document.getElementsByTagName(element);
  titulo[0].innerHTML = 'Exercício 5.1 - JavaEscripit';
}

textCorrect('h1')

function pToUpperCase () {
  let paragraphs = document.getElementsByTagName('p');
  for (let index in paragraphs) {
    paragraphs[index].innerHTML = paragraphs[index].innerHTML.toUpperCase() 
    console.log(paragraphs[index].innerText)
  }
}

pToUpperCase();