// Check if Even or Odd

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
console.log(checkEvenOdd(15)); // odd

// Minimum of 3
let x = 20;
let y = 10;
let z = 3;

if (x < y && x < z) {
    console.log("smallest", x)
} else if (y < x && y < z) {
    console.log("smallest", y)
} else {
    console.log("smallest", z)
}

// Can we form triangle using a , b , c as sides ?
let a = 1;
let b = 10;
let c = 12;

// Condition is - sum of any 2 sides should be greater than or equal to the other.
if (a + b < c || b + c < a || a + c < b) {
    console.log("No")
} else {
    console.log("Yes")
}

//  ------------- or ------------
if (a + b > c && a + c > b && b + c > a) {
    console.log("Yes, triangle is possible");
} else {
    console.log("No, triangle is not possible");
}

// Check if the triangle formed by d , e , f is equilateral or scalene or isosceles.
// isosceles if exactly two sides are equal
// Equilateral all sides are equal
// Scalene all sides are different.

let d = 5;
let e = 5;
let f = 7;

if (d == e && e == f && d == f) {
    console.log("equilateral");
} else if (d != e && d != f && e != f) {
    console.log("Scalene");
} else if (d == e && d != f && e != f || d == f && d != e && e != f || f == e && f != d && e != d) {
    console.log("isosceles");
}

// Q1.
let age = 18;
let msg = age > 18 ? "Adult" : age === 18 ? "Just Adult" : "Minor";
console.log(msg); // Just Adult

// Q2.
let value = null;
if (value == undefined) {
    console.log("Loose Equality");
} else if (value === undefined) {
    console.log("Strict Equality");
} else {
    console.log("No Match");
} // Loose Equality

// Q3.
let num = NaN;
if (num == NaN) {
    console.log("Equal to NaN");
} else if (isNaN(num)) {
    console.log("It is NaN");
} else {
    console.log("Not NaN");
} // It is NaN

// Q4.
let xy = "" || 0 && "Hello" ? "Yes" : "No";
console.log(xy); // No
// 0 && "Hello" ==> 0
// "" || 0 ? "yes" : "No"
// "" || "No" ==> false || false ==> will return the 2nd operand ==> "No"

// Q5.
let ab = null;
let bc = "0";
let cd = 0;

let result = ab ?? bc == cd ? "Match" : "No Match";
console.log(result); // Match
// ab ?? bc ==> "0"
//  "0" == 0 ==> false
// false ? "Match" : "No Match" ==> Match

// Q6.
let xd = ((0 || null)) ?? "JS";
console.log(xd);

// Q7.
let ac = (false && "Hello" || "World") ?? "Fallback";
console.log(ac);

// Q8.
let n = 5;
let result2 = n > 5 ? n < 10 ? "A" : "B" : n == 5 ? "C" : "D";
console.log(result2);

// Q9.
let ad = (null && "Hi" || 0) ?? ("Fallback" && false ? "A" : "B");
console.log(ad); // 0

// Q10.
let xa = ("" ?? false) || "JS" && 42 ? "Yes" : "No";
console.log(xa);

//  "" || "JS" && 42 ? "Yes" : "No"; 
// "" || 42 ? "yes" : "no";
//  "" || "yes";
// "yes";

// Q11.
let p = (undefined || null) ?? "First" ? 0 : "Second";
console.log(p);

//null ?? "First" ? 0 : "Second";
// "First" ? 0 : "Second";
// 0

// Q12.
let val = (0 && null || undefined) ?? (false && "JS" ? "Yes" : "No");
console.log(val); // No

// (0 && null || undefined) ==> 0 || undefined ==> undefined
// since lhs is undefined hence the output will be in rhs
//(false && "JS" ? "Yes" : "No"); ==> false ? "yes" : "no" ==> "No";

// Q13.
let af = "" || (null ?? (false || 0)) && NaN ? "A" : "B";
console.log(af); // B
// NaN ? "A" : "B" ==> "B"
// "" || (null ?? (false || 0)) && "B" ==> to get the result we need to find lhs if true/false
// "" || (null ?? (false || 0))  ==> need to find rhs here
// (null ?? (false || 0)) ==> since lhs is null , need to evaluate rhs here which is false || 0 which will give us 0 as answer.
// "" || 0 ==> 0
// 0 && "B" ==> B

// Q14.
let result3 = (null && "X") ?? ((0 || "Y") && (false ?? "Z") ? "Pass" : "Fail");
console.log(result3); // Fail
//null && "X" ==> null hence result will be in rhs
//  ((0 || "Y") && (false ?? "Z") ? "Pass" : "Fail");
// "y" && (false ?? "Z") ? "Pass" : "Fail");
// (false ?? "Z") ? "Pass" : "Fail");
// "false" ? "pass" : "fail"; ==> "fail"
// "y" && "fail"; 

