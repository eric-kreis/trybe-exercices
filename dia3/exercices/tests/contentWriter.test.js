const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon')
const contentWriter = require('../functions/contentWriter');

describe('Função que escreve conteúdo em arquivo', () => {
  describe('Com parâmetros corretos', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });

    const archive = 'contentWriter.txt';
    const content = "I'm the content";
  
    it('Seu retorno deve ser uma string', () => {
      expect(contentWriter(archive, content)).to.be.a('string');
    });

    it('Seu retorno deve ser: "ok"', () => {
      expect(contentWriter(archive, content)).to.be.equal('ok');
    });
  });

  describe('Com parâmetros incorretos', () => {
    const archive = 'contentWriter.txt';
    const content = "I'm a new content";
    const expectedReturn = 'informe parâmetros corretos';

    it(`Seu retorno deve ser: "${expectedReturn}"`, () => {
      expect(contentWriter(archive)).to.be.equal(expectedReturn);
      expect(contentWriter('contentWriter', content)).to.be.equal(expectedReturn);
    });

    it('Seu retorno deve ser uma string', () => {
      expect(contentWriter(archive)).to.be.a('string');
    });
  });
});
