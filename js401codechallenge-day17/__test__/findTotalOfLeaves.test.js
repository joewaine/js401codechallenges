const Queue = require('../lib/queue')
const karyTree = require('../lib/kary-tree')
const findNoOffspring = require('../lib/findTotalOfLeaves')
require('jest');

let queue = new Queue();

describe('', function () {

  describe('correct answer', () => { //test node construcor

    it('return the correct summation - in this case of contruction should be 10', () => {
      let cary = new karyTree();
      cary.insert(1)
      cary.insert(2,1)
      cary.insert(3,2)
      cary.insert(4,3)
      let total = 0

      expect(findNoOffspring.getLeaves(cary)).toBe(10);
    });

    it('return null if the input is not provided', () => {
      expect(findNoOffspring.getLeaves()).toBe(null);
    });

    it('return null if the datatype of the input is not an object', () => {
      expect(findNoOffspring.getLeaves('asd')).toBe(null);
    });

  });
});
