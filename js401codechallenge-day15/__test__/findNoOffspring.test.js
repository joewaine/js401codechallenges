const Queue = require('../lib/queue')
const karyTree = require('../lib/kary-tree')
const findNoOffspring = require('../lib/findNoOffspring')
require('jest');

let queue = new Queue();
let kary = new karyTree();
let kary2 = new karyTree();

kary.insert(1);
kary.insert(2,1);
kary.insert(3,1);
kary.insert(4,3);
kary.insert(5,4);
kary2.insert(1)

describe('find no offspring', function () {

  describe('check findNoFffSpring methods and properties work', () => { //test node construcor

    it('check insertion method works correctly', () => {
      expect(kary2.insert(1).root.val).toBe(1);
    });

    it('check insertion method only takes integers', () => {
      expect(kary2.insert('dcsa')).toBe(null);
    });

    it('find no offspring', () => {
      expect(findNoOffspring.getLeaves(kary)[0].val).toEqual(2);
      expect(findNoOffspring.getLeaves(kary)[1].val).toEqual(5);
    });

    it('valid input', () => {
      expect(findNoOffspring.getLeaves('sac')).toBe(null);
    });

    it('is response an object?', () => {
      expect(typeof findNoOffspring.getLeaves(kary)).toBe('object');
    });

  });
});
