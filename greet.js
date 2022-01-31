// pure function, has no side effect
export function greet(name = 'stranger') {
  if (name === 'Mareike' || name === 'Paul' || name === 'Jerry') {
    return 'Hello coach!';
  }
  return `Hello ${name}!`;
}
