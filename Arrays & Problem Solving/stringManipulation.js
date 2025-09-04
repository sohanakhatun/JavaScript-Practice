// Reverse a string without using .reverse().
function reverseString(str) {
    let arr = str.split("");
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}

let reversedString = reverseString("Sohana");
console.log(reversedString);


// Check if a string is a palindrome.

function isPalindrome(str) {
    let arr = str.toLowerCase().split("");
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

let palindrome = isPalindrome("Radar");
console.log(palindrome);

// More efficient solution -
//No need to split into array - 
// function isPalindrome(str) {
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] !== str[str.length - 1 - i]) return false;
//   }
//   return true;
// }


// Count the occurrences of each character in "mississippi".
function countOccurance(str) {
    let map = new Map();
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1);
        }
    }
    return map;
}

let count = countOccurance("mississippi");
console.log(count);

// Remove all vowels from a string.
function removeVowels(str) {
    let vowels = 'aeiouAEIOU';
    let result = "";
    for (const char of str) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}

console.log(removeVowels("abcdeyu"));

// Use a Set for faster lookup (O(1) instead of O(n) for includes):
// let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
// if (!vowels.has(char)) result += char;

// Find the first non-repeating character in a string.
function firstNonRepeatingChar(str) {
    let map = new Map();
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1);
        }
    }

    for (const [char, count] of map) {
        if (count === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("abcdddbaabd"));

// Capitalize the first letter of each word in "hello world".
function capitalizeFirstLetter(str) {
    let arr = str.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase()) + " "
    }

    return result.trim();
}

console.log(capitalizeFirstLetter("Hello World"));


// Given "aabbccdde", compress it into "a2b2c2d2e1".
function compressString(str) {
    let map = new Map();
    let result = "";
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1);
        }
    }

    for (const [char, count] of map) {
        result += char + count;
    }

    return result;
}

console.log(compressString("abcdddbaabd"));

// Expected Output = a1b1c1d3b1a2b1d1
function compressString2(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }


    return result;
}

console.log(compressString2("abcdddbaabd"));


// Check if two strings are anagrams of each other.
// Two strings are anagrams if:
// They contain the exact same characters
// With the same frequency
// And usually of the same length
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length != str2.length) {
        return false;
    }

    let map = new Map();
    for (const char of str1) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1);
        }
    }
    for (const char of str2) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) < 0) return false;
        } else {
            return false;
        }
    }

    for (const [char, count] of map) {
        if (count != 0) {
            return false;
        }
    }

    return true;

}

console.log(isAnagram("Listen", "Silent"));

// Find the longest word in "The quick brown fox jumped over the lazy dog".
function longestWord(str) {
    let arr = str.split(" ");
    let length = 0;
    let result = "";
    for (const st of arr) {
        if (st.length > length) {
            length = st.length;
            result = st;
        }
    }

    return result;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// Reverse the words in a sentence: "I love coding" → "coding love I".
function reverseSentence(str) {
    let arr = str.split(" ");
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join(" ");
}

console.log(reverseSentence("I love coding"));