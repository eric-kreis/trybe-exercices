let a = 60;
let b = 20;
let c = 46;

function compareTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return console.log(num1)
  } else {
    return console.log(num2)
  }
}

//compareTwoNumbers(a, b);

function compareThreeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    return console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    return console.log(num3)
  } else {
    return console.log('Existe valores iguais')
  }
}

compareThreeNumbers(a, b, c);