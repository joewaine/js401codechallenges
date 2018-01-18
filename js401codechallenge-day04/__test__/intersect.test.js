'use strict';

const intersect = require('../lib/intersect');
require('jest'); // This is not required

describe('intersect module', function() {
  describe('#findintersect', function() {

    it('test if there is an input', function() {
      expect(intersect.findIntersect([1,3,5],[1,3,6])).toEqual([1,3]);
    });

    it('return null if either array is empty', function() {
      expect(intersect.findIntersect([],[])).toBe(null);
    });


    it('test if there is an input', function() {
      expect(intersect.findIntersect([2,3,3,4],[1,3,3,5])).toEqual([3,3]);
    });


   });
});