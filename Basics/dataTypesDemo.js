// Primitive Data Types
var marks = 100;
var name = "John";
var age;
var company = null;
var salary = undefined;
var isStudent = false;
console.log("Marks = ", marks);
console.log("Name = ", name);
console.log("company = ", company);
console.log("salary = ", salary);
console.log("isStudent = ", isStudent);

console.log("age", age);


// Objects
var user = {
    name: 'John',
    company: 'Google',
    age: 25,
}

console.log("Details of the user is", user);


// ChatGPT Questions
// Q1. 
console.log(typeof null); // Output: object
console.log(typeof NaN); // Output: number
console.log(typeof undefined); // Output: undefined

// Q2. 
console.log(1 + "2"); // "12"
console.log(1 - "2"); // -1
console.log("2" - 1); // 1
console.log("2" + 1); // "21"

// Q3
let a;
console.log(typeof a); // undefined

a = 5;
console.log(typeof a); // number

a = "Hello";
console.log(typeof a); // string

a = true;
console.log(typeof a); // boolean

a = {};
console.log(typeof a); // Object

a = [];
console.log(typeof a); // Object

a = function () { };
console.log(typeof a); // Object

// Q4
console.log(typeof Infinity);       // Number
console.log(typeof -Infinity);      // Number
console.log(typeof NaN);            // Number
console.log(typeof Symbol("id"));   // Symbol
console.log(typeof 123n);           // BigInt
console.log(typeof null);           // Object
console.log(typeof undefined);      // Undefined

// Q5.
console.log(typeof undefined == undefined); // false , typeof always returns a string, so it will never be equal to undefined.
console.log(typeof undefined == "undefined"); // true, type of awalys returns a string and it is quivalent to undefined.



// Q6
var a;
let b;
console.log(typeof a);   // undefined
console.log(typeof b);   // undefined
console.log(typeof c);   // 3  (note: c is never declared)
//  Output of c will be undefined , normally it would throw a referrence error but since we are using typeof operator it will return undefined as typeof has a unique behavior  — it’s safe for undeclared variables.

// Q7.
let x = 10;
let y = x;
y = 20;
console.log(x, y);   // 10 , 20


let obj1 = { name: "Sohana" };
let obj2 = obj1;
obj2.name = "Khatun";
console.log(obj1.name, obj2.name); //  "Khatun","khatun"

// Q8
console.log(typeof []); // Object
console.log(typeof null); // Object
console.log(Array.isArray([])); // true
console.log(Array.isArray(null)); // false

// Q9.
console.log(typeof Date); // function
// Date without new refers to the Date constructor function, so → "function"

