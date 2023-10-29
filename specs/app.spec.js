/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from "../src/app.js";


/**
 * Проверка имени пользователя
 */
describe('nameIsValid', function () {
  it('imports without error', function () {
    expect(nameIsValid).toBeTruthy()
  });
  it('check valid name', () => {
    expect(nameIsValid('Maria')).toBe(true);
    expect(nameIsValid('  Maria  ')).toBe(false);
    expect(nameIsValid('M')).toBe(false);
    expect(nameIsValid('')).toBe(false);
  });
});

/**
 * Удаление пробелов из строки
 */
describe('fullTrim', function () {
  it('imports without error', function () {
    expect(fullTrim).toBeTruthy()
  });
  it('removes spaces from a string', () => {
    expect(fullTrim('  this is a test  ')).toBe('thisisatest');
    expect(fullTrim('   ')).toBe('');
    expect(fullTrim('NoSpaces')).toBe('NoSpaces');
  });
  it('handles empty and undefined input', () => {
    expect(fullTrim('')).toBe('');
    expect(fullTrim(undefined)).toBe('');
  });
});

/**
 * Подсчёт суммы заказа
 */
describe('getTotal', function () {
  it('imports without error', function () {
    expect(getTotal).toBeTruthy()
  })
});

describe.each`
  items                                                       | discount | expected
  ${[{ price: 10, quantity: 10 }]}                            | ${0}     | ${100}
  ${[{ price: 10, quantity: 1 }]}                             | ${0}     | ${10}
  ${[{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]} | ${0}     | ${100}
  ${[{ price: 10, quantity: 0 }, { price: 10, quantity: 9 }]} | ${0}     | ${90}
  ${[{ price: 10, quantity: 10 }]}                            | ${10}    | ${90}
  ${[{ price: 10, quantity: 10 }]}                            | ${100}   | ${0}
  ${[{ price: 10, quantity: 10 }]}                            | ${-10}   | ${'error'}
  ${[{ price: 2, quantity: 100 }]}                            | ${'f'}   | ${'error'}
`('getTotal($items, $discount) = $expected', ({ items, discount, expected }) => {
  test(`getTotal(${items}, ${discount}) should equal ${expected}`, () => {
    if (expected === 'error') {
      expect(() => getTotal(items, discount)).toThrow();
    } else {
      expect(getTotal(items, discount)).toBe(expected);
    }
  });
});
