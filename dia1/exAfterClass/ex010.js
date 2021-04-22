let salario = 2033;
let INSS = null;
let IR = null;

function salarioLiquido(s, i1, i2) {
  if (s <= 1556.94) {
    i1 = 0.08;
    s = s - (s * i1);
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s >= 1556.94 || s <= 1903.98) {
    i1 = 0.09;
    s = s - (s * i1)
  } else if (s > 1903.98 || s <= 2594.92) {
    i1 = 0.09;
    i2 = 0.075;
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 2594.92 || s <= 2826.66) {
    i1 = 0.11;
    i2 = 0.075;
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 2826.66 || s <= 3751.05) {
    i1 = 0.11;
    i2 = 0.15;
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 3751.05 || s <= 4664.68) {
    i1 = 0.11;
    i2 = 0.225;
    s = s - ((s * i1) + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  } else if (s > 4664.68 || s <= 5189.82) {
    i1 = 0.11;
    i2 = 0.275;
    s = s - ((s * i1) + (s * i2)) 
    return console.log(`Seu salário é igual à ${s}`);
  } else {
    i1 = 570;
    i2 = 0.275;
    s = s - (i1 + (s * i2));
    return console.log(`Seu salário é igual à ${s}`);
  }
}

salarioLiquido(salario, INSS, IR)