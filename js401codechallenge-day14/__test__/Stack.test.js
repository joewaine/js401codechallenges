'use strict';

const sll = require('../lib/sll.js');
const Stack = require('../lib/Stack.js');
const removeDuplicates = require('../lib/removeDuplicates.js');

describe('removeDuplicates', () => {
  describe('valid inputs', () => {
    let list = new sll.LinkedList;
    list.add(5);
    list.add(5);
    list.add(1);
    list.add(2);
    list.add(3);

    test('return sll w/o duplicates', () => {
      expect(removeDuplicates.dedupe(list).size()).toEqual(4);
    });
  });

  describe('test for valid inputs', () => {
    let list2 = new sll.LinkedList;


    test('return null for no argument', () => {
      expect(list2.add()).toBeNull;
    });

    test('return null for not invalid sll that has a next', () => {
      expect(removeDuplicates.dedupe()).toBeNull;
    });
  });
});
