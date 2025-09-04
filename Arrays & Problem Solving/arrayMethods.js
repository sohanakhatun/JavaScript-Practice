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
let nums = [10, 20, 30, 40, 50, 60];
// use slice + concat to get output = [30, 40, 50, 100, 200]


console.log(nums.slice(2, 5).concat([100, 200]));

// Q3.
let animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger"];
// Do these operations step by step:
// Remove 2 elements starting from index 1, and insert "Horse" and "Cow" in their place.
// Take a slice from index 1 to 4.
// Concatenate ["Monkey", "Deer"] to the result.

animals.splice(0, 2, "Horse", "Cow");
console.log(animals); // [ 'Horse', 'Cow', 'Elephant', 'Lion', 'Tiger' ]

let result = animals.slice(1, 4).concat(["Monkey", "Deer"]);
console.log(result);
// ['Cow', 'Elephant', 'Lion' , "Monkey", "Deer"]

// Q4.
// Given an array of numbers [1, 2, 3, 4, 5], write code to create a new array where each element is doubled. Use an array method (no loops).

let doubledArray = [1, 2, 3, 4, 5].map((arr) => arr * 2);
console.log(doubledArray);

// Q5.
// Given an array [10, 15, 20, 25, 30], write code to filter out all numbers that are not divisible by 10 using an array method.
let divisibleBy10 = [10, 15, 20, 25, 30].filter((num) => num % 10 === 0);
console.log(divisibleBy10);

// Q6.
// Given an array of numbers [5, 10, 15, 20], write code to calculate the sum of all elements using an array method.
let sumOfAllNumbers = [5, 10, 15, 20].reduce((acc, val) => acc + val, 0);
console.log(sumOfAllNumbers);

// Q7.
// Given an array of strings ["apple", "banana", "cherry"], write code to create a single string of all fruits separated by a comma using an array method.
// Output -> "apple,banana,cherry"
let arr = ["apple", "banana", "cherry"];
console.log(arr.join(","));

// Q8.
// Write code to merge them into a single array using an array method (don’t use the spread operator).
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);
console.log(arr3);

// Q9.
// Given an array ["red", "green", "blue", "yellow"], write code to remove the last element using an array method, and then log the modified array.
let arr4 = ["red", "green", "blue", "yellow"];
arr4.pop();
console.log(arr4);

console.log([40, 100, 1, 5, 25, 10].sort((a, b) => a - b));

// Q10.
// You are given an array of numbers:
// Write code to:
// Filter out odd numbers
// Square each remaining number
// Return the final array

let nums2 = [1, 2, 3, 4, 5, 6];
let result1 = nums2.filter((num) => num % 2 == 0).map((num) => Math.pow(num, 2));

console.log(result1);

// Q11.
// Write code to:
// Keep only the words with length greater than 4.
// Convert them all to uppercase.

let words = ["apple", "banana", "grape", "kiwi", "orange"];
let filteredWords = words.filter((word) => word.length > 4).map((word) => word.toUpperCase());
console.log(filteredWords);

// Q12.
// Write code to:
// Multiply each number by 2
// Keep only numbers greater than 15
// Find the sum of the remaining numbers

let numbers = [3, 6, 9, 12, 15];
let remainingNumbers = numbers.map((num) => num * 2).filter((num) => num > 15).reduce((acc, val) => acc + val, 0);
console.log(remainingNumbers);


// Q14.
// Write code to remove duplicate items and return a new array with only unique values. Do not use set.
let arr14 = ["pen", "book", "pen", "pencil", "book", "eraser"];
let uniqueArr = [];
arr14.map((arr, index) => {
    if (!uniqueArr.includes(arr)) {
        uniqueArr.push(arr)
    }
})
console.log(uniqueArr);

// Optimized solution -
// let arr14 = ["pen", "book", "pen", "pencil", "book", "eraser"];
// let uniqueArr = arr14.filter((item, index) => arr14.indexOf(item) === index);
// console.log(uniqueArr); // ["pen", "book", "pencil", "eraser"]

// Q15.
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 },
    { name: "Earbuds", price: 200 }
];

//Write code to:
//Extract only the product names of items that cost more than 500.
//Return them in uppercase.

let uppercaseProducts = products.filter((product) => product.price > 500).map((product) => {
    return product.name.toUpperCase();
});
console.log(uppercaseProducts);

// Q16.
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 95 },
    { name: "Eve", score: 88 }
];

// Write code to:
// Keep only the students who scored more than 80
// Extract just their names
// Return the names sorted alphabetically

let sortedStudents = students.filter((student) => student.score > 80).sort((a, b) => a.name.localeCompare(b.name)).map((student) => student.name);
// Subtracting strings doesn’t work ("Alice" - "Bob" = NaN). For strings, use .localeCompare().
console.log(sortedStudents);

