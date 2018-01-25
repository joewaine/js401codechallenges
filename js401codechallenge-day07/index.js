function LinkedList(){
  this.head = null;
}


LinkedList.prototype.push = function(val){
    var node = {
       value: val,
       next: null
    }
    if(!this.head){
      this.head = node;
    }
    else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }


let findRepeat = function(list){

let pointer1 = list
let pointer2 = list

while(list.head.next){
pointer1 = list.next
pointer2 = list.next.next
if(pointer1.next === pointer2.next) return true
}

return false

}


let sll1 = new LinkedList();

sll1.push(5);
sll1.push(6);
sll1.push(7);


let sll2 = new LinkedList();

sll2.push(7);
sll2.push(8);
sll2.push(9);


console.log(sll1)
console.log(sll2)


let current1 = sll1.head

let arr1 = []
let arr2 = []
while (current1) { // while not null
    console.log(current1.value);
    arr1.push(current1.value)
    current1 = current1.next;
}

let current2 = sll2.head

while (current2) { // while not null
    console.log(current2.value);
        arr2.push(current2.value)
    current2 = current2.next;
}


let arr = arr1.filter((n) => arr2.includes(n))



let answer = new LinkedList();



arr.forEach(x => answer.push(x))

console.log(answer)


