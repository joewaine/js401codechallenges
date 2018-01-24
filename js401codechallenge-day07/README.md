view solution.png for the whiteboarding solution



Problem domain:

create a function that accepts sll as argument and checks to see if it is circular or not

if so, return true, 

if not return false

test:
valid input?

valid output?

only 1 node?


pseudo
declare function accepting single argument

while sll.next exists(!null), check if property flag/seen exists,, if so returun true.

assign property, flag/seen to current node

reassign current node to next to traverse SLL

if the above case never triggers return true, or return false.


Write a function which accepts a linked list as it's only argument, and returns true or false. - If the linked list is circular (it has no end), return true - Else return false
