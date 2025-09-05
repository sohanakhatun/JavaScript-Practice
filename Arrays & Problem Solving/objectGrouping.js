let people = [
    { name: "Alice", city: "New York" },
    { name: "Bob", city: "London" },
    { name: "Charlie", city: "New York" },
    { name: "David", city: "London" }
];

// Expected Output.
// {
//   "New York": ["Alice", "Charlie"],
//   "London": ["Bob", "David"]
// }

let groupPeopleByCity = people.reduce((acc, val) => {
    if (acc[val.city]) {
        acc[val.city].push(val.name)
    } else {
        acc[val.city] = [val.name]
    }

    return acc;
}, {})
console.log(groupPeopleByCity);

let students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Eva", grade: "B" }
];

let groupStudents = students.reduce((acc, val) => {
    if (acc[val.grade]) {
        acc[val.grade].push(val.name)
    } else {
        acc[val.grade] = [val.name]
    }
    return acc;
}, {});

console.log(groupStudents);

let groupStudentObject = students.reduce((acc, val) => {
    if (acc[val.grade]) {
        acc[val.grade].push(val)
    } else {
        acc[val.grade] = [val]
    }
    return acc;
}, {});

console.log(groupStudentObject);

// group students by the first letter of their name
let groupStudentsByFirstLetter = students.reduce((acc, val) => {
    if (acc[val.name.charAt(0)]) {
        acc[val.name.charAt(0)].push(val.name)
    } else {
        acc[val.name.charAt(0)] = [val.name]
    }
    return acc;
}, {});

console.log(groupStudentsByFirstLetter);

let numbers = [10, 15, 20, 25, 30, 35];
// Group the numbers into two categories:
// "even" → all even numbers
// "odd" → all odd numbers

// Expected Output
// {
//   even: [10, 20, 30],
//   odd: [15, 25, 35]
// }

let groupByEvenOdd = numbers.reduce((acc, val) => {
    if (val % 2 === 0) {
        acc.even.push(val);
    } else {
        acc.odd.push(val);
    }

    return acc;
}, { even: [], odd: [] })

console.log(groupByEvenOdd);

// group numbers by remainder when divided by 3
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Expected output:
// {
//   0: [3, 6, 9],  // remainder 0
//   1: [1, 4, 7],  // remainder 1
//   2: [2, 5, 8]   // remainder 2
// }

let nums = [-3, -2, -1, 0, 1, 2, 3];

let groupByRemainder = nums.reduce((acc, val) => {
    if (acc[val % 3]) {
        acc[val % 3].push(val)
    } else {
        acc[val % 3] = [val]
    }
    return acc;
}, {})
console.log(groupByRemainder);

// If you want always non-negative remainders (common in grouping problems), you can normalize like this:
// let remainder = ((val % 3) + 3) % 3;

// let groupByRemainder = nums.reduce((acc, val) => {
//     if (acc[((val % 3) + 3) % 3]) {
//         acc[((val % 3) + 3) % 3].push(val)
//     } else {
//         acc[((val % 3) + 3) % 3] = [val]
//     }
//     return acc;
// }, {})



// You are given products with category and price. Group them first by category, and then by price range:
// "Cheap": price < 100
// "Mid": 100 ≤ price < 500
// "Expensive": price ≥ 500

// Expected Output:
// {
//   Electronics: {
//     Cheap: [ 'Headphones' ],
//     Mid: [],
//     Expensive: [ 'iPhone', 'MacBook' ]
//   },
//   Fruits: {
//     Cheap: [ 'Banana', 'Apple' ],
//     Mid: [ 'Mango' ],
//     Expensive: []
//   },
//   Vegetables: {
//     Cheap: [ 'Carrot', 'Broccoli' ],
//     Mid: [],
//     Expensive: []
//   }
// }


let products = [
    { name: "iPhone", category: "Electronics", price: 900 },
    { name: "MacBook", category: "Electronics", price: 1500 },
    { name: "Headphones", category: "Electronics", price: 80 },
    { name: "Banana", category: "Fruits", price: 5 },
    { name: "Apple", category: "Fruits", price: 3 },
    { name: "Mango", category: "Fruits", price: 120 },
    { name: "Carrot", category: "Vegetables", price: 2 },
    { name: "Broccoli", category: "Vegetables", price: 20 }
];

let productGrouping = products.reduce((acc, val) => {
    if (!acc[val.category]) {
        acc[val.category] = { Cheap: [], Mid: [], Expensive: [] };
    }
    if (val.price < 100) {
        acc[val.category].Cheap.push(val.name);
    } else if (val.price >= 100 && val.price < 500) {
        acc[val.category].Mid.push(val.name);
    } else {
        acc[val.category].Expensive.push(val.name);
    }

    return acc;
}, {})

console.log(productGrouping);

// Group the products first by category, and then within each category, group them by the first letter of their name.
let products2 = [
    { name: "Apple", category: "Fruits", price: 50 },
    { name: "Banana", category: "Fruits", price: 30 },
    { name: "Broccoli", category: "Vegetables", price: 80 },
    { name: "Carrot", category: "Vegetables", price: 40 },
    { name: "TV", category: "Electronics", price: 300 },
    { name: "Phone", category: "Electronics", price: 800 }
];

let groupedByCategoryThenFirstName = products2.reduce((acc, val) => {
    if (!acc[val.category]) {
        acc[val.category] = {};
    }

    if (!acc[val.category][val.name.charAt(0)]) {
        acc[val.category][val.name.charAt(0)] = [];
    }

    acc[val.category][val.name.charAt(0)].push(val.name)
    return acc;
}, {});

console.log(groupedByCategoryThenFirstName);

let products3 = [
    { name: "Apple", category: "Fruits", price: 120 },
    { name: "Banana", category: "Fruits", price: 60 },
    { name: "Broccoli", category: "Vegetables", price: 80 },
    { name: "Carrot", category: "Vegetables", price: 200 },
    { name: "TV", category: "Electronics", price: 1500 },
    { name: "Phone", category: "Electronics", price: 700 },
    { name: "Earbuds", category: "Electronics", price: 90 }
];

// Group products first by category, then by first letter of the name, and finally split them into price ranges:
// cheap (< 100)
// mid (100–500)
// expensive (> 500)

let grouped = products3.reduce((acc, val) => {
    if (!acc[val.category]) {
        acc[val.category] = {};
    }

    if (!acc[val.category][val.name.charAt(0)]) {
        acc[val.category][val.name.charAt(0)] =  { Cheap: [], Mid: [], Expensive: [] };
    }

    if (val.price < 100) {
        acc[val.category][val.name.charAt(0)].Cheap.push(val.name)
    } else if (100 <= val.price && val.price <= 500) {
        acc[val.category][val.name.charAt(0)].Mid.push(val.name)
    } else {
        acc[val.category][val.name.charAt(0)].Expensive.push(val.name)
    }

    return acc;
},{})

console.log(JSON.stringify(grouped, null, 2));
