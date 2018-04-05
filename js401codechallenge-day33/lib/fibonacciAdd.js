'use strict'


const fibonacciAdd = module.exports = {};

  fibonacciAdd.addFib = function exponential(base, power){



if(typeof power === 'string') return null
if(typeof base === 'string') return null
if(!base || !power) return null


  function add(a, b) {return a + b;}
    // console.log(Math.pow(base, power).toString().split('').map(x => parseInt(x)).reduce(add, 0))
    return Math.pow(base, power).toString().split('').map(x => parseInt(x)).reduce(add, 0)
}