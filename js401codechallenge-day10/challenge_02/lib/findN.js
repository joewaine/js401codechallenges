'use strict';

const nFinder = module.exports = {}

nFinder.findN = function(arr,i){

  if(!arr || !i) return null





arr.sort(function (a, b) {return a - b});

arr.indexOf(i)

return { 'value': i, 'index' :  arr.indexOf(i)}

}
