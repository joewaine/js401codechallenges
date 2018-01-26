'use strict';

const nFinder = require('../lib/findN')


describe('find n in sorted array', function() {
  describe('#find n in sorted array', function() {

    it('validate output', function() {
      expect(nFinder.findN([6],6)).toEqual({"index": 0, "value": 6});
    });

    it('return null if no input', function() {
      expect(nFinder.findN()).toBe(null);
    });

    it('return null if only one input', function() {
      expect(nFinder.findN([6])).toBe(null);
    });




  });
});




