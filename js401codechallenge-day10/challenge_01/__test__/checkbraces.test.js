'use strict';

const braceFinder = require('../lib/checkbraces')


describe('find braces', function() {
  describe('#find brace pairs', function() {

    it('validate output', function() {
      expect(braceFinder.checkBraces('asddasccd{casdcads}')).toBe(true);
    });

    it('validate output', function() {
      expect(braceFinder.checkBraces('{}}')).toBe(false);
    });

    it('validate input as correct data type', function() {
      expect(braceFinder.checkBraces([])).toBe(null);
    });



  });
});




