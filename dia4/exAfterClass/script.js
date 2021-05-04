window.onload = function () {

  // Cria os botões que mudam o background;
  function createColorButton(ID) {
    const colorButton = document.createElement('button');
    const sectionOfButtons = document.getElementById('color-buttons');
    colorButton.className = 'button';
    colorButton.id = ID;
    sectionOfButtons.appendChild(colorButton);
  }

  createColorButton('white')
  createColorButton('blue');
  createColorButton('purple');
  createColorButton('pink');
  createColorButton('green');

  //Muda adiciona evento para mudar o background;
  function colorButtonsExec () {
    const whiteButton = document.getElementById('white');
    const blueButton = document.getElementById('blue');
    const purpleButton = document.getElementById('purple');
    const pinkButton = document.getElementById('pink');
    const greenButton = document.getElementById('green');
    let corpo = document.querySelectorAll('body');

    whiteButton.addEventListener('click', function () {
      corpo[0].style.backgroundColor = 'white';
    });
    blueButton.addEventListener('click', function () {
      corpo[0].style.backgroundColor = '#B9D7EA';
    });
    purpleButton.addEventListener('click', function () {
      corpo[0].style.backgroundColor = '#CEBEE1';
    });
    pinkButton.addEventListener('click', function () {
      corpo[0].style.backgroundColor = '#F7DBD7';
    });
    greenButton.addEventListener('click', function () {
      corpo[0].style.backgroundColor = '#C7F7C8';
    });
  }

  function mousePointer() {
    const whiteButton = document.getElementById('white');
    const blueButton = document.getElementById('blue');
    const purpleButton = document.getElementById('purple');
    const pinkButton = document.getElementById('pink');
    const greenButton = document.getElementById('green');
    
    whiteButton.addEventListener('mouseover', function () {
      whiteButton.style.cursor = 'pointer'
    });
    blueButton.addEventListener('mouseover', function () {
      blueButton.style.cursor = 'pointer'
    });
    purpleButton.addEventListener('mouseover', function () {
      purpleButton.style.cursor = 'pointer'
    });
    pinkButton.addEventListener('mouseover', function () {
      pinkButton.style.cursor = 'pointer'
    });
    greenButton.addEventListener('mouseover', function () {
      greenButton.style.cursor = 'pointer'
    });
  }
  mousePointer()
  colorButtonsExec();
}