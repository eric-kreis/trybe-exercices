// Cria um email a partir de um nome completo.
const createEmail = fullName => {
  let emailName = fullName.split(' ').join('_');
  return `${emailName}@trybe.com`.toLowerCase();
};

// Retorna um objeto com nome completo e o email gerado a partir deste nome completo.
const returnNameEmail = fullName => (
  {
    nomeCompleto: fullName,
    email: createEmail(fullName),
  }
);

// Retorna um objeto com IDs que recebem o objeto retornado pela returnNameEmail().
const newEmployees = (func) => (
  {
    id1: func('Pedro Guerra da Silva'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }
);

console.table(newEmployees(returnNameEmail));
