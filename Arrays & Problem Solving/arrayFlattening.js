function shallowFlatten(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(val);
    }, []);
}

console.log(shallowFlatten([1, [2, 3], [4, 5], 6]));

function isFlat(arr) {
    return arr.every(el => !Array.isArray(el));
}
function deepFlatten(arr) {
    while (!isFlat(arr)) {
        arr = shallowFlatten(arr)
    }

    return arr;
}

console.log(deepFlatten([1, [2, [3, 4], 5], 6]));

// Recursive Version (Single-pass)
function deepFlattenRecursive(arr) {
    return arr.reduce((acc, val) =>
        acc.concat(Array.isArray(val) ? deepFlattenRecursive(val) : val)
        , []);
}

console.log(deepFlattenRecursive([1, [2, [3, 4], 5], 6]));

// ------------------------------------------------------------------


// Task:
// Flatten the array completely (all levels).
// Filter out products with price < 100.
// Return an array of product names only.
// Expected output:
// ["Apple", "Cherry", "Date", "Fig"]

let products = [
    { name: "Apple", price: 120 },
    [
        { name: "Banana", price: 60 },
        { name: "Cherry", price: 200 }
    ],
    { name: "Date", price: 150 },
    [
        { name: "Eggfruit", price: 90 },
        [
            { name: "Fig", price: 300 },
            { name: "Grape", price: 50 }
        ]
    ]
];

function getExpensiveProducts(products) {
    let flatArray = deepFlattenRecursive(products);
    let expensiveProducts = flatArray.reduce((acc, val) => {
        if (val.price > 100) {
            acc.push(val.name);
        }

        return acc;
    }, [])

    return expensiveProducts;
}

console.log(getExpensiveProducts(products));

// ---------------------------------------------------------------

// Question:
// You are given an array of orders. Each order has a customer and an array of products. Some products are nested arrays (bundled products):
// let orders = [
//   { customer: "Alice", products: ["Apple", ["Banana", "Cherry"]] },
//   { customer: "Bob", products: [["Date", "Eggfruit"], "Fig"] },
//   { customer: "Charlie", products: ["Grape"] }
// ];
// Task:
// Flatten each customer's products completely.
// Group products by customer.
// Expected output:
// {
//   Alice: ["Apple", "Banana", "Cherry"],
//   Bob: ["Date", "Eggfruit", "Fig"],
//   Charlie: ["Grape"]
// }
// Write a function groupProductsByCustomer(orders) that does this.

// let orders = [
//     { customer: "Alice", products: ["Apple", ["Banana", "Cherry"]] },
//     { customer: "Bob", products: [["Date", "Eggfruit"], "Fig"] },
//     { customer: "Charlie", products: ["Grape"] }
// ];

let orders = [
    { customer: "Alice", products: ["Apple", ["Banana", "Cherry"]] },
    { customer: "Bob", products: [["Date", "Eggfruit"], "Fig"] },
    { customer: "Alice", products: ["Grape", ["Honeydew"]] } // Alice has another order
];

function groupProductsByCustomer(orders) {
    let order = orders.reduce((acc, val) => {
        if (!acc[val.customer]) {
            acc[val.customer] = deepFlattenRecursive(val.products);
        } else {
            // acc[val.customer].push(deepFlattenRecursive(val.products)); // push will not work when there is more than one order for a customer. as it will just push the 2nd order like that.
            acc[val.customer].concat(deepFlattenRecursive(val.products));
        }

        return acc;
    }, {});
    return order;
}


console.log(groupProductsByCustomer(orders));