function createButtonSubmit() {
  const form = document.getElementById('formulario');
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.id = 'botao-enviar';
  submitButton.innerHTML = 'Enviar';
  form.appendChild(submitButton);
}

function verifyName() {
  const inputNome = document.getElementById('input-nome');
  if (inputNome.value.length > 0 && inputNome.value.length <= 40) {
    return console.log(inputNome.value);
  }
  return alert('Nome inválido');
}

function verifyEmail() {
  const inputEmail = document.getElementById('input-email');
  if (inputEmail.value.length > 0 && inputEmail.value.length <= 50) {
    return console.log(inputEmail.value);
  }
  return alert('E-mail inválido');
}

function verifyCPF() {
  const inputCPF = document.getElementById('input-cpf');
  if (inputCPF.value.length === 11) {
    return console.log(inputCPF.value);
  }
  return alert('CPF inválido');
}

function verifyAdress() {
  const inputEndereco = document.getElementById('input-endereco');
  if (inputEndereco.value.length > 0 && inputEndereco.value.length <= 200) {
    return console.log(inputEndereco.value);
  }
  return alert('Endereço inválido');
}

function verifyState() {
  const options = document.querySelectorAll('option');
  for (const option of options) {
    if (option.selected) {
      return console.log(option.innerHTML);
    }
  }

}

function verifyAbstract() {
  const resumo = document.getElementById('texto-resumo');
  if (resumo.value.length > 0 && resumo.value.length <= 1000) {
    return console.log(resumo.value);
  }
  return alert('Resumo inválido');
}

function verifyLastJob() {
  const cargo = document.getElementById('input-cargo');
  if (cargo.value.length > 0 && cargo.value.length <= 40) {
    return console.log(cargo.value);
  }
  return alert('Cargo inválido');
}

function submitButtonClick(event) {
  event.preventDefault();
  verifyName();
  verifyEmail();
  verifyCPF();
  verifyAdress();
  verifyState();
  verifyAbstract();
  verifyLastJob();
}

function submitButtonExec() {
  const submitButton = document.getElementById('botao-enviar');
  submitButton.addEventListener('click', submitButtonClick);
}

window.onload = () => {
  createButtonSubmit();
  submitButtonExec();
};