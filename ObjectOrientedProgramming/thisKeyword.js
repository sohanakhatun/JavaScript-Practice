// this and it's scope.

// Function Context (Global Context);

// Non strict mode
// function globalExample() {
//     console.log(this); // window object.  
// }
// globalExample();

// strict mode.
"use strict";
function globalExampleStrictMode() {
    console.log(this);
}

globalExampleStrictMode(); // undefined.
// ṇ(); // window.


// // Rule 2: Object Context.
const obj = {
    name: "John",
    greet() {
        console.log('Hello, ' + this.name + '!');
    }
}
obj.greet();

// // Nested Objects.
let obj1 = {
    x: 10, y: 20,
    z: {
        x: 99,
        fn: function () {
            console.log(this.x, this.y); // 99 undefined.
        }
    }
}
let obj4 = {
    x: 10, y: 20,
    z: {
        x: 99,
        fn: () => {
            console.log(this.x, this.y); // undefined , undefined as this is arrow function hence it will search for this in its enclosing lexical context which is window object here coz z and obj4 are both objects here and objects dont form any new this binding.
        }
    }
}

// // call site of fn is the nested object z.
obj1.z.fn(); // 99 undefined

// // Arrow Functions.
const obj2 = {
    name: "John",
    greet: () => {
        console.log(this.name); // undefined as the lexical context for greet() is the obj , since obj don’t create a new this binding. so it will look up to its parent which is window object.
    }
}
obj2.greet();

const obj3 = {
    name: "John",
    fn: function () {
        const greet = () => {
            console.log(this.name);
            // for this the lexical context(enclosing lexical context) is function fn(). 
            // The only time this points to an object is 
            // when you call a function as a method on that object.
            // Hence, here this will refer to the obj3 object.
            // Hence , output will be "John";
        }
        greet();
    }
}
obj2.greet();

// Call , Apply , Bind Methods.
function traditionalFunction() {
    console.log(this.name);
}

const obj6 = { name: "Sohana" };
traditionalFunction.call(obj6); // Sohana

const arrowFunctionForTraditionalFunction = () => {
    console.log(this.name);
}
arrowFunctionForTraditionalFunction.call(obj6); // undefined as this refers to the window object.


let name = {
    firstname: "John",
    lastname: "Doe",
    printFullName: function () {
        console.log(this.firstname + " " + this.lastname);
    }
}

name.printFullName(); // John Doe

let name2 = {
    firstname: "John2",
    lastname: "Doe2"
}

// Call
// Function borrowing.
// we can borrow functions from other objects using call or apply methods.
name.printFullName.call(name2); // John2 Doe2

// With parameters.
// for reusing functions
// we generally dont keep it inside the object but rather outside of it.
let printFullName = function (hometown , state) {
    console.log(this.firstname + " " + this.lastname + " " + hometown + " " + state);
}

printFullName.call(name, "Mumbai","Maharastra"); // John Doe Mumbai Maharastra

//apply takes the parameters as array.
printFullName.apply(name2, ["Mumbai","Maharastra"]); // John2 Doe2 Mumbai Maharastra

// bind() 
// returns a copy of the function 
// with this keyword bound to the first argument passed into bind.
let printMyName = printFullName.bind(name,"Mumbai","Maharastra");
console.log(printMyName); 
// returns a copy of the function with this keyword
//  bound to the first argument passed into bind.
printMyName(); // John Doe Mumbai Maharastra