const { expect } = require('chai');
const returnStuation = require('../returnSituation');

describe('Função que retorna situação do aluno', () => {
  it('Comportamento de uma nota menor que 7', () => {
    const resposta = returnStuation(4);

    expect(resposta).to.be.equal('reprovado');
    expect(resposta).to.not.equal('aprovado');
  });

  it('Comportamento de uma nota maior que 7', () => {
    const resposta = returnStuation(8.8);

    expect(resposta).to.be.equal('aprovado');
    expect(resposta).to.not.equal('reprovado');
  });

  it('Comportamento de uma nota igual a 7', () => {
    const resposta = returnStuation(7);

    expect(resposta).to.be.equal('aprovado');
    expect(resposta).to.not.equal('reprovado');
  });
});
