function add(num1, num2) {
  num1 = num1.toString().split("").reverse().join("");
  num2 = num2.toString().split("").reverse().join("");
  if (num1.length < num2.length) {
      [num1, num2] = [num2, num1];
  }
  let strResult = '';
  for (let index = 0; index < num1.length; index++) {
      let secondNumber = Number(num1[index]);
      let firstNumber = Number(num2[index] || 0);
    
      strResult = String(firstNumber + secondNumber) + strResult;
  }
  return Number(strResult);
}

console.log(add(2, 11))