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

//chatgpt Questions
// Q1.
console.log(5 == "5");       // true
console.log(5 === "5");      // false
console.log(0 == false);     // true
console.log(0 === false);    // false
console.log(null == undefined); // true  because loose equality has a special rule: null and undefined are equal to each other and nothing else.
console.log(null === undefined); // false

// Q2.
console.log(1 + "2" + 3); // 123
console.log(1 + 2 + "3"); // 33 1 + 2 + "3" =>  1 + 2 → number + number → 3 (number) => 3 + "3" → number + string → "33"

// Q3.
console.log(4 > 2 > 1); // false => 4 > 2 -> true => true > 1 -> false (As true becomes 1 and 1>1 becomes false)

// Q4.
console.log(+"5" + 5); // 10 because +"5" returns 5 (unary plus) which is added to 5 making it 10
console.log(+"5" - 2); // 3 because +"5" returns 5 (unary plus) which is subtracted from 2 making it 3
console.log(-"5" + 2); // -3 because -"5" returns -5 (unary minus) which is added to 2 making it -3
console.log(-"5" - 2); // -7 because -"5" returns -5 (unary minus) which is subtracted from 2 making it -7

// Q5. 
let a = "10";
let b = "5";
console.log(a - b); // 5 because JavaScript performs arithmetic operations on strings as numbers when possible
console.log(a + b); // 105 because "+" concatenates strings instead of performing addition


//  Q6.
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

// Q7
console.log("2" * "3"); // 6
console.log("10" / "2"); // 5
console.log("5" - "2" + "1"); // 31

// Q8.
console.log(0 || 2 && 3 || 4); // 3 - 0 || 2 => true && 3 => true || 4 => true as for || if 1st operand is true then it wont check the next operand and return the first operand.

// Q9.
console.log(1 + true == 2 && "5" + 1 == 51 || 0); // true.
// 1 turns to true and true + true = true 
//  true == 2 => true
//  true && "5" + 1 ==> true && 51 ==> true
//  true == 51 => 51
// 51 == 51 => true 
//  true || 0 ==> true (final ans)

//  Q10.
console.log(+null + true * false || "0" && 1); // Output: 1
//  +null = 0;
//  0 + true * false = 0 + 1 * 0 = 0 + 0 = 0;
// 0 || "0" && 1 = 0 || true && 1 = 0 && 1 = 1;

// Q11.
console.log(0 == "0" < 1 && false == 0 || "5" - 2 === "3"); // false
// 0 == "0" => true
// true < 1 => false
// false && false ==> false 
// false == 0 ==> true
// true || "5" - 2 ==> true || 3 ==> true
// true === "3" ==> false 

// Q12.
console.log(!!"0" == false || NaN == NaN && +"10" / -"2"); // false

// !!"0" => true
//  true == false => false
// false || NaN == NaN ==> false || false ==> false
// false && +"10" / -"2" ==> false && 10/-2 ==> false && -5 ==> false

// Q13. Check this after reading coercion rules properly..
console.log([] + [] == "");
console.log([] == ![]);


