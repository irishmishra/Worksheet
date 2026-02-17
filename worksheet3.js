//! 1.Write an if-else statement that prints "Even" if a number is even and "Odd" if it is odd.

let num = 7;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//! 2.What will be the output of the following code?
let color = "blue";
if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Caution");
} else {
  console.log("Go");
} //Output - Go

//! 3.Rewrite the following if-else as a ternary operator:
let isMember = true;
let price = isMember ? 10 : 15;
console.log(price);

//! 4.Fill in the blanks to complete this switch statement:
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case ___:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
// ans - 3

//! 5.What is the output of this code? Explain your answer.

let grade = "C";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Needs Improvement");
}
// Output - Average, because there is no break statement after case "B", so it falls through to case "C" and executes that block as well.

//! 6.Write a function getSeason(month) that returns "Winter" for months 12, 1, 2; "Spring" for 3, 4, 5; "Summer" for 6, 7, 8; "Autumn" for 9, 10, 11. Use a switch statement.
function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

console.log(getSeason(2));

//! 7.Convert this ternary operation into an equivalent if-else statement:
//ternary operation
// let temp = 25;
// let weather = temp > 30 ? "Hot" : "Comfortable";
// if-else statement
let temp = 25;
let weather;
if (temp > 30) {
  weather = "Hot";
} else {
  weather = "Comfortable";
}

//! 8.Write a nested if-else that prints:
/*
"Excellent" if score >= 90
"Good" if score >= 75 but less than 90
"Pass" if score >= 50 but less than 75
"Fail" if score < 50
*/
let score = 83;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Good");
} else if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
//! 9.What will be the output? Why?

let x = 5;
if ((x = 10)) {
  console.log("Ten");
} else {
  console.log("Not Ten");
}
// Outout - Ten, because the assignment operator is used , so x got assinged the value of 10.

//! 10.Rewrite the following logic using a switch statement:
// if - else
// let fruit = "mango";
// if (fruit === "apple" || fruit === "pear") {
//   console.log("Pome fruit");
// } else if (fruit === "peach" || fruit === "plum") {
//   console.log("Stone fruit");
// } else {
//   console.log("Other fruit");
// }
// switch statement
let fruit = "mango";
switch (fruit) {
  case "apple":
  case "pear":
    console.log("Pome fruit");
    break;
  case "peach":
  case "plum":
    console.log("Stone fruit");
    break;
  default:
    console.log("Other fruit");
}
