'use strict'


const fibonacciAdd = require('../lib/fibonacciAdd');
require('jest');


describe('fibonacci add', function() {
  describe('#make a summ', function() {


    it('wrong data type for exponent', function() {
       expect(fibonacciAdd.addFib(2,'dd')).toBe(null);
    });


    it('wrong data type for base', function() {
       expect(fibonacciAdd.addFib('dd',15)).toBe(null);
    });

    it('no inputs', function() {
       expect(fibonacciAdd.addFib()).toBe(null);
    });


    it('test if the sum completes', function() {
       expect(fibonacciAdd.addFib(2,15)).toEqual(26);
    });



   });
});