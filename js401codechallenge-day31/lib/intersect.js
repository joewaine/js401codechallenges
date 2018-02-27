'use strict';

const intersect = module.exports = {};

const first = ['ajax', 'bunny', 'berenger', 'carrot','purple'];
const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];

intersect.findIntersect = function(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return null;
  let duplicate = [];
  for (let i in arr1) {
    if (arr2.includes(arr1[i])) {
      duplicate.push(arr1[i]);
    }
  }
  return duplicate;

};
