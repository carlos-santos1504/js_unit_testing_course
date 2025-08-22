import {describe,it, expect, should} from 'vitest';
import { generateResultText } from './output.js';

describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = false;

    const resultText1 = generateResultText(val1);
    const resultText2 = generateResultText(val2);
    const resultText3 = generateResultText(val3);

    expect(resultText1).toBeTypeOf('string');
    expect(resultText2).toBeTypeOf('string');
    expect(resultText3).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;
    const resultText = generateResultText(result);
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';
    const resultText = generateResultText(result);
    expect(resultText).toBe('');
  });

  it('should return string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';
    const resultText = generateResultText(result);
    expect(resultText).toContain('Invalid');
  });
});