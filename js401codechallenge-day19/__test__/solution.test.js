'use strict';

const KaryTree = require('../lib/kary');
const solutionMakeSLL = require('../lib/solution');

describe('Solution Module', () => {
  describe('make SLL', () => {
    let t = new KaryTree();
    t.insert(2);
    t.insert(1, 2);
    t.insert(1, 2);
    t.insert(-3, 2);

    it('traverse the tree and generate a proper sorted Single Link List', () => {
      let list = solutionMakeSLL(t);
      expect(list.head.value).toBe(-3);
      expect(list.head.next.value).toBe(1);

    });

    it('throw an error if the tree passed in is falsey', () => {
      expect(() => solutionMakeSLL(null)).toThrow('Error: k-ary tree arg is invalid');
    });

    it('throw an error if the root node reference is null', () => {
      let t2 = new KaryTree();
      expect(() => solutionMakeSLL(t2)).toThrow('Error: k-ary tree is empty');
    });
  });
});