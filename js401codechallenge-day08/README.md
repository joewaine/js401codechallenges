Write a function that accepts the head of two linked list as it's two arguments, and return the intersection of those two linked lists.

Problem Domain:
Take a function that accepts 2 heads of single linked lists,
return a new sll with intersection of values

Tests:
Both are SLLs?
Eval DT of Values?
Correct answer?
If !intersect, return, null


Pseudo Code
fn(headSLL1, headSLL2){
  init an empty array
  arr=[]
  iterate through values of an SLL1
  and SLL2,

  returning and pushing 'duplicates' to array - aka intersections


  after creating the array of values, remove the duplicates.


  return a new linked list from the array
}