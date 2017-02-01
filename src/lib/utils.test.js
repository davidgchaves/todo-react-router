import { partial, pipe } from './utils'

test('partial partially applies a function with the passed arguments', () => {
  const add = (a, b, c, d) => a + b + c + d

  expect(
    partial(add, 10, 20)(5, 5)
  ).toBe(40)
})

test('pipe defines a left-to-right list of functions to be applied', () => {
  const plusOne = x => x + 1
  const timesTwo = x => x * 2

  expect(
    pipe(plusOne, timesTwo, timesTwo, plusOne)(10)
  ).toBe(45)
})
