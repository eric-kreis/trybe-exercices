let num1 = 12;
let num2 = 11;
let num3 = 14;

function verificaNumPar(n1, n2, n3) {
  if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0) {
    return console.log('True');
  } else {
    return console.log('False');
  }
}

verificaNumPar(num1,num2, num3)