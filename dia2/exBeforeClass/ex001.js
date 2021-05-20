const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const atribuiValores = (objeto, chave, valor) => objeto[chave] = valor;

const numbers = [1, 40, 30, 14, 2, 18, 3, 10, 8, 9].sort((a, b) => a - b);
atribuiValores(customer, 'numbers', numbers);
console.log(customer);