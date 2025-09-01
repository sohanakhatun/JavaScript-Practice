// Q.
//Write a function manageCart() that starts with an empty array cart. Perform the following operations in order:
// Add "Shoes" and "Shirt" to the cart.
// Remove the last item from the cart.
// Add "Watch" at the beginning of the cart.
// Remove the first item from the cart.
// Finally, return the cart.

function manageCart(arr) {
    arr.push("Shoes");
    arr.push("Shirt");

    arr.pop();

    arr.unshift("Watch");
    arr.shift();

    return arr;
}

let cart = manageCart([]);

console.log(cart);

// Q2.
// Write a function doubleNumbers(arr) that takes an array of numbers and returns a new array where each number is doubled.

function doubleNumbers(arr) {
    return arr.map((num) => num * 2);
}

let number = [1, 2, 3];
let doubleNumber = doubleNumbers(number);
console.log(doubleNumber);

// Q3.
// Write a function getEvenNumbers(arr) that takes an array of numbers and returns a new array containing only the even numbers.
function getEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4]));

// Q4.
// Write a function sumArray(arr) that takes an array of numbers and returns the sum of all elements using reduce.
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4]));

