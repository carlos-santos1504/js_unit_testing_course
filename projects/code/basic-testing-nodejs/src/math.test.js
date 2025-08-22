import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add()', () => {
  it('should return the sum if all items are numbers', () => {
    const numbers = [1, 2];
    const result = add(numbers);
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
  });

  it('should return NaN if any number is invalid', () => {
    const inputs = ['invalid', 1];
    const result = add(inputs);
    expect(result).toBeNaN();
  });

  it('should sum if the array contains numeric strings', () => {
    const numbers = ['1', '2'];
    const result = add(numbers);
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
    expect(result).toBe(expectedResult);
  });

  it('should return 0 if the array is empty', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  it('should throw an error if no argument is passed', () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow(/numbers is not iterable/);
  });

  it('should throw an error if the argument is not an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };
    expect(resultFn).toThrow(/numbers is not iterable/);
  });
});
