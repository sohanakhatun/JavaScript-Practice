// Copy an array [10, 20, 30] into a new array using spread operator.
let originalArray = [10, 20, 30];
let copiedArray = [...originalArray];
console.log(copiedArray);

// Merge two arrays: ["red", "green"] and ["blue", "yellow"].
let arr1 = ["red", "green"];
let arr2 = ["blue", "yellow"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Add "grapes" at the beginning and "mango" at the end of ["apple", "banana"] using spread.
let arr4 = ["apple", "banana"];
let arr5 = ["grapes", ...arr4, "mango"];
console.log(arr5);

// Merge them using spread operator but make sure arr7 elements come before arr6.
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let arr8 = [...arr7, ...arr6];
console.log(arr8);

// Create a shallow copy of [[1,2],[3,4]] and then modify one subarray. Observe what happens.
let arr9 = [[1, 2], [3, 4]];
let shallowCopy = [...arr9];
console.log("Before:", shallowCopy);

// Modify one inner array
arr9[0][0] = 99;

console.log("After arr9 change:", arr9);
console.log("Shallow Copy:", shallowCopy);

// Combine two arrays [1,2,3] and [2,3,4,5] into one array without duplicates using spread and Set.
let arr10 = [1, 2, 3];
let arr11 = [2, 3, 4, 5];
let arr12 = [...new Set([...arr10, ...arr11])];
console.log(arr12);

// Flatten an array [[1,2], [3,4], [5,6]] into [1,2,3,4,5,6] using spread.
let arr13 = [[1, 2], [3, 4], [5, 6]];
// let flatArray = [...arr13[0] , ...arr13[1] , ...arr13[2]];

let flatArray = [].concat(...arr13);
console.log(flatArray);

// Insert [100, 200] into the middle of [1, 2, 3, 4] using spread.
let arr14 = [1, 2, 3, 4];
// function insertIntoMiddle(arr, x, y) {
//     let mid = 0;
//     let part1;
//     let part2;
//     if (arr.length % 2 === 0) {
//         mid = (arr.length) / 2;
//         part1 = arr.slice(0, mid);
//         part2 = arr.slice(mid);
//     } else {
//         mid = (arr.length + 1) / 2;
//         part1 = arr.slice(0, mid);
//         part2 = arr.slice(mid,arr.length);
//         console.log(part1);
//         console.log(part2);
//     }

//     return [...part1,x,y,...part2];
// }

// Better Solution -->
function insertIntoMiddle(arr, ...elements) {
    let mid = Math.floor(arr.length / 2);
    return [...arr.slice(0, mid), ...elements, ...arr.slice(mid)];
}

console.log(insertIntoMiddle([1, 2, 3, 4 ], 100, 200)); 
// [1, 2, 100, 200, 3, 4]


let res = insertIntoMiddle(arr14,100,200);
console.log(res);

// Remove duplicates from [1, 2, 2, 3, 4, 4, 5] using spread + Set.
let array = [1, 2, 2, 3, 4, 4, 5];
const duplicates = [...new Set([...array])];
console.log(duplicates);