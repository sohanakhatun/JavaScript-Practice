
// Q1.
// Write a function getFirstAndSecond(arr) that takes an array and returns the first and second elements using array destructuring.
function getFirstAndSecond(arr) {
    const [first, second] = arr;
    return [first, second];
}

console.log(getFirstAndSecond([1, 2, 3, 4]));

// Q2.
//Write a function swapFirstTwo(arr) that takes an array and swaps the first two elements using array destructuring assignment.

function swapFirstTwo(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]]
    return arr;
}

console.log(swapFirstTwo([1, 2, 3, 4]));

// Q3.
// Write a function extractInfo(arr) that takes an array with at least 4 elements.
// Extract the first element as first,
// Skip the second element,
// Extract the third element as third,
// Collect the rest of the elements into an array called rest.
// Return an object:
// { first, third, rest }
function extractInfo(arr) {
    const [first, , third, ...rest] = arr;
    return { first, third, rest }
}
console.log(extractInfo([100, 200, 300, 400, 500]));

// Q4.
// Write a function swapEnds(arr) that takes an array and swaps the first and last elements using array destructuring.

function swapEnds(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
}
console.log(swapEnds([1, 2, 3, 4]));

// Q5.
// Write a function reorderArray(arr) that:
// Extracts the first element as first,
// Extracts the last element as last,
// Puts everything else into middle (using rest).
// Return a new array in this order: [last, ...middle, first]

function reorderArray(arr) {
    const last = arr[arr.length - 1];
    arr.pop();
    const [first, ...middle] = arr;
    return [last, ...middle, first]
}

// ChatGPT sol
// function reorderArray(arr) {
//     const [first, ...rest] = arr;
//     const last = rest.pop();
//     return [last, ...rest, first];
// }

console.log(reorderArray([10, 20, 30, 40, 50]));

// Q6.
// Write a function extractNested(arr) that works like this:
// Input is a nested array:
// [1, [2, 3], 4, [5, 6]]
// Extract:
// first = 1
// second = 2
// third = 3
// last = 6
// Return an object:
// { first, second, third, last }

// Solution 1 ---------------
// function extractNested(arr) {
//     const [first, [second, third], ...rest] = arr;
//     const last = rest.pop()[1];
//     return { first, second, third, last }
// }

// Solution 2 ---------------
function extractNested(arr) {
    const [first, [second, third], , [, last]] = arr;
    return { first, second, third, last }
}

console.log(extractNested([1, [2, 3], 4, [5, 6]]));

// Q7.
// From this object, extract using destructuring:
// name
// The first skill as primarySkill
// The last skill as lastSkill
// city
// Return an object like:
// { name, primarySkill, lastSkill, city }

const user = {
    id: 101,
    name: "Sohana",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    address: {
        city: "Bengaluru",
        pin: 560001
    }
};

// function extractUserInfo(user) {
//     const { name: name, skills: [ primarySkill , ...restSkills ], address: { city } } = user;
//     const lastSkill = restSkills.pop();
//     return {name , primarySkill , lastSkill , city};
// }

// without pop
function extractUserInfo(user) {
    const { name: name, skills: [primarySkill, , , lastSkill], address: { city } } = user;
    return { name, primarySkill, lastSkill, city };
}

console.log(extractUserInfo(user));

// Q8.
// Write a function extractData(data) using destructuring to extract:
// name
// email
// The second phone number as secondaryPhone
// status
// Return an object like:
// { name, email, secondaryPhone, status }

const data = {
    user: {
        id: 1,
        profile: {
            name: "Sohana",
            contact: {
                email: "sohana@example.com",
                phones: ["111-111", "222-222"]
            }
        }
    },
    status: "active"
};

function extractData(data) {
    const { user: {
        profile: {
            name,
            contact: { email, phones: [, secondaryPhone] }
        }
    }, status } = data;
    return { name, email, secondaryPhone, status };
}

console.log(extractData(data));

// Q9.
// Write a function parseResponse(apiResponse) using destructuring to extract:
// name
// The first skill as primarySkill
// The tech of the last project as lastProjectTech
// requestId
// Return an object like:
// { name, primarySkill, lastProjectTech, requestId }

const apiResponse = {
    success: true,
    data: {
        user: {
            id: 7,
            name: "Sohana",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            projects: [
                { title: "E-commerce", tech: "Shopify" },
                { title: "Portfolio", tech: "React" },
                { title: "Portfolio", tech: "React2" }
            ]
        }
    },
    meta: {
        requestId: "XYZ123"
    }
};


function parseResponse(apiResponse) {
    const { data: {
        user: { name, skills: [primarySkill], projects: allProjects }
    }, meta: { requestId } } = apiResponse;
    const lastProjectTech = allProjects.pop().tech;

    return { name, primarySkill, lastProjectTech, requestId };
}

console.log(parseResponse(apiResponse));

// Interview Followup: using pop would mutates the original array. can u use a non mutating method instead , i dont want to change anything to the original array.
function parseResponse(apiResponse) {
    const { data: {
        user: { name, skills: [primarySkill], projects: allProjects }
    }, meta: { requestId } } = apiResponse;
    const lastProjectTech = allProjects[allProjects.length - 1].tech;

    return { name, primarySkill, lastProjectTech, requestId };
}

console.log(parseResponse(apiResponse));

// Q10.
// Write a function extractProfile(response) that uses only destructuring to extract:
// fullName (rename to name)
// email
// primaryPhone (first phone)
// secondaryPhone (second phone, but if missing, default to "N/A")
// primarySkill (first skill)
// status
// And return them as an object like:
// {
//   name: "...",
//   email: "...",
//   primaryPhone: "...",
//   secondaryPhone: "...",
//   primarySkill: "...",
//   status: "..."
// }

const response = {
    user: {
        id: 501,
        profile: {
            fullName: "Sohana Khatun",
            contact: {
                email: "sohana@example.com",
                phones: ["+91-9999999999"]
            },
            skills: ["HTML", "CSS", "JavaScript"]
        }
    },
    meta: {
        status: "success"
    }
};

function extractProfile(response) {
    const { user: {
        profile: {
            fullName: name, contact: {
                email, phones: [primaryPhone, secondaryPhone = "N/A"]
            }, skills: [primarySkill]
        }
    }, meta: {
        status
    } } = response;
    return { name, email, primaryPhone, secondaryPhone, primarySkill, status }
}

console.log(extractProfile(response));

// Q11.
// leader → First member’s name (Alice)
// leaderSkill → First skill of leader (JS)
// coLeader → Second member’s name (Bob)
// secondSkill → Second skill of coLeader (CSS). Defaults to "NA" if missing.
// requestId → From meta

const response2 = {
    teams: [
        {
            id: 1,
            members: [
                { name: "Alice", skills: ["JS", "React", "Node"] },
                { name: "Bob", skills: ["HTML", "CSS"] }
            ]
        },
        {
            id: 2,
            members: [
                { name: "Charlie", skills: ["Python", "Django"] },
                { name: "Dave", skills: ["Go"] }
            ]
        }
    ],
    meta: {
        status: "ok",
        requestId: "REQ-999"
    }
};

function returnResponse(response) {
    const { teams: [{ members: [
        { name: leader, skills: [leaderSkill] }, { name: coLeader, skills: [, secondSkill] }
    ] }], meta: { requestId } } = response;
    return { leader, leaderSkill, coLeader, secondSkill, requestId }
}

console.log(returnResponse(response2));