function somaValores(num) {
  let valoresSomados = 0;
  for (index = 1; index <= num; index++) {
    valoresSomados += index;
  };
  return console.log(valoresSomados);
};

somaValores(5);