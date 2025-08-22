import { describe, it, expect } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber', () => {
  it('deve transformar uma string numérica em um número do tipo number', () => {
    // should transform a numeric string into a number type
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBeTypeOf('number');
  });

  it('deve transformar uma string numérica no número correto', () => {
    // should transform a numeric string into the correct number
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBe(+input);
  });

  it('deve retornar NaN para valores não transformáveis', () => {
    // should return NaN for non-transformable values
    const input = 'invalid';
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('deve retornar um array de valores numéricos se um array de strings numéricas for fornecido', () => {
    // should return an array of numeric values if an array of numeric strings is provided
    const numberValues = ['1', '2'];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
    expect(cleanedNumbers[1]).toBeTypeOf('number');
  });
  it('deve retornar um array vazio se um array vazio for fornecido', () => {
    // should return an empty array if an empty array is provided
    const numberValues = [];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers).toEqual([]);
  });
  it('deve lançar um erro se um array com pelo menos uma string vazia for fornecido', () => {
    // should throw an error if an array with at least one empty string is provided
    const numberValues = ['', 1,];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
