const { expect } = require('chai');
const positiveOrNot = require('../functions/positiveOrNot');

describe('Função que diz se um número é "positivo", "negativo" ou "neutro"', () => {
  describe('Verifica entrada e saída da função', () => {
    const param = 8;
    const falseParam = '8';

    it('O parâmetro passado deve ser um número', () => {
      expect(param).to.be.a('number');
    });

    it('Se o parâmetro não for um número deve retornar: "o valor deve ser um número"', () => {
      expect(positiveOrNot(falseParam)).to.be.equal('o valor deve ser um número');
    });

    it('Seu retorno deve ser uma string', () => {
      expect(positiveOrNot(param)).to.be.a('string');
    });
  });

  describe('Quando o número for maior que 0', () => {
    const number = 10;

    it('Seu retorno deve ser: "positivo"', () => {
      expect(positiveOrNot(number)).to.be.equal('positivo');
    });
  });

  describe('Quando o número for igual a 0', () => {
    const number = 0;

    it('Seu retorno deve ser: "neutro"', () => {
      expect(positiveOrNot(number)).to.be.equal('neutro');
    });
  });

  describe('Quando o número for igual a 0', () => {
    const number = 0;

    it('Seu retorno deve ser: "neutro"', () => {
      expect(positiveOrNot(number)).to.be.equal('neutro');
    });
  });

  describe('Quando o número for menor que 0', () => {
    const number = -8;

    it('Seu retorno deve ser: "negativo"', () => {
      expect(positiveOrNot(number)).to.be.equal('negativo');
    });
  });
});
