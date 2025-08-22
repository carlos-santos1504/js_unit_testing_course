import { it, expect, describe } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  // it('should throw an error, if an empty string is provided', () => {
  it('deve lançar um erro se uma string vazia for fornecida', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  // it('should throw an error with a message that contains a reason (must not be empty)', () => {
  it('deve lançar um erro com uma mensagem que contenha o motivo (não deve ser vazio)', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  // it('should throw an error if a long string of blanks is provided', () => {
  it('deve lançar um erro se uma longa string de espaços em branco for fornecida', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  // it('should throw an error if any other value than a string is provided', () => {
  it('deve lançar um erro se qualquer valor diferente de string for fornecido', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  // it('should not throw an error, if a non-empty string is provided', () => {
  it('não deve lançar um erro se uma string não vazia for fornecida', () => {
    const input = 'valid';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });
});

describe('validateNumber()', () => {
  // it('should throw an error if NaN is provided', () => {
  it('deve lançar um erro se NaN for fornecido', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  // it('should throw an error with a message that contains a reason (invalid number)', () => {
  it('deve lançar um erro com uma mensagem que contenha o motivo (número inválido)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  // it('should throw an error if a non-numeric value is provided', () => {
  it('deve lançar um erro se um valor não numérico for fornecido', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  // it('should not throw an error, if a number is provided', () => {
  it('não deve lançar um erro se um número for fornecido', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
