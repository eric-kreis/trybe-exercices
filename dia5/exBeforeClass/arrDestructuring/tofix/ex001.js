const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]);

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, executaSaudacao] = saudacoes;

executaSaudacao(saudacao);