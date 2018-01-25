'use strict';


const linkFinder = module.exports = {}


linkFinder.linkedList = function (){
  this.head = null;
}

linkFinder.linkedList.prototype.push = function(val){
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


linkFinder.intersectLinks = function(sllarr1,sllarr2){


// console.log(typeof sllarr1)

  if(!sllarr1 || !sllarr2) return null

  if(typeof sllarr1 !== 'object') return null



// create two empty linked lists
let sll1 = new linkFinder.linkedList()
let sll2 = new linkFinder.linkedList()

// loop through both provided arrays and push to linkedlists
sllarr1.forEach(x => sll1.push(x))
sllarr2.forEach(x => sll2.push(x))

let current1 = sll1.head
let current2 = sll2.head

let arr1 = []
let arr2 = []

// iterate through linked lists and push items to arrays
while (current1) { // while not null
    arr1.push(current1.value)
    current1 = current1.next;
}
while (current2) { // while not null
    arr2.push(current2.value)
    current2 = current2.next;
}

// check for intersect links
let arr = arr1.filter((n) => arr2.includes(n))
// return null if no intersects
if(arr.length === 0) return null

let answer = new linkFinder.linkedList();
arr.forEach(x => answer.push(x))
// return answer as linked links
return answer
}