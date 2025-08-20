// Q1.
const obj = { value: 50 };

function show() {
    console.log(this.value);
}

const boundShow = show.bind(obj);

show.call({ value: 100 });  // 100    
boundShow.call({ value: 200 }); // 50 , bind 's binding cannot be overriden.

// Q2.
const person = {
    name: "Sohana",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

const greetFn = person.greet;

greetFn(); // Hello , undefined                 
greetFn.call({ name: "Piyush" }); // Hello Piyush

// Q3.
const obj1 = {
    x: 10,
    getX: function () {
        return this.x;
    }
};

const unbound = obj1.getX;
const bound = obj1.getX.bind(obj1);

console.log(unbound());  // undefined
console.log(bound()); // 10

// Q4.
function foo(a, b) {
    console.log(this.x, a, b);
}

const obj2 = { x: 1 };
const obj3 = { x: 2 };

const boundFoo = foo.bind(obj2, 10);

boundFoo(20); // 1 10 20             
boundFoo.call(obj3, 30);   // 1 10 30

// bind locks two things —
// the value of this
// any arguments you pre-supply at the time of binding
// After that, when you call the function, any new arguments you pass just get slotted into the remaining parameters.

// Q5.
const person1 = {
    name: "Sohana",
    greet: function () {
        return `Hello, ${this.name}`;
    }
};

const greet = person1.greet;
const boundGreet = person1.greet.bind({ name: "Piyush" });

console.log(greet.call({ name: "Arjun" })); // Hello Arjun
console.log(boundGreet.call({ name: "Anita" }));  // Hello Piyush

// Q6.
function foo(a, b) {
    console.log(this.name, a, b);
}

const obj4 = { name: "Sohana" };
const obj6 = { name: "Piyush" };

const f1 = foo.bind(obj4, 1);
const f2 = f1.bind(obj6, 2);

f1(10); // Sohana , 1 , 10
f2(20); // Sohana , 1 , 2
f2.call(obj6, 30); // Sohana , 1  , 2

// Reason:
// f1 = foo.bind(obj4,1); ==>  this = obj4 , a = 1 ; 
// f1(b) == foo.call(obj4,1,b);

// f2 = f1.bind(obj6,2);
// since binding is already done this bind cannot change the original one hence only argument 2 will be filled in place of b which doesnt have any value yet
// f2 = foo.call(obj4,1,2)

// f1(10) ==> foo.call(obj4,1,b) ==> Sohana , 1 , 10

// f2(20) ==> foo.call(obj4,1,2) ==> Sohana , 1 , 2 (20 is ignored as all the arguments have values now)

// f2.call(obj6,30) ==> foo.call(obj4,1,2) ==> Sohana , 1 , 2 (30 is ignored as all the arguments have values now)

// Q7.
function greet1(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person2 = { name: "Alice" };
const person3 = { name: "Bob" };

const boundGreet1 = greet1.bind(person2, "Hello"); // boundGreet1(punctuation) = greet1.call(person2,"Hello"); ==> Hello , Alice


boundGreet1("!"); // Hello , Alice !
boundGreet1.call(person3, "?"); // Hello , Alice ?
greet1.apply(person3, ["Hi", "!"]); // Hi , Bob !
boundGreet1.apply(person3, ["Hey", "."]); // Hello , Alice .

// boundGreet1(punctuation) = greet1.call(person2,"Hello");
//boundGreet1("!"); == Hello , Alice !
// boundGreet1.call(person3, "?"); // Hello , Alice ?
// boundGreet1.apply(person3, ["Hey", "."]); ==> Hello , AliceHey

// Q8.
