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


create a linked list:

let ll = new LinkedList();

LinkedList.push(5);


create a circular linked list
ll.head.next = ll.head


