const uppercase = require('./ex001');

describe('Test for upperCase callback', () => {
  it('Testa o nome Eric para upperCase', () => {
    uppercase('Eric', (changed) => {
      expect(changed).toBe('ERIC');
    });
  });

  it('Testa se o nome Eric não está em lowerCase', () => {
    uppercase('Eric', (changed) => {
      expect(changed).not.toBe('eric');
    });
  });

  it('Testa se o nome Eric não está como antes', () => {
    uppercase('Eric', (changed) => {
      expect(changed).not.toBe('Eric');
    });
  });
});