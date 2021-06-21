const math = require('./math');

describe('Exercício 01', () => {
  it('Faça o mock da funcão subtrair e teste sua chamada.', () => {
    math.subtrair = jest.spyOn(math, 'subtrair');
    
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
});

describe('Exercício 02', () => {
  it('Faça o mock da função "multiplicar" e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest
    .fn()
    .mockReturnValue(10);

    math.multiplicar(2, 5);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 5)).toEqual(10);
  })
});

describe('Exercício 03', () => {
  it('Faça o mock da função somar e implemente uma função de soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar = jest
    .fn()
    .mockImplementation((a, b) => a + b);

    math.somar(2, 2);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(2, 2)).toEqual(4);
    expect(math.somar).toHaveBeenCalledWith(2, 2);
  });
});

describe('Exercício 04', () => {
  it(`Faça o mock da função dividir e um retorno padrão com o valor "15".
    Implemente os seguintes valores para a primeira e segunda chamadas: "2" e "5".
    Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.`, () => {

    math.dividir = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);
    
    expect(math.dividir(10, 5)).toEqual(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(10, 5);
    expect(math.dividir(10, 2)).toEqual(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(10, 2);
    expect(math.dividir(30, 2)).toEqual(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(30, 2);
    
    expect(math.dividir).toHaveBeenCalled();
  });
});

describe('Exercício 05', () => {
  it(`Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original.
    Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
    Restaure a implementação original da função e teste sua execução.`, () => {
    math.subtrair.mockClear();
    const subtrairMock = jest.spyOn(math, 'subtrair');
    subtrairMock.mockImplementation((a, b) => a + b);
    subtrairMock.mockReturnValue(20);
    
    expect(subtrairMock(15, 5)).toBe(20);
    expect(subtrairMock).toHaveBeenCalled();
    expect(subtrairMock).toHaveBeenCalledTimes(1);
    expect(subtrairMock).toHaveBeenCalledWith(15, 5);

    subtrairMock.mockRestore();
    subtrairMock.mockReturnValue(10);
  
    expect(subtrairMock(15, 5)).toBe(10);
    expect(subtrairMock).toHaveBeenCalled();
    expect(subtrairMock).toHaveBeenCalledTimes(1);
    expect(subtrairMock).toHaveBeenCalledWith(15, 5);
  });
});