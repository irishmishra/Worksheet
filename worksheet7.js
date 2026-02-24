//! 1. How do you declare an empty array in JavaScript?

let emptyArray = [];

//! 2.What is the index of the last element in this array?

let colors = ["red", "green", "blue", "yellow"];
// index will be 3

//! 3.What will this code output?

// let arr = [10, 20, 30];
// console.log(arr[1]);
// Output: 20

//! 4.How many elements does this array have?

let nums = [5, 7, 9, 11, 13];
// Output: 5

//! 5. Change the value 'banana' to 'grape' in the following array:
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "grape";
console.log(fruits);

//! 6.What will be the result of this code? Explain why.

let a = [1, 2, 3];
let b = a;

b[0] = 99;

console.log(a);

//! 7. Write code to access the value 6 from this array:

let nested = [1, [4, 5, 6], 7];
console.log(nested[1][2]);

//! 8. What will this code print? Why?

let arr = [1, , 3];

console.log(arr[1]);

console.log(arr.length);
// Output: 3 (empty slots are counted in length)

//! 9. Create a new array copyArr that is a copy of arr1 but independent (so changes to copyArr do not affect arr1):

let arr1 = [10, 20, 30];
let copyArr = [...arr1];
copyArr[0] = 999;
console.log(arr1);
console.log(copyArr);

//! 10.Given the following 2D array, write code to print the value 8:
let matrix = [
  [2, 4],
  [6, 8],
];

console.log(matrix[1][1]);
// Output: 8
// First index = row, second index = column
