'use strict';

const link = module.exports = {};
require('jest');
let node;
var arr = [];

link.linkfinder = function(obj){

if(typeof(obj) !== 'object') return null;

node = obj;

if(node.next === null) return arr[Math.ceil(arr.length/2)][0];

while(node.next){
    arr.push([node.value, node.next]);
    node = node.next;
    link.linkfinder(node);
}


}