// Q15.
let result4 = (undefined && "X") ?? ((false || "Y") && (0 ?? "Z") ? "Alpha" : "Beta");
console.log(result4);
//(undefined && "X") ==> undefined , hence ans is in rhs
// ((false || "Y") && (0 ?? "Z") ? "Alpha" : "Beta"
// "Y" && (0 ?? "Z") ? "Alpha" : "Beta"
// "Y" &&  0 ? "Alpha" : "Beta"
// "Y" &&  "Beta"
// "Beta"

// Q16.
let output = (
    ((null ?? false) && (("" || (undefined ?? "X"))))
    || ((0 && "Y"))
) ?? "Z"
    ? "One"
    : "Two";

console.log(output); // two

// 1. let output = (
//     (  false && ( ("" || (undefined ?? "X")) ) )
//     || ( (0 && "Y") )
// ) ?? "Z"
//   ? "One"
//   : "Two";


// 2. let output = (
//     (false && ( ("" || "X") ) )
//     || ( (0 && "Y") )
// ) ?? "Z"
//   ? "One"
//   : "Two";

// 3. let output = (
//     (false && "X" )
//     || ( (0 && "Y") )
// ) ?? "Z"
//   ? "One"
//   : "Two";

// 4. let output = (
//    false
//     || ( (0 && "Y") )
// ) ?? "Z"
//   ? "One"
//   : "Two";

// 5. let output = (
//    false
//     || 0
// ) ?? "Z"
//   ? "One"
//   : "Two";

// 6. let output =0 ?? "Z"   ? "One"   : "Two";

// 7. let output =0   ? "One"   : "Two";

// 8. let output = "Two";

// Q17. 
let result5 = (
    ((false || (null ?? "A")) && (0 ?? "B"))
    || (("" && ("C" ?? undefined)))
) ?? ("D" && null)
    ? "Alpha"
    : "Beta";


console.log(result5);

// (
//     ((false || "A") && 0)
//     || (("" && "C"))
// ) ?? ("D" && null)
//     ? "Alpha"
//     : "Beta";

// (
//     ("A" && 0)
//     || ""
// ) ?? ("D" && null)
//     ? "Alpha"
//     : "Beta";

// (
//     0
//     || ""
// ) ?? ("D" && null)
//     ? "Alpha"
//     : "Beta";

//     "" ?? ("D" && null) ? "Alpha" : "Beta";

//     "" ?? null ? "Alpha" : "Beta";

//     ""  ? "Alpha" : "Beta";

//     "Beta";


// Q18.
let value1 = (
    ((0 ?? false) || (undefined && ("M" ?? "N")))
    && ((null || ("O" ?? false)) ?? "")
) || ((false && ("P" ?? "Q")) ?? ("R" && undefined))
    ? "Cat"
    : "Dog";

console.log(value1); // Dog

// (
//     (0 || (undefined && "M"))
//     && ((null || "O") ?? "")
// ) || ((false && ("P")) ?? ("R" && undefined))
//     ? "Cat"
//     : "Dog";

// (
//     undefined
//     && ((null || "O") ?? "")
// ) || ((false && ("P")) ?? ("R" && undefined))
//     ? "Cat"
//     : "Dog";

// (
//     undefined
//     && "O"
// ) || ((false && ("P")) ?? ("R" && undefined))
//     ? "Cat"
//     : "Dog";

// (undefined && "O") || ((false && ("P")) ?? ("R" && undefined)) ? "Cat" : "Dog";
// undefined || ((false && ("P")) ?? ("R" && undefined)) ? "Cat" : "Dog";
// undefined || (false ?? ("R" && undefined)) ? "Cat" : "Dog";
// undefined || false ? "Cat" : "Dog";
// undefined || false ? "Cat" : "Dog";


// Q18
let value18 = (
    ((undefined ?? "P") && (false || ("Q" ?? null)))
    || ((null && "R") ?? "S")
) ?? ("" || "T")
    ? "Cat"
    : "Dog";

console.log(value18); // Cat

//      (
//     ("P" && (false || "Q"))
//     || ((null && "R") ?? "S")
// ) ?? ("" || "T")
//     ? "Cat"
//     : "Dog";

//      (
//     ("P" && "Q")
//     || ((null && "R") ?? "S")
// ) ?? ("" || "T")
//     ? "Cat"
//     : "Dog";

//      (
//    "Q"
//     || (null ?? "S")
// ) ?? ("" || "T")
//     ? "Cat"
//     : "Dog";

//      (
//    "Q"
//     || "S"
// ) ?? ("" || "T")
//     ? "Cat"
//     : "Dog";

// "Q" ?? ("" || "T") ? "Cat" : "Dog";

// "Q" ?? "T" ? "Cat" : "Dog";

// "Q"  ? "Cat" : "Dog";
// "Cat" ;









