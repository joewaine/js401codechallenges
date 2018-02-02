'use strict';
let sll = require('./sll.js');
let Stack = require('./stack.js');
let removeDuplicates = module.exports = {};


removeDuplicates.dedupe = function(LL) {
  if (!LL) return null;
  let slow = LL.head();
  let prev = 0;
  let dupeStack = new Stack.stack;
  let outputList = new sll.LinkedList;
  while(slow !== null) {
    if(slow.element !== prev) {
      dupeStack.push(prev);
      outputList.add(dupeStack.pop());
    }
    prev = slow.element;
    slow = slow.next;
  }
  return outputList;
};
