/*
1. Which method adds one or more elements to the end of an array?
*/
let arr1 = [1, 2];
arr1.push(3, 4); // push() adds elements to the end

/*
2. What does the pop() method do to an array?
*/
let arr2 = [10, 20, 30];
arr2.pop(); // removes the last element (30)

/*
3. Write code to remove the first element from this array:
let nums = [10, 20, 30];
*/
let nums = [10, 20, 30];
nums.shift(); // removes the first element

/*
4. How do you add "apple" to the beginning of this array?
let fruits = ["banana", "cherry"];
*/
let fruits = ["banana", "cherry"];
fruits.unshift("apple"); // adds element at start

/*
5. What will be the result of this code?
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);
*/
let arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3); // [3, 2, 1]

/*
6. Which method returns a shallow copy of a portion of an array,
   without modifying the original?
*/
let arr4 = [1, 2, 3, 4];
let copy = arr4.slice(1, 3); // slice()

/*
7. How do you check if the number 5 exists in this array?
let arr = [1, 3, 5, 7];
*/
let arr5 = [1, 3, 5, 7];
let exists = arr5.includes(5); // true

/*
8. Write code to combine these two arrays into a new array:
let a = [1, 2];
let b = [3, 4];
*/
let a = [1, 2];
let b = [3, 4];
let combined = a.concat(b);
// OR: let combined = [...a, ...b];

/*
9. What does the following code output?
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr);
*/
let arr6 = [1, 2, 3, 4];
arr6.splice(1, 2);
console.log(arr6); // [1, 4]

/*
10. How would you replace the value 20 with 99 using splice?
let arr = [10, 20, 30];
*/
let arr7 = [10, 20, 30];
arr7.splice(1, 1, 99); // replaces 20 with 99

/*
11. What does this code print and why?
let arr = [1, 2, 3];
console.log(arr.slice(1, 3));
console.log(arr);
*/
let arr8 = [1, 2, 3];
console.log(arr8.slice(1, 3)); // [2, 3]
console.log(arr8); // [1, 2, 3]

/*
12. Write code to join all elements with a dash (-):
let arr = ['a', 'b', 'c'];
*/
let arr9 = ["a", "b", "c"];
let joined = arr9.join("-"); // "a-b-c"

/*
13. How do you find the index of "cat"?
let pets = ["dog", "cat", "bird"];
*/
let pets = ["dog", "cat", "bird"];
let index = pets.indexOf("cat"); // 1

/*
14. What does the following code print?
let arr = [2, 4, 6];
console.log(arr.every(n => n % 2 === 0));
*/
let arr10 = [2, 4, 6];
console.log(arr10.every((n) => n % 2 === 0)); // true

/*
15. Write code to double every number using map:
let nums = [1, 2, 3];
*/
let nums2 = [1, 2, 3];
let doubled = nums2.map((n) => n * 2);
console.log(doubled);

/*
16. Create a new array with only odd numbers:
let arr = [1, 2, 3, 4, 5];
*/
let arr11 = [1, 2, 3, 4, 5];
let odds = arr11.filter((n) => n % 2 !== 0);

/*
17. What does this code print?
let arr = [1, 2, 3];
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
*/
let arr12 = [1, 2, 3];
let sum = arr12.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

/*
18. Find the first number greater than 10:
let arr = [2, 7, 15, 3];
*/
let arr13 = [2, 7, 15, 3];
let firstGreater = arr13.find((n) => n > 10); // 15

/*
19. Check if at least one number is negative:
let arr = [4, -2, 7];
*/
let arr14 = [4, -2, 7];
let hasNegative = arr14.some((n) => n < 0); // true

/*
20. Write code to remove the second and third elements from this array and insert "a" and "b" in their place:
let arr = [0, 1, 2, 3, 4];
*/
let arr15 = [0, 1, 2, 3, 4];
arr15.splice(1, 2, "a", "b"); // [0, "a", "b", 3, 4]
