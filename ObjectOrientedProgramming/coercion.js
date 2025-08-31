console.log([] + [] == "");
// [] ==> "" 
// "" + "" == ""
// 0 + 0 = 0 ==> true

console.log([] == ![]); // true
// any non empty object including [] is considered as thruthy value in JS.
// ![] becomes false.
// hence , expression now becomes [] == false
// now acc to coercion rules ,
// [] will become "" then it will be converted to 0.
// false is converted to 0.
// hence , 0 == 0 is true and the answer is true.

console.log(0 == "0"); // true
console.log(0 === "0"); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log([] == false); // true
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(typeof NaN); // number
console.log(isNaN('hello')); // true
console.log(isNaN(123)); // false

console.log([] + {}); // {} will be converted to  "" + '[object Object]' ==> output is [object Object]
console.log({} + []); // {} will be converted to  "" + '[object Object]' ==> output is [object Object]
console.log([1, 2] + [3, 4]); // [1,2] ==> "1,2" [3,4] ==> "3,4" ==> "1,2" + "3,4" ==> "1,23,4"

console.log([] == 0); // true 
console.log('' == 0); // true 
console.log([1] == [1]); // false as Arrays are objects → compared by reference, not by value.

console.log(true + true); // 2 
console.log(true == 2);   // false 

console.log('b' + 'a' + + 'a' + 'a'); // "baNaNa" 

console.log({} == {}); // false 
console.log([] == []); // false 

console.log(null == 0);      // false 
console.log(undefined == 0); // false 

console.log("" == 0); // true
console.log("0" == false); // true
console.log(null >= 0); // true
console.log(undefined == 0); // false
console.log([1] == true); // true
console.log([1,2,3] == "1,2,3"); // true
console.log("5" - 2); // 3
console.log("5" + true); // "5true"

console.log("305" > "30"); // true 
console.log("25" > "123"); // true (here since both are strings, we will check character by character)
// 2 from 25 and 1 from 123 are compared.
// 2 > 1 true hence answer is true.
// if 1st becomes equals , then try 2nd and so on..
// if there is a case where there is nothing to compare with then the longer string wins.
// assume in this case we had to compare 3 with 3rd char from first operand since it is not available hence 123 would have won.











