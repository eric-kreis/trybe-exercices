// Callback done() do jest.

test("Não deveria passar!", (done) => {
  setTimeout(() => {
    expect(10).toBe(10);
    done();
  }, 500);
});