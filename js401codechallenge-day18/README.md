view my whiteboard solution in this directory at solution.jpg


Problem Domain:
write  function to find max number of children in a k-ary tree

Tests:
Test for valid input.

test input has at least one node

return null if the input is not there

return null if input is incorrect datatype

Pseudo code

take a function in that receives k tree as an argument

initialize an empty array

with breadfirst search add first item to array, if following leaf has more children, replace with that, otherwise dont add it.

you will return the leaf with the largest amount of children.
