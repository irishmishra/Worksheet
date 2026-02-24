/*
1. What is an object in JavaScript? Give an example.
*/
let userExample = {
  name: "Alice",
  age: 25,
};

/*
2. How do you create an empty object?
*/
let emptyObj = {};

/*
3. Given this object, how do you access the value "Alice"?
let user = { name: "Alice", age: 25 };
*/
let user = { name: "Alice", age: 25 };
let userName = user.name; // "Alice"

/*
4. How do you add a new property city with value "Paris"?
*/
user.city = "Paris";

/*
5. What will this code output?
let car = { brand: "Toyota", year: 2020 };
console.log(car["brand"]);
*/
let car = { brand: "Toyota", year: 2020 };
console.log(car["brand"]); // "Toyota"

/*
6. How can you check if an object has a property called "age"?
*/
let hasAge = "age" in user; // true

/*
7. Loop over all properties and print keys and values.
*/
let person1 = { name: "Bob", age: 30, city: "NY" };

for (let key in person1) {
  console.log(key, person1[key]);
}

/*
8. Difference between dot notation and bracket notation.
*/
// Dot notation
person1.name;

// Bracket notation (needed for dynamic keys)
person1["age"];

/*
9. How do you delete a property from an object?
*/
delete person1.city;

/*
10. How do you access the second hobby?
let person = { name: "Bob", hobbies: ["reading", "sports"] };
*/
let person = { name: "Bob", hobbies: ["reading", "sports"] };
let secondHobby = person.hobbies[1]; // "sports"

/*
11. How do you merge two objects into a new object?
*/
let obj1 = { a: 1 };
let obj2 = { b: 2 };

let merged = { ...obj1, ...obj2 };
// OR: Object.assign({}, obj1, obj2)

/*
12. What does Object.keys(obj) return?
*/
let keys = Object.keys(person);
// Returns an array of property names

/*
13. Function that returns number of properties in an object.
*/
function countProperties(obj) {
  return Object.keys(obj).length;
}

/*
14. What will this code output? Explain.
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value);
*/
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value); // 20
// Both variables point to the same object

/*
15. How do you create a shallow copy of an object?
*/
let original = { x: 1, y: 2 };
let copy = { ...original };
// OR: Object.assign({}, original)

/*
16. Difference between a method and a property.
*/
let phone = {
  brand: "Apple", // property
  call: function () {
    // method
    console.log("Calling...");
  },
};

/*
17. Create a calculator object with add and subtract methods.
*/
let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

/*
18. What will be the value of obj after this code runs?
let obj = { x: 1, y: 2 };
for (let key in obj) {
  obj[key] = obj[key] * 2;
}
console.log(obj);
*/
let obj = { x: 1, y: 2 };

for (let key in obj) {
  obj[key] = obj[key] * 2;
}

console.log(obj); // { x: 2, y: 4 }
