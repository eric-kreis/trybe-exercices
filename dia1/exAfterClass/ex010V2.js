let salario = 1900;
let INSS = null;
let IR = null;

function faixaINSS(s, i1) {
  if (s <= 1556.94) {
    return i1 = 0.08;
  } else if (s >= 1556.94) {
    return i1 = 0.09;
  } else if (s > 2594.92) {
    return i1 = 0.11;
  }
}

function faixaIR(s, i2) {
  if (s > 1903.98 || s <= 2594.92) {
    return i2 = 0.075;
  } else if (s > 2826.66 || s <= 3751.05) {
    return i2 = 0.15;
  } else if (s > 3751.05 || s <= 4664.68) {
    return i2 = 0.225;
  } else {
    return i2 = 0.275;
  }
}

function salarioLiquido(s, i1, i2) {
  if (s <= 1556.94) {
    s = s - (s * i1);
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s >= 1556.94 || s <= 1903.98) {
    s = s - (s * i1)
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 1903.98 || s <= 2594.92) {
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 2594.92 || s <= 2826.66) {
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 2826.66 || s <= 3751.05) {
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 3751.05 || s <= 4664.68) {
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 4664.68 || s <= 5189.82) {
    s = s - ((s * i1) + (s * i2)) 
    return console.log(`Seu salário é igual à ${s}`);
  } else {
    s = s - (i1 + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  }
}

salarioLiquido(salario, faixaINSS(salario, INSS), faixaIR(salario, IR))