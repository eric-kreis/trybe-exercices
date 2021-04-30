let body = document.querySelector('body');
let h1 = document.createElement('h1');
let divMain = document.createElement('div');
let divCenter = document.createElement('div');
let pCenter = document.createElement('p');
let divLeft = document.createElement('div');
let divRight = document.createElement('div');
let imagem = document.createElement('img');
let listaNaoOrdenada = document.createElement('ul');
let firstH3 = document.createElement('h3');
let secondH3 = document.createElement('h3');
let thirdH3 = document.createElement('h3');

h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

divMain.className = 'main-content';
body.appendChild(divMain);

divCenter.className = 'center-content';
divMain.appendChild(divCenter);

pCenter.innerText = 'Algum texto';
divCenter.appendChild(pCenter);

divLeft.className = 'left-content';
divMain.appendChild(divLeft);

divRight.className = 'right-content';
divMain.appendChild(divRight);

imagem.src = 'https://picsum.photos/200'
imagem.className = 'small-image';
divLeft.appendChild(imagem);

divRight.appendChild(listaNaoOrdenada);

let elementosLi = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
};

for (let key in elementosLi) {
  let liDaLista = document.createElement('li');
  liDaLista.innerHTML = `${elementosLi[key]}`;
  listaNaoOrdenada.appendChild(liDaLista);
}

divMain.appendChild(firstH3);
divMain.appendChild(secondH3);
divMain.appendChild(thirdH3);


//part 2

h1.className = 'title';
firstH3.className = 'description';
secondH3.className = 'description';
thirdH3.className = 'description';
divMain.removeChild(divLeft);
divRight.style.margin = 'auto';
divCenter.parentNode.style.background = 'green';
listaNaoOrdenada.removeChild(listaNaoOrdenada.lastChild);
listaNaoOrdenada.removeChild(listaNaoOrdenada.lastChild);