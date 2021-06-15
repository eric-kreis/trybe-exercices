const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

it('Testando SumNumbers, soma 5 mais 10', (done) => {
  SumNumbers(10, 5, (result) => {
    expect(result).toBe(15);
    done();
  });
})