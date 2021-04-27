import { exampleFunction } from './utils';

test('function a=7', () => {
  const result = exampleFunction(7)
  expect(result).toBe(7)
})

test('function b=3 c=2', () => {
  const result = exampleFunction(0, 3, 2)
  expect(result).toBe(5)
})
