const sum = require('./sum');

it('sums two variables', () => {
  expect(sum(2,3)).toBe(5);
});