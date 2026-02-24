//! 1.Identify whether x is in the global or local scope:

// var x = 10;
// function test() {
//   console.log(x);
// }
// Ans: x is in the global scope.

//! 2.What will this code output?

// console.log(x);
// var x = 5;
//Ans: output -  undefined, cuz only the declaration of var x is hoisted.

//!3.A variable declared with let inside a block {} can be accessed outside that block.

// {
//   let y = 20;
// }
// console.log(y);
//Ans: This code will throw a ReferenceError because y is not defined outside the block where it was declared with let.

//!4.What is the output of this code?

// function greet() {
//   console.log("faaaaah!");
// }
// greet();
//Ans: The output of this code will be "faaaaah!" because the function greet is called after it is defined.

//!5.What is the output? Why?

// let outer = 10;
// function innerFn() {
//   console.log(outer);
// }
// innerFn();
//? ans: the output will be 10 because the inner function innerFn has access to the outer variable outer due to JavaScript's lexical scoping.

//!6.Why does this code throw an error?

console.log(b);
let b = 20;

//? Ans: This code will throw a ReferenceError , because the variable b is declared with let, which is not hoisted like var.

//! 7.Rewrite this function declaration as a function expression and explain how hoisting affects it:
// function sayHi() {
//   console.log("Hi");
// }

let sayHi = function () {
  console.log("hieee yaar!");
};
//! 8.What will this code print? Explain the role of lexical scoping:
function outer() {
  let x = "outer";
  function inner() {
    console.log(x);
  }
  return inner;
}
const fn = outer();
fn();
// ? Ans: This code will print "outer". Lexical scoping means that the inner function (inner) has access to variables defined in its outer scope (outer), even after the outer function has finished executing. In this case, the inner function retains access to the variable x defined in the outer function, allowing it to print "outer" when called.

//! 9.Predict the output and explain the hoisting behavior:

var c = 1;
function test() {
  console.log(c);
  var c = 2;
}
test();
//? Output: undefined
// Explanation: The variable c is hoisted to the top of the function scope, so it is declared but not yet assigned a value when console.log(c) is executed. Therefore, it logs undefined.

//! 10.Write a code snippet that demonstrates the Temporal Dead Zone (TDZ) for const.

{
  console.log(d); // ReferenceError: Cannot access 'd' before initialization
  const d = 30;
}
//? Explanation: The Temporal Dead Zone (TDZ) is the period between the start of a block and the point where a variable declared with let or const is initialized. In this code snippet, trying to access the variable d before it is initialized results in a ReferenceError due to the TDZ.
