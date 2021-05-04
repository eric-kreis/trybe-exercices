const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function changeTech(element) {
  let anterior = document.querySelector('.tech');
  anterior.className = '';
  element.target.className = 'tech';
}

function changeText() {
  let tech = document.querySelector('.tech');
  tech.innerText = input.value;
}

function redirect() {
  alert('Você será redirecionado!');
  window.open('https://eric-kreis.github.io/');
  // document.location.href = "https://bhdasbduiasbdas.com";
}

function changeColor(element) {
  element.target.style.color = '#2fc18c';
}

function resetColor(element) {
  element.target.style.color = 'white';
}

input.addEventListener('change', changeText);
divUm.addEventListener('click', changeTech);
divDois.addEventListener('click', changeTech);
divTres.addEventListener('click', changeTech);
myWebpage.addEventListener('dblclick', redirect);
myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', resetColor);

/* 
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
 */

function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);