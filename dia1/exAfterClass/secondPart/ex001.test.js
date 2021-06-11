describe('Exercício 01 - Segunda Parte', () => {
  const { encode, decode } = require('./ex001');

  it('Test if "encode" is a function', () => {
    expect(typeof (encode)).toBe('function');
  });
  it('Test if "decode" is a function', () => {
    expect(typeof (decode)).toBe('function');
  });


  it('Test return of letter a from "encode"', () => {
    expect(encode('amar')).toBe('1m1r');
  });
  it('Test return of letter e from "encode"', () => {
    expect(encode('eve')).toBe('2v2');
  });
  it('Test return of letter i from "encode"', () => {
    expect(encode('its')).toBe('3ts');
  });
  it('Test return of letter o from "encode"', () => {
    expect(encode('ovo')).toBe('4v4');
  });
  it('Test return of letter u from "encode"', () => {
    expect(encode('urru')).toBe('5rr5');
  });


  it('Test return of number 1 from "decode"', () => {
    expect(decode('1m1r')).toBe('amar');
  });
  it('Test return of number 2 from "decode"', () => {
    expect(decode('2v2')).toBe('eve');
  });
  it('Test return of number 3 from "decode"', () => {
    expect(decode('3ts')).toBe('its');
  });
  it('Test return of number 4 from "decode"', () => {
    expect(decode('4v4')).toBe('ovo');
  });
  it('Test return of number 5 from "decode"', () => {
    expect(decode('5rr5')).toBe('urru');
  });


  it('Test all letters', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('Test all numbers', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Test if the parameter is still the same in "encode"', () => {
    const name = 'Eric';
    encode(name);
    expect(name).toBe('Eric');
  });
  it('Test if the parameter is still the same in "decode"', () => {
    const name = '2r3c';
    decode(name);
    expect(name).toBe('2r3c');
  });
});