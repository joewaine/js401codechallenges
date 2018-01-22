problem domain:

Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)

tests:

check that input is greater than zero.

check that output is correct.

check that mock callback function is called the correct amount of times

check that input is a valid data type (number in this case);

pseudo code:

1 - pass in count and call back function

2 - check if count is less than or equal to zero, if so, return undefined.

3 - call the function within itself with the parameter of count minus 1


see my whiteboarding in solution-06.jpg

