import { it, expect } from 'vitest';

import { add } from './math';

// it('should summarize all number values in an array', () => {
it('deve somar todos os valores numéricos em um array', () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

// it('should yield NaN if a least one invalid number is provided', () => {
it('deve retornar NaN se pelo menos um número inválido for fornecido', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

// it('should yield a correct sum if an array of numeric string values is provided', () => {
it('deve retornar a soma correta se um array de strings numéricas for fornecido', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

// it('should yield 0 if an empty array is provided', () => {
it('deve retornar 0 se um array vazio for fornecido', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

// it('should throw an error if no value is passed into the function', () => {
it('deve lançar um erro se nenhum valor for passado para a função', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

// it('should throw an error if provided with multiple arguments instead of an array', () => {
it('deve lançar um erro se múltiplos argumentos forem fornecidos ao invés de um array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
