describe('Exercício 04 - Primeira Parte', () => {
  const myFizzBuzz = require('../exercices/ex004');

  it('Test if "myFizzBuzz" returns the expected if the paramater was divisible per 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Test if "myFizzBuzz" returns the expected if the paramater was divisible only per 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Test if "myFizzBuzz" returns the expected if the paramater was divisible only per 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Test if "myFizzBuzz" returns the expected if the paramater was not divisible only per 3 or 5', () => {
    expect(7).toBe(myFizzBuzz(7));
  });

  it('Test if "myFizzBuzz" returns false if the parameter was not a number', () => {
    expect(false).toBe(myFizzBuzz('2'));
  });

});