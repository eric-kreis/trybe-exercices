window.onload = function () {
  //Ativa a side bar;
  function activeSideBar() {
    const sideButton = document.getElementById('active-section');
    const editBar = document.querySelector('.edit-bar');
    const options = document.querySelector('.options');
    sideButton.addEventListener('click', function () {
      editBar.classList.toggle('edit-bar--open');
      options.classList.toggle('options--open');
    });
  }

  //Cria os botões que mudam o background;
  function createColorButton(ID) {
    const colorButton = document.createElement('button');
    const sectionOfButtons = document.getElementById('color-buttons');
    colorButton.className = 'button';
    colorButton.id = ID;
    sectionOfButtons.appendChild(colorButton);
  }

  createColorButton('whiteBG')
  createColorButton('blueBG');
  createColorButton('purpleBG');
  createColorButton('pinkBG');
  createColorButton('greenBG');

  //Muda adiciona evento para mudar o background;
  function colorButtonsExec () {
    const whiteButton = document.getElementById('whiteBG');
    const blueButton = document.getElementById('blueBG');
    const purpleButton = document.getElementById('purpleBG');
    const pinkButton = document.getElementById('pinkBG');
    const greenButton = document.getElementById('greenBG');
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

  //Muda o cursor do mouse ao passar em cima de um botão;
  function mouseBGPointer() {
    const whiteButton = document.getElementById('whiteBG');
    const blueButton = document.getElementById('blueBG');
    const purpleButton = document.getElementById('purpleBG');
    const pinkButton = document.getElementById('pinkBG');
    const greenButton = document.getElementById('greenBG');
    
    whiteButton.addEventListener('mouseover', function () {
      whiteButton.style.cursor = 'pointer';
    });
    blueButton.addEventListener('mouseover', function () {
      blueButton.style.cursor = 'pointer';
    });
    purpleButton.addEventListener('mouseover', function () {
      purpleButton.style.cursor = 'pointer';
    });
    pinkButton.addEventListener('mouseover', function () {
      pinkButton.style.cursor = 'pointer';
    });
    greenButton.addEventListener('mouseover', function () {
      greenButton.style.cursor = 'pointer';
    });
  }

  function createFontColorsButton(ID) {
    const fontButton = document.createElement('button');
    const sectionOfButtons = document.getElementById('font-color-buttons');
    fontButton.className = 'button';
    fontButton.id = ID;
    sectionOfButtons.appendChild(fontButton);
  }

  createFontColorsButton('blackTXT');
  createFontColorsButton('blueTXT');
  createFontColorsButton('purpleTXT');
  createFontColorsButton('pinkTXT');
  createFontColorsButton('greenTXT');

  function fontColorsButtonExec() {
    const whiteButton = document.getElementById('blackTXT');
    const blueButton = document.getElementById('blueTXT');
    const purpleButton = document.getElementById('purpleTXT');
    const pinkButton = document.getElementById('pinkTXT');
    const greenButton = document.getElementById('greenTXT');
    let corpo = document.querySelectorAll('body');

    whiteButton.addEventListener('click', function () {
      corpo[0].style.color = 'black';
    });
    blueButton.addEventListener('click', function () {
      corpo[0].style.color = '#39A5EA';
    });
    purpleButton.addEventListener('click', function () {
      corpo[0].style.color = '#9B1EE9';
    });
    pinkButton.addEventListener('click', function () {
      corpo[0].style.color = '#D32F7C';
    });
    greenButton.addEventListener('click', function () {
      corpo[0].style.color = '#00BC1C';
    });
  }

  function mouseTXTPointer() {
    const whiteButton = document.getElementById('blackTXT');
    const blueButton = document.getElementById('blueTXT');
    const purpleButton = document.getElementById('purpleTXT');
    const pinkButton = document.getElementById('pinkTXT');
    const greenButton = document.getElementById('greenTXT');
    
    whiteButton.addEventListener('mouseover', function () {
      whiteButton.style.cursor = 'pointer';
    });
    blueButton.addEventListener('mouseover', function () {
      blueButton.style.cursor = 'pointer';
    });
    purpleButton.addEventListener('mouseover', function () {
      purpleButton.style.cursor = 'pointer';
    });
    pinkButton.addEventListener('mouseover', function () {
      pinkButton.style.cursor = 'pointer';
    });
    greenButton.addEventListener('mouseover', function () {
      greenButton.style.cursor = 'pointer';
    });
  }

  function createSizeFontButton(ID, txt) {
    const fontSizeButton = document.createElement('button');
    const sectionOfButtons = document.getElementById('font-size-buttons');
    fontSizeButton.className = 'size-button';
    fontSizeButton.id = ID;
    fontSizeButton.innerText = txt;
    sectionOfButtons.appendChild(fontSizeButton);
  }

  createSizeFontButton('plusF', '+');
  createSizeFontButton('lessF', '-');

  function fontSizeButtonExec() {
    const plusButton = document.getElementById('plusF');
    const lessButton = document.getElementById('lessF');
    const p = document.querySelector('.fourth-content');
    const paragraphs = document.querySelectorAll('.content');
    const compStyles = window.getComputedStyle(p);
    plusButton.addEventListener('click', function () {
      for (let paragraph of paragraphs) {
        paragraph.style.fontSize = `${parseInt(compStyles.getPropertyValue('font-size')) + 2}px`;
      }
    });
    lessButton.addEventListener('click', function () {
      for (let paragraph of paragraphs) {
        paragraph.style.fontSize = `${parseInt(compStyles.getPropertyValue('font-size')) - 2}px`;
      }
    });
  }

  function mouseFontSizePointer() {
    const plusButton = document.getElementById('plusF');
    const lessButton = document.getElementById('lessF');
    plusButton.addEventListener('mouseover', function () {
      plusButton.style.cursor = 'pointer';
    });
    lessButton.addEventListener('mouseover', function () {
      lessButton.style.cursor = 'pointer';
    });
  }

  function createLineHeightButton(ID, txt) {
    const fontSizeButton = document.createElement('button');
    const sectionOfButtons = document.getElementById('line-height-buttons');
    fontSizeButton.className = 'size-button';
    fontSizeButton.id = ID;
    fontSizeButton.innerText = txt;
    sectionOfButtons.appendChild(fontSizeButton);
  }

  createLineHeightButton('plusL', '+');
  createLineHeightButton('lessL', '-');

  function lineHeightButtonExec() {
    const plusButton = document.getElementById('plusL');
    const lessButton = document.getElementById('lessL');
    const p = document.querySelector('.fourth-content');
    const paragraphs = document.querySelectorAll('.content');
    const compStyles = window.getComputedStyle(p);
    plusButton.addEventListener('click', function () {
      for (let paragraph of paragraphs) {
        paragraph.style.lineHeight = `${parseInt(compStyles.getPropertyValue('line-height')) + 2}px`;
      }
    });
    lessButton.addEventListener('click', function () {
      for (let paragraph of paragraphs) {
        paragraph.style.lineHeight = `${parseInt(compStyles.getPropertyValue('line-height')) - 2}px`;
      }
    });
  }

  function mouselineHeightPointer() {
    const plusButton = document.getElementById('plusL');
    const lessButton = document.getElementById('lessL');
    plusButton.addEventListener('mouseover', function () {
      plusButton.style.cursor = 'pointer';
    });
    lessButton.addEventListener('mouseover', function () {
      lessButton.style.cursor = 'pointer';
    });
  }

  activeSideBar();
  mouseBGPointer()
  colorButtonsExec();
  fontColorsButtonExec();
  mouseTXTPointer();
  fontSizeButtonExec();
  mouseFontSizePointer();
  lineHeightButtonExec();
  mouselineHeightPointer();
}