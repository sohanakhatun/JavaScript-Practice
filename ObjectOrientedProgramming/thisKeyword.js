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

// Q1.
const person1 = {
  name: "Sohana",
  greet() {
    console.log("Hello " + this.name);
  }
};

const greetFn = person1.greet;
greetFn(); // Hello Undefined as this in function scope points to global scope and in there name is not defined.

// Q2.
const person2 = {
  name: "Sohana",
  greet: function() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

person2.greet();
// Inside person.greet, you define a regular function inner().
// When inner() is invoked, it’s not called as a method of person — it’s just a plain function call.
// In a plain function call, this is:undefined in strict mode and the global object in non-strict mode

// Q3.
var name = "Global";

const person = {
  name: "Sohana",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // Sohana because greet() is called as a method of person hence this refers to person.
const fn = person.greet; // fn is just a reference to the function and is not attached to person hence it is in the global scope.
fn();

// Q4.
console.log(this); // undefined

function test() {
  console.log(this); // undefined
}

test();

// Q5.
const obj = {
  name: "Sohana",
  getName: function () {
    console.log(this.name);
  },
};

const fn = obj.getName;
fn(); //undefined


// Q6.
const obj = {
  name: "Sohana",
  regular: function() {
    console.log(this.name); // Sohana
    const inner = function() {
      console.log(this.name); // undefined
    };
    inner();
  }
};

obj.regular();

// Q7.
"use strict";

function Person(name) {
  this.name = name;
  return () => {
    console.log(this.name);
  };
}

const fn = Person("Sohana");
fn();

// Q8.
const person = {
  name: "Sohana",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

person.greet(); // undefined will be printed after 1sec because we are using a normal function inside setTimeOut , hence the call site of this function will be global scope and there is no name defined in global scope.

const person = {
  name: "Sohana",
  greet: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

person.greet(); // since here we have arrow function it will search in its lexical scope and its lexical scope is greet() which has the call site of person object hence name will be sohana.

// Q9.
function Person(name) {
  this.name = name;
  console.log(this.name);
}

const p1 = new Person("Sohana"); // Sohana
const p2 = Person("Khatun"); // undefined

// Sohana(Because with new keyword this refers to the plain object Person here and person has name defined in its scope hence output will be Sohana)
//  p2 is just a plain function call hence this refers to global scope and there is no name defined in global scope. ==> undefined in strict mode and Khatun in non strict mode as window object would be the global object and window has name as person was already invoked.

// Q10.
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }

  sayNameArrow = () => {
    console.log(this.name);
  };
}

const p = new Person("Sohana");

const method = p.sayName; 
const arrowMethod = p.sayNameArrow;

method(); // undefined
arrowMethod(); // Sohana

// const method = p.sayName; method();
// sayName is a normal class method.
// When detached and called as method(), this is undefined (strict mode).
// So this.name → undefined.

// const arrowMethod = p.sayNameArrow; arrowMethod();
// sayNameArrow is defined as an arrow function property of the instance.
// Arrow functions lexically bind this at the time of creation.
// When p was created, this inside sayNameArrow was bound to p.
// So this.name → "Sohana".

// Q11.
const person = {
  name: "Sohana",
  greet: function() {
    console.log("Outer:", this.name); // Sohana as this refers to person

    function inner() {
      console.log("Inner:", this.name); // undefined as this refers to global
    }

    inner();
  }
};

person.greet();

// Q12.
function Person(name) {
  this.name = name;

  setTimeout(function() {
    console.log("Normal:", this.name); // undefined
  }, 1000);

  setTimeout(() => {
    console.log("Arrow:", this.name); // Sohana
  }, 1000);
}

new Person("Sohana");

// Q13.
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log("Method:", this.name);
  }

  sayNameArrow = () => {
    console.log("Arrow:", this.name);
  };
}

const p = new Person("Sohana");

setTimeout(p.sayName, 500); 
setTimeout(p.sayNameArrow, 1000);

// Q14.
function Person() {
  this.name = "Sohana";

  this.outer = function() {
    console.log("Outer:", this.name); // Sohana

    const innerArrow = () => {
      console.log("Inner Arrow:", this.name); // Sohana
    };

    function innerNormal() {
      console.log("Inner Normal:", this.name); // undefined
    }

    innerArrow();
    innerNormal();
  };
}

