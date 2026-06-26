const add = (a, b) => {
  return a + b;
}   

test('add takes two numbers and returns a sum', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});