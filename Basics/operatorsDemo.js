// Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y);  // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus (Remainder)
console.log(x ** y); // Exponentiation (Power)

// Assignment Operators
x += 5; // Equivalent to x = x + 5
y *= 2; // Equivalent to y = y * 2
console.log(x);
console.log(y);
x -= 7; // Equivalent to x = x - 7
y /= 4; // Equivalent to y = y / 4  
console.log(x);
console.log(y);
x %= 8; // Equivalent to x = x % 8
y **= 3; // Equivalent to y = y ** 3
console.log(x);
console.log(y);

// Relational Operators
let a = 10;
let b = 30;
let c = 5;
let d = 45;
console.log("a > b", a > b); // false
console.log("b >= c", b >= c); // true
console.log("c < d", c < d); // true
console.log("d <= a", d <= a); // false

// Logical Operators
let e = true;
let f = false;
console.log(e && f); // false
console.log(e || f); // true
console.log(!e); // false
console.log(!f); // true
console.log((5 < 10) && (6 < 3)); // false
console.log((5 < 10) || (6 < 3)); // true
console.log(!(5 === '5')); // true

// Shortcircuiting with Logical AND Operator

console.log(10 && 6); // Output : 6 , As 10 is true , it has to check for the 2nd operand and then return the 2nd operand hence the output 6 is returned.
console.log((10 > 6) && (6 < 7)); // true, as both operands are true.
console.log(10 || 0); // Output: 10 // As 10 is true , it will not check the 2nd operator and return the first operand that is 10.
console.log(6 || 19); // Output: 6 // As 6 is true , it will not check the 2nd operator and return the first operand that is 6.
console.log(0 || -0); // Output: -0 // As 0 is false , it will check the second operand and return the second operand that is -0.

// Bitwise Operators
// Q1. 5 & 7
// 5 - Binary form is 101 
// 7 - Binary form is 111
//   1 0 1
// & 1 1 1
// -------------
//   1 0 1 --> this in 2s format is 5 , so the answer is 5.

console.log(5 & 7) // Output is 5

//  Q2. 6 & 9

//    6 - 0 1 1 0
//    9 - 1 0 0 1
//    -------------
//    &   0 0 0 0    ---> Answer is 0

console.log(6 & 9) // Output is 0. 

//    Q3. 2 & 5

//    2 - 0 1 0
//    5 - 1 0 1
//    ------------
//    &   0 0 0 ==> Answer is 0


// Equality Operators
console.log(1 == "1"); // Output : true as == will check the type first , since they are different it will convert the type.

// If one type is a number and one is a string then JS converts the String to the number. 

// Hence, here the "1" is converted into 1 , then it will again compare both , this time the types are same hence it will call === and === will check for the type , it is same then it will check for the value and since value is also same it will return true.

console.log(1 == "sanket");
// Output : false as the type is not same for both the operands , hence == will try to convert the type of both the operand , while converting the string "Sanket" to a number it will result in NaN , NaN is always false when compared with any other value or even itself. Hence, the output is false.

// TypeOf
console.log(typeof "1"); // Output : string
console.log(typeof 1); // Output : number
console.log(typeof true); // Output : boolean
typeof undefined; // Output : undefined
typeof null; // Output : object
typeof {}; // Output : object
typeof []; // Output : object
typeof function () { }; // Output : function


// Unary Operators
let cd = 10;
y = cd++;
console.log(y);
// Output is 10 as: 
// Step 1: assign the value of cd to y
// Step 2: increment the value of cd by 1


y = ++cd;
console.log(y);
// Output is 11 as: 
// Step 1:increment the value of cd by 1
// Step 2: assign the value of cd to y

// Unary Plus
// +X 
// It tries to convert the variable into a number if it is not already a number and we have to assign the value as it doesnt affect the actual number
// eg: 
let UnaryPlus = "22";
let newUnaryPlus = +UnaryPlus;
console.log(typeof newUnaryPlus); //Output: Number

// Unary Minus
// -X
newUnaryPlus = -UnaryPlus
console.log(typeof newUnaryPlus); // Number
console.log(newUnaryPlus); // -22

