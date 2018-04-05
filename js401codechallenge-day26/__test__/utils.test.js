const utils = require('../lib/utils')
require('jest')

let emptArry = []
let emptTotal = 0;

console.log(utils)


function map(arr, callback) {
    callback(arr)
};

function filter(arr, callback) {

callback(arr)
};

function reduce(arr, callback, index) {

arr.splice(0,index)
callback(arr)
};


function doubleIndexes(arr){
let emptArry = []
for(let i = 0; i < arr.length; i++){
  emptArry.push(arr[i] + arr[i])
}
console.log(emptArry)
  return emptArry
}

function getOdds(arr){
let emptArry = []
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 1) emptArry.push(arr[i])
}
console.log(emptArry)
  return emptArry
}

function addEverythingTogether(arr){
let emptTotal = 0;
for(let i = 0; i < arr.length; i++){
emptTotal = emptTotal + arr[i]
}
console.log(emptTotal)
  return emptTotal
}







describe('', function () {

  describe('correct answer', () => { //test node construcor

    it('validate map', () => {
      expect(utils.map([1,2,3], utils.doubleIndexes)).toEqual([2,4,6])
    })

    it('validate filter', () => {
      expect(utils.filter([1,2,3], utils.getOdds)).toEqual([1,3])
    })

    it('validate reduce', () => {
      expect(utils.reduce([1,2,3], utils.addEverythingTogether, 1)).toEqual(5)
   })

  })

});
































