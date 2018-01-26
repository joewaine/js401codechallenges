'use strict';

const braceFinder = module.exports = {}

braceFinder.checkBraces = function(str) {

  if(typeof str !== 'string') return null

  let stack = [];
  let open = { '{': '}' };
  let closed = { '}': true };

  for (let i = 0; i < str.length; i ++) {

    let chr = str[i];

    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }

  return stack.length === 0;
};

braceFinder.checkBraces('{}{}{}{}{}{}');