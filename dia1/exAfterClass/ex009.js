let custo = 100;
let imposto = 1.2;
let valorVenda = 209;
custo *= imposto;
let lucro = valorVenda - custo;

function milUnidades(c, l) {
  if (c <= 0) {
    return console.log('[ERROR] Valor inválido!');
  } else {
    return console.log(`O lucro na venda de mil unidades foi igual à ${l * 1000}`)
  }
}

milUnidades(custo, lucro)