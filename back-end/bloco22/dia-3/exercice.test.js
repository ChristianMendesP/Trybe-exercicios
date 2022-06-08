const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const { myfun } = require('./myfun');

describe('A funcao numberIs', () => {
  const testInputs = [-3, 3, 0, 'string qualquer'];
  const expcOutput = ['negativo', 'positivo', 'neutro', 'Nao e numero'];

  sinon.stub(myfun, 'numberIs')
    .withArgs(testInputs[0]).returns(expcOutput[0])
    .withArgs(testInputs[1]).returns(expcOutput[1])
    .withArgs(testInputs[2]).returns(expcOutput[2])
    .withArgs(testInputs[3]).throws(new Error(expcOutput[3]));

  it('retorna "negativo" quando chamada com o parametro -3', () => {
    const result = myfun.numberIs(-3);
    expect(result).to.be.equal('negativo');
  });

  it('retorna "positivo" quando chamada com o parametro 3', () => {
    const result = myfun.numberIs(3);
    expect(result).to.be.equal('positivo');
  });

  it('retorna "neutro" quando chamada com o parametro 0', () => {
    const result = myfun.numberIs(0);
    expect(result).to.be.equal('neutro');
  });

  it('retorna mensagem de erro quando chamada por uma string', () => {
    try {
      myfun.numberIs('string');
    } catch(e) {
      expect(e.message).to.be.equal('neutro');
    }
  });
});
