import {it, expect, describe} from 'vitest';
import { transformToNumber } from './numbers';

describe('transformToNumber', () => {
  it('should transform a numeric string to a number', () => {
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBeTypeOf('number');
  });

  it('should transform a numeric string to a number', () => {
    const input = '1';
    const result = transformToNumber(input);
    expect(result).toBe(+input);
  });
});

describe('transformToNumber with invalid input', () => {
  it('should yield NaN for an empty string', () => {
    const input = 'invalid';
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});