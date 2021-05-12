function resultElement(input) {
  const resultado = document.getElementById('sessao-resultado');
  const elementoResultado = document.createElement('div');
  elementoResultado.innerHTML = `${input.name}: ${input.value}.`;
  resultado.appendChild(elementoResultado);
}

function failedElement(input, message) {
  const resultado = document.getElementById('sessao-resultado');
  const elementoResultado = document.createElement('div');
  elementoResultado.innerHTML = `${input.name}: ${message}.`;
  resultado.appendChild(elementoResultado);
}

function verifyName() {
  const inputNome = document.getElementById('input-nome');
  if (inputNome.value.length === 0) {
    return failedElement(inputNome, 'Digite um nome para continuar');
  }
  if (inputNome.value.length <= 40) {
    return resultElement(inputNome);
  }
  return failedElement(inputNome, 'Nome inválido');
}

function verifyEmail() {
  const inputEmail = document.getElementById('input-email');
  if (inputEmail.value.length === 0) {
    return failedElement(inputEmail, 'Digite um e-mail para continuar');
  }
  if (inputEmail.value.length <= 50 && inputEmail.value.includes('@')) {
    return resultElement(inputEmail);
  }
  return failedElement(inputEmail, 'e-mail inválido');
}

function verifyCPF() {
  const inputCPF = document.getElementById('input-cpf');
  if (inputCPF.value.length === 0) {
    return failedElement(inputCPF, 'Digite um CPF para continuar');
  }
  if (inputCPF.value.length === 11) {
    return resultElement(inputCPF);
  }
  return failedElement(inputCPF, 'CPF inválido');
}

function verifyAdress() {
  const inputEndereco = document.getElementById('input-endereco');
  if (inputEndereco.value.length === 0) {
    return failedElement(inputEndereco, 'Digite um endereço para continuar');
  }
  if (inputEndereco.value.length > 0 && inputEndereco.value.length <= 200) {
    return resultElement(inputEndereco);
  }
  return failedElement(inputEndereco, 'endereço inválido');
}

function verifyState() {
  const options = document.querySelectorAll('option');
  for (const option of options) {
    if (option.selected) {
      const resultado = document.getElementById('sessao-resultado');
      const selecionada = document.createElement('div');
      selecionada.innerHTML = `Estado: ${option.innerHTML}.`;
      return resultado.appendChild(selecionada);
    }
  }
}

function verifyAbstract() {
  const resumo = document.getElementById('texto-resumo');
  if (resumo.value.length === 0) {
    return failedElement(resumo, 'Digite um resumo para continuar');
  }
  if (resumo.value.length > 0 && resumo.value.length <= 1000) {
    return resultElement(resumo)
  }
  return failedElement(resumo, 'resumo inválido');
}

function verifyLastJob() {
  const cargo = document.getElementById('input-cargo');
  if (cargo.value.length === 0) {
    return failedElement(cargo, 'Digite um cargo para continuar');
  }
  if (cargo.value.length > 0 && cargo.value.length <= 40) {
    return resultElement(cargo)
  }
  return failedElement(cargo, 'cargo inválido');
}

function isValidDate(day, month, year) {
  if (Number(day) > 0 && Number(day) <= 31) {
    if (Number(month) > 0 && Number(month) <= 12) {
      if (Number(year) > 0) {
        return true;
      }
    }
  }
  return false;
}

function createFailedMessage(message) {
  const resultado = document.getElementById('sessao-resultado');
  const date = document.createElement('div');
  date.innerHTML = `data-de-inicio: ${message}.`;
  return resultado.appendChild(date);
}

function failedDate(day, month, year) {
  if (Number(day) <= 0 || Number(day) > 31) {
    createFailedMessage('Dia inválido');
  }
  if (Number(month) <= 0 || Number(month) > 12) {
    createFailedMessage('Mês inválido');
  }
  if (Number(year) <= 0) {
    createFailedMessage('Ano inválido');
  }
}

function verifyDate() {
  const date = document.getElementById('input-date');
  const dateValue = Array.from(date.value);
  const day = dateValue[0] + dateValue[1];
  const month = dateValue[3] + dateValue[4];
  const year = dateValue[6] + dateValue[7] + dateValue[8] + dateValue[9];
  if (isValidDate(day, month, year)) {
    return resultElement(date);
  }
  if (dateValue.length === 10) {
    return failedDate(day, month, year);
  }
  return createFailedMessage('Formato de data inválida');
}

function createButtonSubmit() {
  const form = document.getElementById('formulario');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = 'botao-enviar';
  submitButton.innerHTML = 'Enviar';
  form.appendChild(submitButton);
}

function submitButtonClick(event) {
  const resultado = document.getElementById('sessao-resultado');
  resultado.innerHTML = '';
  event.preventDefault();
  verifyName();
  verifyEmail();
  verifyCPF();
  verifyAdress();
  verifyState();
  verifyAbstract();
  verifyLastJob();
  verifyDate();
}

function submitButtonExec() {
  const submitButton = document.getElementById('botao-enviar');
  submitButton.addEventListener('click', submitButtonClick);
}

function createClearButton() {
  const form = document.getElementById('formulario');
  const clearButton = document.createElement('button');
  clearButton.id = 'botao-limpar';
  clearButton.innerHTML = 'Limpar';
  form.appendChild(clearButton);
}

function clearButtonClick(event) {
  const inputs = document.querySelectorAll('input');
  const resultado = document.getElementById('sessao-resultado');
  event.preventDefault();
  resultado.innerHTML = '';
  for (const input of inputs) {
    input.value = '';
  }
}

function clearButtonExec() {
  const clearButton = document.getElementById('botao-limpar');
  clearButton.addEventListener('click', clearButtonClick)
}

window.onload = () => {
  createClearButton();
  clearButtonExec();
  createButtonSubmit();
  submitButtonExec();
};