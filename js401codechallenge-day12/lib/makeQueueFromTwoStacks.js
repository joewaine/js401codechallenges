'use strict'

const createStack = require('./stacks');
const createQueue = require('./queues');

let makeQueueFromTwoStacks = module.exports = {}

makeQueueFromTwoStacks.makeQueue = function(arr){

      if(!Array.isArray(arr)) return null
        let stack1 = new createStack();
        let stack2 = new createStack();
        let otherArr = [];

        for(let i = 0; i < arr.length; i++){
          stack1.push(arr[i].toString())
          stack2.push(stack1.pop())
          otherArr.push(stack2.pop())
        }

      return parseInt(otherArr[0].val.val)
  }







