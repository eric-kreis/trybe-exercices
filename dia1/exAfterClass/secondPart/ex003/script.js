const botaoClique = document.getElementById('botao-clique');
const main = document.querySelector('main');

const criaContador = () => {
  const div = document.createElement('div');
  let clickCount = 0;
  div.innerHTML = 0;
  botaoClique.addEventListener('click', () => {
    clickCount += 1;
    div.innerHTML = clique;
  });
  main.appendChild(div);
}

criaContador();
