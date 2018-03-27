'use strict';

const solution = require('../lib/solution');

describe('Solution Modules', () => {
  describe('recursive fibonacci approache', () => {
    describe('Valid', () => {
      it('should return the correct Fibonacci number for both base cases', () => {
        expect(solution.recursiveFib(0)).toEqual(0);
        expect(solution.recursiveFib(1)).toEqual(1);
      });


    });
    describe('Invalid', () => {
      it('invalid data type', () => {
        expect(() => solution.recursiveFib([])).toThrow('invalid n value');
      });
      it('error for negative number', () => {
        expect(() => solution.recursiveFib(-10)).toThrow('invalid n value');
      });
    });
  });


  describe('iterative fibonacci approach', () => {
    describe('Valid', () => {
      it('return the correct Fib # for both base cases', () => {
        expect(solution.iterativeFib(0)).toEqual(0);
      });

    });


  });
});