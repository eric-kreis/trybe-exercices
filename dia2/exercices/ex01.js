const oldOnlyNumbers = (a, b, c) => new Promise((resolve, reject) => {
  const params = [a, b, c];
  params.forEach((param) => (
    (typeof param !== 'number') && reject(new Error('Informe apenas números')))
  );

  const result = (a + b) * c;

  if (result < 50) {
    return reject(new Error('Valor muito baixo'));
  }
  resolve(result);
});

/* 
oldOnlyNumbers(111, 2, 10)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

oldOnlyNumbers(1, 2, 10)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

oldOnlyNumbers(1, 2, 'string')
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
*/

// or //

const newOnlyNumbers = async (a, b, c) => {
  const params = [a, b, c];

  for (let index = 0; index < params.length; index += 1) {
    if (typeof params[index] !== 'number') throw new Error('Informe apenas números');
  }

  const result = (a + b) * c;

  if (result < 50) {
    throw new Error('Valor muito baixo');
  }
  return result;
};

/*
newOnlyNumbers(100, 2, 2)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

newOnlyNumbers(1, 2, 2)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

newOnlyNumbers('string', 2, 3)
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
*/

module.exports = newOnlyNumbers;
