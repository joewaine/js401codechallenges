const recurse = require('../lib/recurse');
const conLog = jest.fn();

describe('test recurse', function() {

  describe('#test recurse amount', function() {
    it('recurse amount', function() {
        recurse.loop(4,conLog);
        expect(conLog).toHaveBeenCalledTimes(4);
    });
  });

  describe('#test output', function() {
    it('test output', function() {
        expect(recurse.loop(4,conLog)).toBe(undefined);
    });
  });

  describe('#test bad input', function() {
    it('test bad input', function() {
        expect(recurse.loop('steven',conLog)).toBe(null);
    });
  });

});