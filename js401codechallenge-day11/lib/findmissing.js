// 'use strict';

const findMissing = module.exports = {}

// // generate an array of 1-100 with one missing
findMissing.generateArray = function() {
  let arr = Array.from(Array(100).keys());
  let fin = arr.map(x => x + 1);
  let nToRemove = Math.floor(Math.random() * 100) + 1;
  let removed = fin.splice(nToRemove, 1);
  return fin;

};

let suppliedArray = findMissing.generateArray();

findMissing.missFinder = function(array) {

if(typeof array !== 'object') return null

  let numbers = array
  function getSum(total, num) { return total + num }
  let finalAnswer = numbers.reduce(getSum);
  return 5050 - finalAnswer;

};

