'use strict';


const nthFinder = module.exports = {}


nthFinder.linkedList = function (){
  this.head = null;
}

nthFinder.linkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;
    }
    else{
       let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

let sll = new nthFinder.linkedList();

sll.push(3);
sll.push(4);
sll.push(5);

nthFinder.findNth = function(n,ll){

if(typeof n !== 'number' || typeof ll !== 'object') return null

let i = 0;
let curr_node = ll.head;

for(let next_node = ll.head; next_node.next; next_node = next_node.next){
    if((i > n)) curr_node = curr_node.next;
    i++;
}

curr_node = curr_node.next;
if(i < n) curr_node = null;
ll.head = curr_node;
return ll
}

 nthFinder.findNth(0,sll)