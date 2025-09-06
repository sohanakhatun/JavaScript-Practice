// Find Second Largest Element without sorting the array.

function secondLargest(arr) {
    let largest = -1, secondLargest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 25, 47, 3, 99, 56]));
console.log(secondLargest([-10, -5, -20]));
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
console.log(secondLargest([10, 10, 10]));

//  Write a function findDuplicates(arr) that returns an array of all elements that appear more than once.
function findDuplicates(arr) {
    let map = new Map();
    let newArr = [];
    for (const element of arr) {
        if (map.has(element)) {
            if (map.get(element) === 1) {
                newArr.push(element)
            }
            map.set(element, (map.get(element) + 1));
        } else {
            map.set(element, 1);
        }
    }

    return newArr;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5, 1, 6]));

// Move all zeros to the end of an array in a single pass without using inbuilt functions.
// let arr = [0, 1, 0, 3, 12, 0, 5];
// Expected Output: 
// [1, 3, 12, 5, 0, 0, 0]

// function moveZeroesToend(arr) {
//     let result = [];
//     for (const element of arr) {
//         if (element != 0) {
//             result.push(element)
//         }
//     }

//     for (let index = result.length; index < arr.length; index++) {
//         result[index] = 0;
//     }

//     return result;
// } // Time Complexity - O(n) Space Complexity - O(n)

function moveZeroesToend(arr) {
    let insertPosition = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[insertPosition] = arr[i];
            insertPosition++;
        }
    }

    for (let index = insertPosition; index < arr.length; index++) {
        arr[index] = 0;
    }

    return arr;
}
console.log(moveZeroesToend([0, 1, 0, 3, 12, 0, 5]));

// Rearrange array so that all negative numbers appear before positive numbers. Maintain Order.

function rearrangeNegativesFirst(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i]);    
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);    
        }
    }
   
    return result;
}

console.log(rearrangeNegativesFirst([3, -2, -5, 6, -1, 4]));