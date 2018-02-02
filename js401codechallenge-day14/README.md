Code Challenge - day 15


Write a function called dedupe(head) that accepts the head of a linked list as it's argument, and returns a new linked list - Use a stack to identify any consecutive duplication, and remove them from the list.




Problem Domains

Input Head - 

remove consecutive duplicates into a stack,

return a linked list without duplicates

TESTS

validate the next item in a ll exists

validate the inputs work

test for an empty stack before final evaluation


Pseudo Code

write a function that takes in a head argument

iterate through a SLL - push values in that do not equal the previous value.

create a new SLL, push to the stack then pop and return an sll of non duplicates.

see my whiteboard solution in solution.jpg


