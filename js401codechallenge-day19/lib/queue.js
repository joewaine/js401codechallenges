'use strict';

const Node = require('./node');

module.exports = class {
  constructor(max=1024) {
    if (typeof max !== 'number' || !max || max < 0)
      throw new Error('Error: Max length must be a valid non-zero number');
    this.max = max;
    this.length = 0;
    this.front = this.back = null;
  }

  enqueue(value) {
    if (!value && value !== 0)
      throw new Error('Error: Value must be valid');
    if (this.length === this.max)
      throw new Error('Error: Queue is at max length');
    let node = new Node(value);

    if (!this.length) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
    this.length++;
  }

  dequeue() {
    if (!this.length)
      throw new Error('Error: Queue is empty');
    let node = this.front;
    if (this.length === 1) {
      this.back = null;
    }
    this.front = node.next;
    this.length--;
    node.next = null;
    return node.value;
  }
};