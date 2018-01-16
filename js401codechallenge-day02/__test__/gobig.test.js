'use strict';

const gobig = require('../lib/gobig');
require('jest'); // This is not required


describe('Gobig Module', function() {
  describe('#Analyze', function() {
    it('return answer', function() {
      expect(gobig.analyze([4, 1, 6, 7, 3, 5, 2, 5, 4, 6])).toEqual({highestInArray: 7, secondHighestInArray: 6});
    });

    it('confirm not null', function() {
      expect(gobig.analyze(null)).toEqual(null);
    });

    it('confirm more than two', function() {
      expect(gobig.analyze([1])).toEqual(null);
    });


    it('does it sort right?', function() {
      expect(gobig.analyze([3,1,5])).toEqual({highestInArray: 5, secondHighestInArray: 3});
    });


    it('it is all numbers?', function() {
      expect(gobig.analyze(['one','two','three'])).toEqual(null);
    });






  });
});
