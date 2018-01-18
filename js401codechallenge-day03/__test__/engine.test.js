'use strict';

const engine = require('../lib/engine');
require('jest'); // This is not required


let train = {
  value: 1,
    next: {
      value: 2,
        next : {
        value: 2,
        next: null
        }
    }
};


let trainwithstrings = {
  value: 'east',
    next: {
      value: 2,
        next : {
        value: 2,
        next: null
        }
    }
};



// { value: 1, next: {value: 2,next : {value: 2,next: null}}}

describe('engine module', function() {
  describe('#passengerCount', function() {

    it('test if there is an input', function() {
      expect(engine.passengerCount()).toEqual(null);
    });
    it('test if input is an object', function() {
      expect(engine.passengerCount('shit')).toEqual(null);
    });
    it('return intended answer', function() {
      expect(engine.passengerCount(train)).toEqual(5);
    });
    it('test if value is a number', function() {
      expect(engine.passengerCount(trainwithstrings)).toEqual(null);
    });


  });
});




