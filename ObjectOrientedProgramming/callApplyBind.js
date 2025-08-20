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
const person1 = { name: "Sohana" };
const person2 = { name: "Piyush" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const boundGreet = greet.bind(person1, "Hi", "!");

console.log(boundGreet());  // Hi , Sohana !                      
console.log(boundGreet.call(person2, "?"));       
console.log(boundGreet.apply(person2, ["Hello", "."]));

// Q9.
const person1 = { name: "Sohana" };
const person2 = { name: "Piyush" };

function intro(city, country) {
  return `Hello, I am ${this.name} from ${city}, ${country}`;
}

const boundIntro = intro.bind(person1, "Bangalore");

console.log(boundIntro("India"));    // Hello, I am Sohana from Bangalore,India          
console.log(boundIntro.apply(person2, ["Delhi", "India"])); // Hello, I am Sohana from Bangalore,Delhi

// Q10.
function show(x, y) {
  return `${this.label}: ${x}, ${y}`;
}

const obj = { label: "Test" };

const boundShow = show.bind(obj, 1);

console.log(boundShow(2)); // Test: 1 , 2                  
console.log(boundShow.call({ label: "Other" }, 3));  // Test: 1 , 3

// Q11.
const person = { name: "Sohana" };
const another = { name: "Piyush" };

function say(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(say.call(another, "Hi", "!"));  // Hi , Piyush !  

const boundSay = say.bind(person, "Hello");
console.log(boundSay("?")); // Hello , Sohana ?              
console.log(boundSay.call(another, "."));   // Hello , Sohana. 

// Q12.
const person1 = { name: "Arjun" };
const person2 = { name: "Sohana" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

console.log(greet.call(person1, "Hi", "!")); //Hi , Arjun !
console.log(greet.apply(person2, ["Hello", "."])); // Hello , Sohana.

const boundGreet = greet.bind(person1, "Hey");

console.log(boundGreet("?"));  // Hey , Arjun ?
console.log(boundGreet.apply(person2, ["Hola", "!"]));  // Hey,ArjunHolla
console.log(boundGreet.call(person2, "!!"));// Hey,Arjun!!

const fullyBound = greet.bind(person2, "Namaste", "🙏");

console.log(fullyBound());  // Namaste , Sohana 🙏
console.log(fullyBound.call(person1, "Yo", "!!"));  //  Namaste , Sohana 🙏

// Q13.
const person = {
  name: "Sohana",
  sayHi: function() {
    console.log("Hi, I am " + this.name);
  }
};

setTimeout(person.sayHi, 100);  // Hi , I am undefined

setTimeout(person.sayHi.bind(person), 200);  //  Hi , I am Sohana

const boundHi = person.sayHi.bind({ name: "Arjun" });
setTimeout(boundHi, 300);  // Hi , I am Arjun

// Q14.
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("Without bind:", i); //Without bind: 4
  }, i * 100);
}

for (var j = 1; j <= 3; j++) {
  setTimeout(function() {
    console.log("With bind:", this.j); 
  }.bind({ j }), j * 100);
}

// after 100ms ==> With bind: 1
// after 200ms ==> With bind: 2
// after 300ms ==> With bind: 3

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("Without bind + let:", i); 
  }, i * 100);
}

// Without bind + let: 1
// Without bind + let: 2
// Without bind + let: 3

// let is block scoped → each iteration of the loop gets its own copy of i.
// So when the callback runs later, it remembers its correct i.


for (let j = 1; j <= 3; j++) {
  setTimeout(function() {
    console.log("With bind + let:", this.j);
  }.bind({ j }), j * 100);
}


// Q15.
function show(prefix, suffix) {
  console.log(prefix, this.value, suffix);
}

const obj1 = { value: 10 };
const obj2 = { value: 20 };

const boundShow = show.bind(obj1, "Start:");

setTimeout(() => {
  boundShow("!"); 
}, 100);

setTimeout(() => {
  show.apply(obj2, ["Hello", "?"]);
}, 200);

setTimeout(() => {
  boundShow.apply(obj2, ["End", "."]);
}, 300);

// Q16.
function show(prefix, suffix) {
  console.log(prefix, this.value, suffix);
}

const obj1 = { value: 50 };
const obj2 = { value: 100 };


const boundShow = show.bind(obj1);

setTimeout(() => {
  boundShow("Hi", "!"); // Hi , 50 , !
}, 100);

setTimeout(() => {
  boundShow.apply(obj2, ["Hello", "?"]); // Hello , 50 ?
}, 200);

setTimeout(() => {
  boundShow.call({ value: 200 }, "Hey", ".");  // Hey , 50 .
}, 300);

