'use strict';

const linkFinder = require('../lib/findlinkedlist')

// { value: 1, next: {value: 2,next : {value: 2,next: null}}}

describe('find linked intersection', function() {
  describe('#findintersect', function() {

    it('see if the answer is right', function() {
      expect(linkFinder.intersectLinks([4,5,6],[5,6,7])).toEqual({ head: { value: 5, next: { value: 6, next: null } } });
    });

    it('see if the answer is right', function() {
      expect(linkFinder.intersectLinks([1,2,3],[5,6,7])).toEqual(null);
    });

    it('check if therres an input', function() {
      expect(linkFinder.intersectLinks()).toEqual(null);
    });

    it('check if input is valid', function() {
      expect(linkFinder.intersectLinks('sadcd','adscs')).toEqual(null);
    });

  });
});




