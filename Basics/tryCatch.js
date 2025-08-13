// Custom Error Creation.
// User Registration Form Validation

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username, age) {
    if (!username || username.trim().length < 3) {
        throw new ValidationError("Username must be at least 3 characters long.");
    }
    if (age < 18) {
        throw new ValidationError("User must be at least 18 years old.");
    }

    console.log(`User "${username}" registered successfully!`);
}

try {
    registerUser("So", 22);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation Error: ${error.message}`)
    } else {
        console.error(`Any Other Error: ${error.message}`)
    }
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Q1.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid data");
} catch (err) {
    console.log(err.name); // ValidationError
    console.log(err instanceof ValidationError); // true
    console.log(err instanceof Error); // true
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q2.
class MyError extends Error {
    constructor(message) {
        this.name = "MyError";
        this.message = message;
    }
}

try {
    throw new MyError("Something went wrong");
} catch (err) {
    console.log(err.name); // Reference Error as constructor doesn't know about this.name being assigned to "MyError";
}
// In a subclass, you must call super() before using this — otherwise JavaScript throws a ReferenceError
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q3.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function processUser(username) {
    if (!username) throw new ValidationError("Username required");
    if (username.length < 3) throw new RangeError("Username too short");
    return `User: ${username}`;
}

try {
    console.log(processUser("Hi"));
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Validation:", err.message);
    } else if (err instanceof RangeError) {
        console.log("Range:", err.message); // Username too short
    } else {
        console.log("Unknown:", err.message);
    }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q4.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    try {
        throw new ValidationError("First error");
    } catch (err) {
        console.log("Inner catch:", err.message);
        throw new Error("Second error");
    }
} catch (err) {
    console.log("Outer catch:", err.message);
}

// Output: Inner Catch : First Error
// Outer catch: Second error

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q5.
function test() {
    try {
        throw new Error("Oops");
    } catch (err) {
        return "Caught";
    } finally {
        return "Finally Wins";
    }
}

console.log(test()); // Finally Wins. 
// If both catch and finally have return, the finally’s return overrides everything.

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Async Errors
// Q1.
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

async function fetchData(url) {
    if (!url.startsWith("https")) {
        throw new NetworkError("URL must start with https");
    }
    return { data: "Some data" };
}

(async () => {
    try {
        const result = await fetchData("http://example.com");
        console.log("Result:", result);
    } catch (err) {
        console.log(err.name, err instanceof NetworkError, err.message);
    }
})(); // NetworkError , true , URL must start with https

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q2.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function delayedError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new ValidationError("Too slow"));
        }, 0);
    });
}

try {
    delayedError();
} catch (err) {
    console.log("Caught:", err.message);
}
// Output will be nothing as delayedError() returns a promise that will reject later. try catch only catches synchronous errors not promis rejections.
// we didnt await or .catch() the promise the error is unhandled.
// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Q3.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

async function validate() {
    throw new ValidationError("Invalid");
}

(async () => {
    try {
        validate().catch(err => {
            console.log("Inner catch:", err.name);
            throw err;
        });
    } catch (err) {
        console.log("Outer catch:", err.name);
    }
})();

// validate()  returns a rejected promise. (Async functions always returns a Promise)
// .catch() on it handles the error and logs "Inner catch: ValidationError".
// When it throw err inside .catch(), it rejects the promise again — but this is async, so the outer try...catch (which is synchronous) doesn’t see it.
// No "Outer catch" is printed, because that block never catches async rejections.

//  This can be re-written in 2 ways for Outer catch actually catches the error.

// Using await();
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

(async () => {
    try {
        await validate(); // await makes try catch() see the rejection as the promise must have been resolved by now.
    } catch (error) {
        console.log("Outer Catch", error.name);
    }
})()

// Using .catch() and returning it.
    (async () => {
        try {
            await validate.catch(err => {
                console.log("Inner Catch", err.name);
                throw err; // rethrow so the outer trycatch can see it.

            });
        } catch (error) {
            console.log("Outer Catch", error.name);
        }
    })()

    
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Q4.
async function run() {
    try {
        throw new Error("Oops");
    } catch (err) {
        console.log("Caught:", err.message);
        return "From catch";
    } finally {
        return "From finally";
    }
}

run().then(console.log);
// Caught: Oops
//From finally


// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Q5.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

async function validateUser(user) {
    if (!user.name) throw new ValidationError("Name is required");
    if (user.age < 18) throw new ValidationError("Must be at least 18");
    return "Valid user";
}

async function saveUser(user) {
    try {
        const result = await validateUser(user);
        console.log("Validation passed:", result);
        throw new DatabaseError("DB connection failed");
    } catch (err) {
        console.log("saveUser catch:", err.name);
        throw new Error("Save failed");
    }
}


(async () => {
    try {
        await saveUser({ age: 16 });
    } catch (err) {
        console.log("Outer catch:", err.name, "-", err.message);
    }
})();

// Flow:
//  saveUser => age = 16;
// validateUser => user.name is not there so will throw error with message "Name is required"
// now command shifts to catch of saveUser => saveUser catch: , ValidationError
// new error is thrown replacing the older ValidationError 

// in outer catch , Outer catch: , Error - Save failed will be printed

// Output: 
// saveUser catch: ValidationError
// Outer catch: Error - Save failed

// ----------------------------------------------------------------------------------------------------------

// Q6.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

async function fetchUserData(id) {
    if (id < 0) throw new ValidationError("Invalid ID");
    console.log("Fetching user data...");
    throw new NetworkError("Request timed out");
}

async function processUser(id) {
    try {
        return await fetchUserData(id);
    } catch (err) {
        console.log("processUser catch:", err.name);
        if (err instanceof NetworkError) {
            throw new DatabaseError("Could not save due to network issue");
        }
        throw err;
    } finally {
        console.log("processUser finally");
    }
}

async function mainFlow(id) {
    try {
        const result = await processUser(id);
        console.log("Result:", result);
        return "Success";
    } catch (err) {
        console.log("mainFlow catch:", err.name);
        return "Recovered";
    } finally {
        console.log("mainFlow finally");
        return "Finally Wins";
    }
}

(async () => {
    const output = await mainFlow(1);
    console.log("Final output:", output);
})();

// Output:
// Fetching user data...
// processUser catch:NetworkError
// processUser finally
// mainFlow catch:DatabaseError
// mainFlow finally
// Final output: Finally Wins

// ---------------------------------------------------------------------

// Q7.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

let status = "Initial";

async function riskyOperation() {
    try {
        console.log("Starting risky operation");
        throw new NetworkError("Lost connection");
    } catch (err) {
        console.log("Caught in riskyOperation:", err.name);
        status = "Error handled";
        return "Operation failed";
    } finally {
        console.log("riskyOperation finally");
        status = "Cleanup done";
    }
}

(async () => {
    const result = await riskyOperation();
    console.log("Result:", result);
    console.log("Status:", status);
})();

// output
// Starting risky operation
// Caught in riskyOperation:NetworkError
// riskyOperation finally
// Result:Operation failed
// Status:Cleanup done

// Async Error Handling question - Guess if errors are handled or not , if yes then guess the output.

// Q1.
async function test1() {
    try {
        await Promise.reject(new Error("Boom!"));
    } catch (err) {
        console.log("Handled:", err.message);
    }
}
test1();

// it will be handled because we are using await.
// Output: "Handled:": "Boom!"

// Q2.
async function test2() {
    try {
        Promise.reject(new Error("Boom!"));
    } catch (err) {
        console.log("Handled:", err.message);
    }
}
test2();
// Not handled

// Q3.
async function throwsAsync() {
    throw new Error("Boom!");
}

try {
    throwsAsync();
} catch (err) {
    console.log("Handled:", err.message);
}
// Not Handled

// Q4.
Promise.resolve()
    .then(() => {
        throw new Error("Boom!");
    })
    .then(() => {
        console.log("Next step");
    });
// not handled as there is no catch() involved

// Q5.
Promise.resolve()
    .then(() => {
        throw new Error("Boom!");
    })
    .then(() => {
        console.log("This will not run");
    })
    .catch(err => {
        console.log("Handled:", err.message);
    });

//     yes handled.
// "Handled:""Boom!"

// Q6.
try {
    setTimeout(() => {
        throw new Error("Boom!");
    }, 0);
} catch (err) {
    console.log("Handled:", err.message);
}
// not handled

// Q7.
async function run1() {
    try {
        return await Promise.reject(new Error("Fail 1"));
    } finally {
        console.log("Finally in run1");
    }
}

run1()
    .then(res => console.log("Resolved:", res))
    .catch(err => console.log("Caught:", err.message));


// Finally in run1
// Caught:Fail 1

// Q8.
async function run3() {
    try {
        await Promise.reject(new Error("Fail 3"));
    } catch (err) {
        console.log("Caught inside:", err.message);
    } finally {
        console.log("Finally in run3");
    }
}

run3()
    .then(() => console.log("run3 done"));

// output:
// Caught inside:Fail 3
// Finally in run3
// run3 done