const p = new Person();
p.outer();

// Q15.
const obj = {
  name: "Outer",
  child: {
    name: "Inner",
    method: function() {
      console.log("Method:", this.name); // Inner

      const arrowFn = () => {
        console.log("ArrowFn:", this.name); // Inner
      };

      function normalFn() {
        console.log("NormalFn:", this.name); // undefined
      }

      arrowFn();
      normalFn();
    }
  }
};

obj.child.method();

// Q16.
var name1 = "Global";

const obj = {
  name1: "Sohana",
  regularFn: function () {
    console.log("Regular:", this.name1); // Sohana
    setTimeout(function () {
      console.log("Timeout Regular:", this.name1); // Global but if we change it to name then it will give undefined as window.name is a special property in browsers.f you set window.name = "Global", the browser treats it as a special string, but when you later read it from inside a function, it may behave strangely, and depending on timing, can even appear as "" (empty string) or not what you expect. 
    }, 0);
  },
  arrowFn: function () {
    console.log("Arrow:", this.name1); // Sohana
    setTimeout(() => {
      console.log("Timeout Arrow:", this.name1); // Sohana
    }, 0);
  }
};

obj.regularFn();
obj.arrowFn();

// Q17.
var name1 = "Global";

function Person(name1) {
  this.name1 = name1;
  this.arrow = () => console.log("Arrow:", this.name1); //Sohana
  this.regular = function() {
    console.log("Regular:", this.name1); // Global
  };
}

const p1 = new Person("Sohana");

setTimeout(p1.arrow, 100);   
setTimeout(p1.regular, 200);

const p2 = { 
  name1: "Inner", 
  fn: p1.arrow //Sohana
 };
setTimeout(p2.fn, 300);  // Sohana

const p3 = {
   name1: "Another",
    fn: p1.regular // Global
   };
setTimeout(p3.fn, 400); // Global

// Q18.
var name = "Global";

function Outer() {
  this.name = "Outer";

  const arrow1 = () => {
    console.log("Arrow1:", this.name); // Outer
  };

  function inner() {
    console.log("Inner:", this.name); // BoundInner

    const arrow2 = () => {
      console.log("Arrow2:", this.name);
    };

    return arrow2;
  }

  const boundInner = inner.bind({ name: "BoundInner" });

  arrow1();
  return boundInner;
}

const obj = { name: "Obj" }; 
const bound = Outer.call(obj); // this refers to obj now.
bound(); // now this got back to Outer as this bound is now no longer associated with Outer.call()


// Q19.
var name = "Global";

const obj = {
  name: "Obj",
  outer() {
    console.log("Outer:", this.name); // Obj

    setTimeout(function () {
      console.log("Timeout Regular:", this.name); // Global
    }, 0);

    setTimeout(() => {
      console.log("Timeout Arrow:", this.name); // Obj
    }, 0);

    const inner = function () {
      console.log("Inner Regular:", this.name); // BoundInner
    }.bind({ name: "BoundInner" });

    const arrow = () => {
      console.log("Inner Arrow:", this.name); // Obj
    };

    inner();
    arrow();
  }
};

obj.outer();

// Outer: obj
// Inner Regular: BoundInner
// Inner Arrow: Obj
// Timeout regular: Global or undefined
// Timeout Arrow: Obj

// Q20.
var name = "Global";

const obj = {
  name: "Obj",
  regular: function () {
    console.log("Regular:", this.name); // Obj 

    const arrow = () => {
      console.log("Arrow inside regular:", this.name); // Obj as lexical scope is obj hence we have name here.
    };
    arrow(); 
  },
  arrow: () => {
    console.log("Arrow:", this.name);

    function inner() {
      console.log("Inner regular inside arrow:", this.name);
    }
    inner();
  },
};

obj.regular();

const boundRegular = obj.regular.bind({ name: "BoundObj" });
boundRegular();

obj.arrow();

obj.arrow.call({ name: "CallObj" }); // call doesnt work on arrow functions hence no effect of callObj.

// Regular:Obj
// Arrow inside regular:Obj

// Regular:BoundObj
// Arrow inside regular:BoundObj

// Arrow: Global or undefined
// Inner regular inside arrow:Global or undefined

// Arrow: Global or undefined
// Inner regular inside arrow:Global or undefined


var length = 4;

function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2);
