# Whiteboard challenge 32

The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

Write two functions to return the nth entry in the fibonacci series, recursively and iteratively
ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

Write at least four tests for each function (they will generally cover the same IO for each function)

your tests should cover basic (expected) functionality
your tests should consider edge cases for your function (ex: will your function still operate on an array of floating point integers?)
In your README.md explain why you would NOT use recursion to solve fibonacci, even though you CAN.

Answer:

I placed a console log in my function and when running my recursive function whith a 4 as the argument it called itself 8 times to return the solution. When I changed the argument to 8 it called itself 66 times. This is essentially O(2^n) which is going to get expensive to run for small numbers, bad things may happen with larger numbers vs the iterative O(n).