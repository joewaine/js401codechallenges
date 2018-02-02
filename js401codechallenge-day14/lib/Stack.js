'use strict';

const Stack = module.exports = {};

Stack.stack = function() {
  var storage = [];

  this.push = function() {
    if (!arguments) return null;
    storage.push.apply(storage, arguments);
  };
  this.pop = function() {
    return storage.pop.apply(storage, arguments);
  };
  this.size = function() {
    return storage.length;
  };
  this.peek = function() {
    return storage;
  };
};
