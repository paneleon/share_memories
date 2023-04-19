function welcome(name) {
  return `Welcome to memories, ${name}!`;
}

test('displays proper message', () => {
  expect(welcome('Anne')).toBe('Welcome to memories, Anne!');
});
