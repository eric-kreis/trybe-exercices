function corBackground(element, cor) {
  let elemento = document.querySelector(element);
  elemento.style.background = cor;
}

function corTodosBackground(element, cor) {
  let elemento = document.querySelectorAll(element);
  if (elemento.length === 0) {
    elemento[0].style.background = cor;
  }
  for (let index of elemento) {
    index.style.background = cor;
  }
}

function corFonte(element, cor) {
  let elemento = document.querySelectorAll(element);
  elemento[0].style.color = cor;
}

corFonte('body', 'white');
corBackground('header', '#00B069');
corBackground('.emergency-tasks', '#FF9F84');
corBackground('.no-emergency-tasks', '#F9DB5E');
corTodosBackground('.emergency-tasks h3', '#A500F3');
corTodosBackground('.no-emergency-tasks h3', '#232525');
corTodosBackground('footer', '#003533');