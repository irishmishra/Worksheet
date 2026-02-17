//! 1. Write a simple function called greet that prints "Hello, World!" to the console.

function greet() {
  console.log("Hello, World!");
}
//! 2.What is the difference between a parameter and an argument in a function?

//? parameter is a variable in the declaration of the function, while an argument is the actual value passed to the function when it is called.

//! 3.What will be the output of this code?

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
//? Output - 5, becuz we are passing 2 and 3 as args to the and function and it will return the su of two nums

//! 4.How do you call (invoke) a function named showMessage?

showMessage(); // but the function must be defined before calling it.

//! 5.Rewrite the following function as an arrow function:

// function square(x) {
//   return x * x;
// }

const square = (x) => {
  return x * x;
};

//! 6.What will this code print? Explain why.
function test() {
  return;
  console.log("Done");
}
console.log(test());
//? Output - undefined cuz the return statement terminates the function

//! 7.Write a function expression (assigned to a variable) that multiplies two numbers and returns the result.

const multiplay = function (a, b) {
  return a * b;
};

//! 8. Write a function isEven that returns true if its argument is an even number, and false otherwise.

const isEven = function (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//! 9.What is the difference in how this works in a regular function vs. an arrow function?

//? in a regular function, the function call creates a new execution context, and the value of this is determined by how the function is called. In an arrow function, there is no new execution context created, and the value of this is lexically inherited from the surrounding code where the arrow function is defined. This means that in an arrow function, this will refer to the same value as in the enclosing scope, while in a regular function, this can refer to different values depending on how the function is called.

//! 10.Write a function factorial(n) that returns the factorial of n (e.g., factorial(5) returns 120).

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
