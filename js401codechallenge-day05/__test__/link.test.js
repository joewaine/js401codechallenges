'use strict';

const link = require('../lib/link');
require('jest'); // This is not required

// let linkList = {value: 0, next: { value: 1, next : { value: 2, next : null }}};

describe('link module', function() {
  describe('#linkfinder', function() {

    it('if no input', function() {
      expect(link.linkfinder('')).toBe(null);
    });


    it('if input is incorrect data type', function() {
      expect(link.linkfinder('asdv')).toBe(null);
    });



    it('get the right answer', function() {
      expect(link.linkfinder({value: 0, next: { value: 1, next : { value: 2, next : null }}})).toBe(1);
    });


   });
});


