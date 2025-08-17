// Older implementation before class was introduced.
// This implementation is called functionConstructor.
// Interview question: If we want class like implementation but there is no class implementation in JS , let's say it has been removed , then how can we achieve this ?
// Answer: Using function constructor. Below is the example:
function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    function displayProduct() {
        console.log("Name", this.name, "Price", this.price, "Description", this.description);
    }
}

// let a = new Product("mac", 1244333, "Apple Mac");
a.displayProduct(); // a.displayproduct is not a function as it's reference is not attached to this keyword.

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function () {
        console.log("Name", this.name, "Price", this.price, "Description", this.description);
    }
}

let b = new Product("mac", 1244333, "Apple Mac");
b.displayProduct(); // This is valid as the reference of displayProduct is attached to this
// If we call b without new keyword it behaves like a normal function.

// New Keyword Questions.
// Q1.
function Person(name) {
  this.name = name;
  return { name: "Overridden" };
}

let p1 = new Person("Alice");
console.log(p1.name); // Overriden

// Q2.
function Animal(type) {
  this.type = type;
  return 42;
}

let a1 = new Animal("Dog");
console.log(a1.type); // Dog

// Q3.
function Test1(x) {
  this.x = x;
  return { y: 100 };
}

let t1 = new Test1(50);
console.log(t1.x, t1.y); // x : undefined , y : 100

// Q4.
function Test3() {
  this.a = 10;
  return null;
}

let t3 = new Test3();
console.log(t3.a); // 10

// Q5.
function Test5(name) {
  this.name = name;
}

let a = new Test5("Alice");
let b2 = Test5("Bob");

console.log(a.name); // Alice
console.log(b2); // undefined

// Q6.
function Alpha() {
  this.x = 1;
  return { y: 2 };
}

function Beta() {
  this.z = 3;
  return new Alpha();
}

let b1 = new Beta();
console.log(b1.x, b1.y, b1.z); // undefined , 2 , undefined

// Q7.
function Gamma(name) {
  this.name = name;
  return "ignored";
}

let g1 = new Gamma("First");
let g2 = Gamma("Second");

console.log(g1.name); // First
console.log(g2); // ignored as Gamma("Second") is called without new hence it is a normal function.

// Q8.
function Delta() {
  this.value = "delta";
  return { value: "override" };
}

function Epsilon() {
  this.data = "epsilon";
  return Delta();
}

let e = new Epsilon();
console.log(e.value, e.data); // override , undefined

// Q9.
function Omega() {
  this.num = 42;
}
let o1 = new Omega();
let o2 = new o1.constructor();

console.log(o1.num, o2.num); // 42 , 42

// Q10.
function Sigma() {
  this.a = 10;
  return { b: 20 };
}

function Theta() {
  this.c = 30;
  return Sigma;
}

let t = new Theta();
let s = new t();

console.log(s.a, s.b, s.c); // undefined , 20 , undefined

// Q11.
function Foo() {
  this.num = 100;
}
Foo.bar = function() {
  return 200;
};

let result1 = new Foo.bar();
let result2 = new Foo().num;

console.log(result1.num, result2); // undefined , 100

// Q12.
function MakeAdder(x) {
  this.base = x; // this.base = 5;
  return (y) => x + y; // this is returned
}

let add5 = new MakeAdder(5);
console.log(add5(10));
// add5(10) becomes (y) => x + y
// 5 + 10 = 15

// Q13.
function X() {
  this.val = 1;
  return { val: 2 };
}
function Y() {
  this.val = 3;
  return X;
}

let y = new Y();
let x = new y();
console.log(x.val); // 2

// Q14.
function A() {
  this.val = "A";
}
A.constructor = function() {
  this.val = "B";
};

let obj = new new A.constructor(); 
// let obj = new { val: "B"};
// new Object is not possible hence this will throw error in the run time itself.
console.log(obj.val);

// Q15.
function Wrapper() {
  this.msg = "hello";
  return () => this.msg.toUpperCase();
}

let w = new Wrapper();
console.log(w()); //HELLO

// Q16.
function Factory() {
  return function Inner() {
    this.num = 123;
  };
}

let obj8 = new (Factory())();
console.log(obj8.num); // 123

// Q17.
class Demo {
  constructor() {
    this.x = 10;
    return { y: 20 };
  }
}

let d = new Demo();
console.log(d.x, d.y); // undefined , 20

// Q18.
function One() {
  this.a = 1;
  return Two;
}
function Two() {
  this.b = 2;
  return Three;
}
function Three() {
  this.c = 3;
}

let obj9 = new new new One()();
console.log(obj9.a, obj9.b, obj9.c);

// let obj9 = new Three; undefined , undefined , 3