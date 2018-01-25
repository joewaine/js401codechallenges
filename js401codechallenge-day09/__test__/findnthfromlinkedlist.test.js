'use strict';

const nthFinder = require('../lib/findnthfromlinkedlist')



let ll = new nthFinder.linkedList();

ll.push(3);
ll.push(4);
ll.push(5);



describe('find nth from linked list', function() {
  describe('#find nth', function() {

    it('validate output', function() {
      expect(nthFinder.findNth(0,ll)).toEqual({ head: { value: 5, next: null } });
    });

    it('validate input, is n a number?', function() {
        expect(nthFinder.findNth('asd',ll)).toEqual(null);
      });

    it('is offset out of range? return null if so', function() {
        expect(nthFinder.findNth(10,ll)).toEqual({"head": null});
      });

    it('validate input of SLL as SLL', function() {
        expect(nthFinder.findNth('invalid entry','invalidll')).toEqual(null);
   });


  });
});




