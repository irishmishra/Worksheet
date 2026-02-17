// !1. Write a `for` loop that prints the numbers from 1 to 5 (inclusive).

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//! 2. What will be the output of this code?

// let i = 3;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
//? Output - 1 2 3

//!3. Fill in the blanks to complete this `do...while` loop so it prints `0 1 2`

// let n = 0;
// do {
//   console.log(n);
//   n++;
// } while (n < 3);

//!4 True or False: A `while` loop will always execute its body at least once.
//? Ans - False, while loop checks condition before execution

//! 5 Rewrite this `for` loop as a `while` loop:
// ```javascript
// for (let i = 10; i > 5; i--) {
//   console.log(i);
// }```

// let i = 10;
// while (i > 5) {
//   console.log(i);
//   i--;
// }
//!6 What is the output of the following code? Explain why.

// let x = 5;
// do {
//   console.log(x);
//   x++;
// } while (x < 5);

//? output - 5, because do...while execute the body code onces

//!7 Write a `for` loop that prints all **even numbers** from 2 to 10 (inclusive).

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//!8 Write a `while` loop that sums all numbers from 1 to 100 and prints the result.

// let i = 1;
// let n = 0;

// while (i < 100) {
//   n += i;
//   i++;
// }
// console.log(n);
//!9.  What is the difference between a `while` loop and a `do...while` loop? Give an example where this difference is visible.

/*
    while loop- check the condition the execute the code.
    do...while - execute the code once then check condition.
 */
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//! 10.Write a `for` loop that prints the numbers from 10 down to 1, but **stops early** if the number is divisible by 4 (use `break`).

for (let i = 10; i >= 1; i--) {
  if (i % 4 == 0) {
    break;
  }
  console.log(i);
}
