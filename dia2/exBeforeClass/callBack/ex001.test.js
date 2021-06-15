// Callback done() do jest.

test("Só passa de verdade com o done!", (done) => {
  setTimeout(() => {
    expect(10).toBe(10);
    done();
  }, 500);
});