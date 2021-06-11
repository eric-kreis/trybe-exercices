function hydrate(frase) {
  const numbers = frase.replace(/\D/g, '').split('');
  const quantity = numbers.reduce((acc, str) => 
    parseInt(acc) + parseInt(str));
  if (parseInt(quantity) === 1) {
    return '1 copo de água';
  }
  return `${quantity} copos de água`;
}

module.exports = hydrate;