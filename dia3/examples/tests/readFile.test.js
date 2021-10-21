const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const readFile = require('../readFile');



describe('Função que retorna o conteúdo de um arquivo', () => {
  describe('Comportamento para um arquivo existente', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns("I'm a mock content");
    });
  
    after(() => {
      fs.readFileSync.restore();
    });

    it('O retorno é uma string', () => {
      const content = readFile('io-files/i-exist.txt');
      expect(content).to.be.a('string');
      expect(content).to.not.equal(null);
    });

    it('O retorno é o conteúdo do arquivo', () => {
      const content = readFile('io-files/i-exist.txt');
      expect(content).to.be.equal("I'm a mock content");
    });
  });

  describe('Comportamento para um arquivo inexistente', () => {
    it('Retorna "null"', () => {
      const content = readFile('io-files/i-dont-exist.txt');
      expect(content).to.be.equal(null);
      expect(content).to.not.equal('');
    });
  });

  describe('Comportamento caso nenhum parâmetro seja passado', () => {
    it('Retorna "null"', () => {
      const content = readFile();
      expect(content).to.be.equal(null);
      expect(content).to.not.equal('');
    });
  });
});
