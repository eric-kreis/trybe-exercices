const readline = require('readline-sync');

const getFibonacciSequence = (num, numbers = [0]) => {
  if (num > numbers.length) {
    if (numbers.length === 1) numbers.push(1);
    const nextValue = numbers[numbers.length - 1] + numbers[numbers.length - 2];
    numbers = getFibonacciSequence(num, [...numbers, nextValue]);
  }

  return numbers;
};

const fibonacciScript = () => {
  const usrNum = readline.questionInt('Digite um número: ');
  
  if (usrNum < 1) {
    console.log('Digite um número maior que 0.');
    fibonacciScript();
  }

  const sequence = getFibonacciSequence(usrNum).join(', ');
  const message = (
    sequence.length === 1
    ? 'Este é o primeiro dígito da sequência de fibonacci:'
    : `Estes são os primeiros ${usrNum} dígitos da sequência de fibonacci:`
  );

  console.log(`${message}\n${sequence}`);
};

fibonacciScript();
