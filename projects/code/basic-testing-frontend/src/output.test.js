import { describe, it, expect } from 'vitest';

import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('deve retornar uma string, não importa qual valor seja passado', () => {
    // should return a string, no matter which value is passed in
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('deve retornar uma string que contenha o resultado do cálculo se um número for fornecido como resultado', () => {
    // should return a string that contains the calculation result if a number is provided as a result
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('deve retornar uma string vazia se "no-calc" for fornecido como resultado', () => {
    // should return an empty string if "no-calc" is provided as a result
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('deve retornar uma string que contenha "Invalid" se "invalid" for fornecido como resultado', () => {
    // should return a string that contains "Invalid" if "invalid" is provided as a result
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});