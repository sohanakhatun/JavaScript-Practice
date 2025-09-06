// Recursive Deep Clone
function deepClone(obj) {
    // If the obj is null or not a object (it is a primitive) return it directly.
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        let copy = [];
        for (let index = 0; index < obj.length; index++) {
            copy[index] = deepClone(obj[index]);
        }

        return copy;
    }

    // Handle Objects
    let copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }

    return copy;
}

// Nested Array
let arr = [1, [2, 3], [4, [5, 6]]];
let clonedArr = deepClone(arr);
console.log(clonedArr);

console.log(clonedArr === arr); // False
console.log(clonedArr[1] === arr[1]); // False (Deep copied)
console.log(clonedArr[2][1] === arr[2][1]); // False (Deep copied)

// Array of Objects
let students = [
    { name: "Alice", grades: [90, 95] },
    { name: "Bob", grades: [80, 85] }
];

let clonedStudents = deepClone(students);

console.log(clonedStudents);

console.log(clonedStudents === students); // false
console.log(clonedStudents[0] === students[0]); // false
console.log(clonedStudents[0].grades === students[0].grades); // false

// Object 
let user = {
    name: "Alice",
    address: {
        city: "Paris",
        zip: 75000
    },
    hobbies: ["reading", "gaming"]
};

let clonedUser = deepClone(user);

console.log(clonedUser);
// {
//   name: 'Alice',
//   address: { city: 'Paris', zip: 75000 },
//   hobbies: [ 'reading', 'gaming' ]
// }

console.log(clonedUser === user); // false (different object)
console.log(clonedUser.address === user.address); // false (deep copy successful)


// This solution works fine when there is no circular reference in the array or the object.
//  Circular reference means reference to the object itself.
// Example:

let arr2 = [1, 2];
arr2.push(arr2); // Self reference.

// let clonedArr2 = deepClone(arr2); // This will crash : "Maximum call stack size exceeded".
// This goes into an infinite recursive loop since it gets itself in the params of the deepClone function.

// To fix this we can use WeakMap() and keep a track of the visited items.

// Circular Safe deep clone.
function safeDeepClone(obj, visited = new WeakMap()) {
    // If the obj is null or not a object (it is a primitive) return it directly.
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // If already cloned, return the stored copy (to handle circular references)
    if (visited.has(obj)) {
        return visited.get(obj);
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        let copy = [];
        visited.set(obj, copy);
        for (let index = 0; index < obj.length; index++) {
            copy[index] = safeDeepClone(obj[index], visited);
        }

        return copy;
    }

    // Handle Objects
    let copy = {};
    visited.set(obj, copy);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = safeDeepClone(obj[key], visited);
        }
    }

    return copy;
}

// Example Usage:
let obj = { name: "Alice" };
obj.self = obj; // circular reference

let cloned = safeDeepClone(obj);

console.log(cloned.name); // "Alice"
console.log(cloned.self === cloned); // true (circular preserved)
console.log(cloned.self === obj);    // false (separate object)

// Why WeakMap instead of regular Map or set ?

// 1. Keys must be Objects :
//  That's exactly what we are tracking (Objects/array). No accidental primitive keys.

// 2. Weak references:
// If the original object is no longer reachable elsewhere in the code the entry in the weakMap can be garbage collected automatically this prevents memory leaks.

// 3. One to one mapping:
// Each original object maps to exactly one cloned object.
// WeakMap gives O(1) lookup just like Map.

// ---------------------------------------------------------------------------------

// structuredClone(obj)
let obj3 = {
    a: 1,
    b: { c: 2 },
    d: new Date(),
    e: new Map([["x", 10]])
};

let clone2 = structuredClone(obj3);

clone2.b.c = 99;

console.log(obj3.b.c);    // 2 unaffected
console.log(clone2.b.c);  // 99
console.log(clone2.d);    // Date object preserved
console.log(clone2.e);    // Map preserved


// JSON.parse(JSON.stringify(obj))
let obj2 = {
    a: 1,
    b: { c: 2 },
    d: new Date(),
    e: undefined,
    f: () => console.log("hi"),
};

let clone = JSON.parse(JSON.stringify(obj2));

clone.b.c = 99;

console.log(obj2.b.c);    // 2  unaffected
console.log(clone.b.c);  // 99
console.log(clone.d);    //  became string (date lost)
console.log(clone.e);    //  undefined removed
console.log(clone.f);    //  function removed


// Functions can not be cloned. 
function cloneFunction(fn) {
    const fnString = fn.toString();
    return new Function("return " + fnString)();
}

const fn = function (x) { return x * 2; };
const clonedFn = cloneFunction(fn);

console.log(clonedFn(5)); // 10 
console.log(clonedFn === fn); // false 
