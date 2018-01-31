'use strict';

require('jest');

const makeQueueFromTwoStacks = require('../lib/makeQueueFromTwoStacks')

describe('makeQueueFromTwoStacks', function() {
  describe('#makeQueueFromTwoStacks', () =>{
    it('with two stacks, first item in is the first item out', () => {
      expect(makeQueueFromTwoStacks.makeQueue([5,3,5,7])).toEqual(5);
    });

    it('return null for invalid output', () => {
      expect(makeQueueFromTwoStacks.makeQueue('asdccd')).toBe(null);
    });

  });

});