// Q17.Write code to calculate the total revenue (i.e., sum of quantity * price for all orders).
let orders = [
    { id: 1, item: "Laptop", quantity: 2, price: 1000 },
    { id: 2, item: "Phone", quantity: 3, price: 500 },
    { id: 3, item: "Tablet", quantity: 1, price: 800 },
    { id: 4, item: "Earbuds", quantity: 4, price: 200 }
];

let revenue = orders.reduce((acc, val) => acc + (val.quantity * val.price), 0);
console.log(revenue);

// Q18. Write code to group the total amount spent per category. IMPORTANT !!!
let transactions = [
    { category: "Food", amount: 50 },
    { category: "Transport", amount: 20 },
    { category: "Food", amount: 30 },
    { category: "Entertainment", amount: 100 },
    { category: "Transport", amount: 40 }
];

let group = transactions.reduce((acc, val) => {
    if (!acc[val.category]) {
        acc[val.category] = 0;
    }
    acc[val.category] += val.amount;
    return acc;
}, {});

console.log(group);

// Q19.
let departments = [
    { name: "Engineering", employees: ["Alice", "Bob"] },
    { name: "HR", employees: ["Charlie"] },
    { name: "Sales", employees: ["David", "Eva"] }
];

let employees = departments.reduce((acc, dept) => {
    return acc.concat(dept.employees)

}, []);

console.log(employees);

// Q20. build a frequency counter (object) showing how many times each item appears.
let items = ["orange", "banana", "banana", "apple", "apple", "apple"];
// Output - { apple: 3, banana: 2, orange: 1 }

let frequency = items.reduce((acc, val) => {
    if (!acc[val]) {
        acc[val] = 1;
    } else {
        acc[val]++;
    }
    return acc;
}, {});

console.log(frequency);

// Q21.find the maximum number in the array.
let findMax = [10, 25, 47, 3, 99, 56];
let maxValue = findMax.reduce((acc, val) => {
    return acc > val ? acc : val;
});

console.log(maxValue);

// Q22. calculate the sum of even numbers and the sum of odd numbers in a single pass.
let numbers22 = [1, 2, 3, 4, 5, 6];

let result22 = numbers22.reduce((acc, val) => {
    if (val % 2 === 0) {
        acc.even += val
    } else {
        acc.odd += val;
    }
    return acc;
}, { even: 0, odd: 0 });

console.log(result22);

// Q23. Find avg.
let scores = [80, 90, 70, 100];

let sum = scores.reduce((acc, val) => acc + val, 0);
let average = sum / scores.length;

console.log(average); // 85

// Q24. Flatten the array
let nested = [[1, 2], [3, 4], [5, 6]];
let flatArray = nested.reduce((acc, val) => {
    return acc.concat(val);
}, []);
console.log(flatArray);

// Q25.
let people = [
    { name: "Alice", age: 25, city: "Bangalore" },
    { name: "Bob", age: 30, city: "Delhi" },
    { name: "Charlie", age: 35, city: "Bangalore" },
    { name: "David", age: 40, city: "Delhi" },
    { name: "Eva", age: 45, city: "Mumbai" }
];

// group people by their city.
let groupPeopleByCity = people.reduce((acc, val) => {
    if (!acc[val.city]) {
        acc[val.city] = [val.name];
    } else {
        acc[val.city].push(val.name);
    }
    return acc;
}, {})

console.log(groupPeopleByCity);

// Q26.
// You have an array of transactions (positive = income, negative = expense).
// Using reduce, calculate the total balance and also separate total income and total expense.
let transaction = [500, -200, 300, -100, -400, 600];

/*
Expected Output:
{
  balance: 700,
  income: 1400,
  expense: 700
}
*/

let incomeDetails = transaction.reduce((acc, val) => {
    if (val > 0) {
        acc.income += val;
    } else {
        acc.expense += Math.abs(val);
    }
    acc.balance += val;
    return acc;
}, { balance: 0, income: 0, expense: 0 })

console.log(incomeDetails);

let transactionByCategory = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 300, category: "food" },
    { type: "expense", amount: 150, category: "travel" },
    { type: "income", amount: 500 },
    { type: "expense", amount: 400, category: "bills" },
    { type: "expense", amount: 200, category: "food" }
];

let incomeDetailsByCategory = transactionByCategory.reduce((acc, val) => {
    if (val.type === "income") {
        acc.income += val.amount;
    } else {
        acc.expense += val.amount;
        if (!acc.categories[val.category]) {
            acc.categories[val.category] = val.amount;
        } else {
            acc.categories[val.category] += val.amount;
        }
    }

    acc.balance = acc.income - acc.expense;

    return acc;
}, { balance: 0, income: 0, expense: 0, categories: {} })

console.log(incomeDetailsByCategory);
