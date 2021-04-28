function transformNum(numRom) {
  let conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  let numbers = [];
  let result = 0;
  for (let key in numRom) {
    numbers[key] = conversion[numRom[key]];
  };
  for (let index in numbers) {
    if (numbers[index - 1] < numbers[index]) {
      result += numbers[index] - numbers[index - 1];
      result = result - numbers[index -1];
    } else {
      result += numbers[index];
    };
  };

  return console.log(result);
};

transformNum('IX');