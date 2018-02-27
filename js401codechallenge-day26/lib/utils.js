const utils = module.exports = {}

utils.map = function(arr, callback) {
    callback(arr)
};

utils.filter = function(arr, callback) {

callback(arr)
};

utils.reduce = function(arr, callback, index) {

arr.splice(0,index)
callback(arr)
};


utils.doubleIndexes = function(arr){
let emptArry = []
for(let i = 0; i < arr.length; i++){
  emptArry.push(arr[i] + arr[i])
}
console.log(emptArry)
  return emptArry
}

utils.getOdds = function(arr){
let emptArry = []
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 1) emptArry.push(arr[i])
}
console.log(emptArry)
  return emptArry
}

utils.addEverythingTogether =  function(arr){
let emptTotal = 0;
for(let i = 0; i < arr.length; i++){
emptTotal = emptTotal + arr[i]
}
console.log(emptTotal)
  return emptTotal
}
