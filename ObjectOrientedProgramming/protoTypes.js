class Events {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }

    bookEvent() {
        console.log("Booked Event");
    }
}

class Movie extends Events {
    constructor(movieName, movieDate) {
        super(movieDate) // this keywords helps to call the constructor of the parent class.
        this.movieName = movieName;
    }
}

let dp = new Movie("deadpool", "2026-07-18");

// Similar setup for functions.

function Events1(dateOfEvent){
    this.dateOfEvent = dateOfEvent;
}

function Movie1(movieName , movieDate) {
    Events1.call(this, movieDate); // This will now set the movieDate as dateOfEvent inside Events.
    this.movieName = movieName; 
}

let dp1 = new Movie1("deadpool", "2026-07-18");
console.log(dp1);

// Q1.
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return "Hi, I'm " + this.name;
};

const p1 = new Person("Sohana");
const p2 = new Person("Khatun");

p1.sayHi = function() {
  return "Hello from " + this.name;
};

console.log(p1.sayHi()); //Hello from Sohana
console.log(p2.sayHi()); //Hi, I'm Khatun

// Q2.
function Animal(type) {
  this.type = type;
}

Animal.prototype.sound = "Generic sound";

const cat = new Animal("Cat");
const dog = new Animal("Dog");

console.log(cat.sound); // Generic sound

cat.sound = "Meow";

console.log(cat.sound); // Meow
console.log(dog.sound); // Generic sound

// Q3.
function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.drive = function() {
  return this.name + " is driving";
};

const car = new Vehicle("Car");

Vehicle.prototype = {
  drive: function() {
    return "New drive method for " + this.name;
  }
};

const bike = new Vehicle("Bike");
 
console.log(car.drive()); // Car is driving (New Object is created and assigned to Prototype.)
console.log(bike.drive()); // New drive method for bike


// Q4.
function User(name) {
  this.name = name;
}

User.prototype.sayName = function() {
  return "Name: " + this.name;
};

const u1 = new User("Sohana");

User.prototype.sayHello = function() {
  return "Hello " + this.name;
};

User.prototype = {
  sayName: function() {
    return "New Name: " + this.name;
  }
};

const u2 = new User("Khatun");

console.log(u1.sayName()); // Name: Sohana
console.log(u1.sayHello()); // Hello Sohana
console.log(u2.sayName()); // New Name:Khatun
console.log(u2.sayHello); // undefined as the new prototype created in line 108 doesnt contain sayHello() function.

// Q5.
const grandParent = {
  greet: function() {
    return "Hello from GrandParent";
  }
};

const parent = Object.create(grandParent);
parent.sayHi = function() {
  return "Hi from Parent";
};

const child = Object.create(parent);
child.name = "Sohana";

console.log(child.greet()); // Hello from GrandParent
console.log(child.sayHi()); // Hi from Parent
console.log(child.name); // Sohana
console.log(child.toString); // [Function: toString]

// Q7.
function A() {}
function B() {}

A.prototype.sayHi = function() {
  return "Hi from A";
};

B.prototype = new A();

const b1 = new B();

console.log(b1.sayHi()); // Hi from A
console.log(b1.__proto__ === B.prototype); // true
console.log(B.prototype.__proto__ === A.prototype);//true
console.log(A.prototype.__proto__ === Object.prototype);//true

// Q8.
function Animal() {}
Animal.prototype.speak = function() {
  return "Generic sound";
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function() {
  return "Bark";
};

const d = new Dog();
const a = new Animal();

console.log(d.speak()); // Bark
console.log(a.speak()); // Generic Sound
console.log(d.__proto__.speak === Animal.prototype.speak); // false (Object.create creates a new object)
console.log(Dog.prototype.__proto__ === Animal.prototype); // true

// Q8.1.
function Person(name) {
  this.name = name;
}

Person.prototype.role = "Human";

const p1 = new Person("Sohana");

console.log(p1.name); // Sohana
console.log(p1.role); // Human
console.log(p1.hasOwnProperty("name"));  // true
console.log(p1.hasOwnProperty("role"));  // false
console.log("role" in p1); // true (checks both own and inherited properties)

// Q9.
function Gadget(name) {
  this.name = name;
}
Gadget.prototype.category = "Electronics";

const g1 = new Gadget("Phone");

console.log(g1.category); // Electronics

g1.category = "Mobile"; 

console.log(g1.category); // Mobile
console.log(Gadget.prototype.category); // Electronics
console.log(g1.hasOwnProperty("category")); // true

// Q10.
function Book(title) {
  this.title = title;
}

Book.prototype.getTitle = function() {
  return "Title: " + this.title;
};

const b1 = new Book("JS Basics");

Book.prototype.getTitle = function() {
  return "Updated Title: " + this.title;
};

const b2 = new Book("Advanced JS");

console.log(b1.getTitle()); // Updated Title: JS Basics
console.log(b2.getTitle()); // Updated Title: Advanced JS

// Q11.
function Shape(type) {
  this.type = type;
}

Shape.prototype.area = function() {
  return "No formula";
};

const s1 = new Shape("Generic");

console.log(s1.area()); // No formula

Shape.prototype.area = function() {
  return "Updated formula";
};

console.log(s1.area()); // Updated formula

const s2 = new Shape("Circle");

console.log(s2.area()); //Updated formula

// Q12.
function Device(name) {
  this.name = name;
}

Device.prototype.info = function() {
  return "Device: " + this.name;
};

const d1 = new Device("Laptop");

Device.prototype = {
  info: function() {
    return "New Device: " + this.name;
  }
};

const d2 = new Device("Tablet");

console.log(d1.info()); //Device: Laptop
console.log(d2.info()); //New Device: Tablet

// Q13.
function Car(model) {
  this.model = model;
}

const c1 = new Car("Tesla");

console.log(c1.constructor === Car); // true

Car.prototype = {
  drive: function() {
    return "Driving " + this.model;
  }
}; // since, prototype is reassigned here , this replaces the old prototype with a fresh object. this new object does not have a constructor unless we manually add it. 

const c2 = new Car("BMW");

console.log(c1.constructor === Car); // true
console.log(c2.constructor === Car); // false because c2 now points to the new prototype of Car which has no constructor hence it will look up and point to Object.prototype.constructor . 
// hence, c2.constructor == Object.prototype.constructor
console.log(c2.drive()); // Driving BMW

// Q14.
function Animal(name) {
  this.name = name;
}

Animal.prototype.type = "Generic Animal";

const a1 = new Animal("Dog");

console.log(a1.type); // Generic Animal

a1.type = "Pet Animal"; 

console.log(a1.type); // Pet Animal

delete a1.type;

console.log(a1.type); // Generic Animal

delete Animal.prototype.type;

console.log(a1.type); // undefined

// Q15.
const base = {
  greet() {
    return "Hello from Base";
  }
};

const mid = {
  greet() {
    return "Hello from Mid";
  }
};

const top = {
  greet() {
    return "Hello from Top";
  }
};

mid.__proto__ = base;
top.__proto__ = mid;

console.log(top.greet()); // Hello from Top

delete top.greet;

console.log(top.greet()); // Hello from Mid

delete mid.greet;

console.log(top.greet()); // Hello from Base

delete base.greet;

console.log(top.greet()); // Error

// Q16.
function X() {}
function Y() {}

Y.prototype = new X();

const y1 = new Y();

console.log(y1 instanceof Y); // true
console.log(y1 instanceof X); // true

Y.prototype = {};

const y2 = new Y();

console.log(y2 instanceof Y); // true
console.log(y2 instanceof X); // false

// Q17.
function A() {}
function B() {}

B.prototype = Object.create(A.prototype);

const b1 = new B();

console.log(b1 instanceof B); // true
console.log(b1 instanceof A); // true

A.prototype.sayHi = function() {
  return "Hi from A";
};

B.prototype.sayHi = function() {
  return "Hi from B";
};

console.log(b1.sayHi()); // Hi from B

delete B.prototype.sayHi;

console.log(b1.sayHi()); // Hi from A

// Q18.
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  return "Name: " + this.name;
};

const p1 = new Person("Sohana");

console.log(p1.sayName()); // Name: Sohana

console.log(p1.constructor === Person); // true

Person.prototype = {
  sayHello: function() {
    return "Hello " + this.name;
  }
};

const p2 = new Person("Khatun");

console.log(p2.sayHello()); // Hello Khatun

console.log(p2.constructor === Person); // false

console.log(p1.sayName()); // Name: Sohana
console.log(p1.sayHello); // undefined

console.log(p2 instanceof Person); // true
console.log(p1 instanceof Person); // false

// Q19.
function Book(title) {
  this.title = title;
}

Book.prototype.getTitle = function() {
  return "Title: " + this.title;
};

const b1 = new Book("JS Basics");
console.log(b1.getTitle()); // Title: JS Basics

Book.prototype = {
  getTitle: function() {
    return "Updated Title: " + this.title;
  }
};

const b2 = new Book("Advanced JS");

console.log(b2.getTitle()); // Updated Title: Advanced JS
console.log(b1.getTitle()); // Title: JS Basics
console.log(b1 instanceof Book); // false
console.log(b2 instanceof Book); // true

// Q20.
const objA = {
  greet() {
    return "Hello from A";
  }
};

const objB = {
  greet() {
    return "Hello from B";
  }
};

const user = { name: "Sohana" };

Object.setPrototypeOf(user, objA);

console.log(user.greet());  // Hello from A

Object.setPrototypeOf(user, objB);

console.log(user.greet());  // Hello from B

console.log(Object.getPrototypeOf(user) === objB); // true

// Q21.
const grandParent = {
  sayHi() {
    return "Hi from GrandParent";
  }
};

const parent = {
  sayHello() {
    return "Hello from Parent";
  }
};

const child = { name: "Sohana" };

Object.setPrototypeOf(parent, grandParent);
Object.setPrototypeOf(child, parent);

console.log(child.sayHi()); // Hi from GrandParent
console.log(child.sayHello()); // Hello from Parent
console.log(child.name); // Sohana
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(Object.getPrototypeOf(parent) === grandParent); // true

// Q22.
const A = {
  greet() {
    return "Hello from A";
  }
};

const B = {
  greet() {
    return "Hello from B";
  }
};

const C = { name: "Sohana" };


Object.setPrototypeOf(C, A);


Object.setPrototypeOf(C, B);

console.log(C.greet()); // Hello from B
console.log(Object.getPrototypeOf(C) === A); // false
console.log(Object.getPrototypeOf(C) === B); // true

// Q23.
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  return "Name: " + this.name;
};

const p1 = new Person("Sohana");

const extra = {
  sayName() {
    return "Overridden Name: " + this.name;
  },
  sayHello() {
    return "Hello " + this.name;
  }
};

Object.setPrototypeOf(p1, extra);

Object.setPrototypeOf(extra, Person.prototype);

console.log(p1.sayName()); //   Overridden Name: Sohana  
console.log(p1.sayHello());   // Hello Sohana  
console.log(Object.getPrototypeOf(p1) === extra);  // true
console.log(Object.getPrototypeOf(extra) === Person.prototype);  // true
console.log("sayHello" in p1);  // true
console.log(p1.hasOwnProperty("sayHello"));  // false

// Q24.
function A() {}
A.prototype.x = 10;

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.y = 20;

const b1 = new B();

function C() {}
C.prototype = b1;

const c1 = new C();

console.log(c1.x); // 10
console.log(c1.y);  // 20
console.log(Object.getPrototypeOf(c1) === b1);  // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(c1)) === B.prototype);   // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(c1))) === A.prototype);  // true
console.log("y" in c1); // true 
console.log(c1.hasOwnProperty("y"));  // false

// Q25.
function A() {
  this.type = "A";
}
A.prototype.getType = function () {
  return "Type from A: " + this.type;
};

function B() {
  this.type = "B";
}
B.prototype.getType = function () {
  return "Type from B: " + this.type;
};

const b1 = new B();


Object.setPrototypeOf(B.prototype, A.prototype);

console.log(b1.getType()); // Type from B: B


b1.getType = function () {
  return "Overridden in instance: " + this.type;
};

console.log(b1.getType());  // Overridden in instance: B

delete b1.getType;

console.log(b1.getType());  // Type from B: B

Object.setPrototypeOf(B.prototype, null);

//b1 → B.prototype → null.
console.log(b1.getType);  // b1 doesnt have getType but B has hence [Function: getType]
console.log("getType" in b1);  // true
console.log(b1.hasOwnProperty("getType"));  // Error.
// since we are breaking the chain here by setting the B.prototype to null , we are not able to reach to Object.Prototype where hasOwnProperty is present hence JS cant finf hasOwnProperty and throws an TypeError.


// Q25.
function A() {}
A.prototype.getType = function () {
  return "A";
};

function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

B.prototype.getType = function () {
  return "B";
};

const b1 = new B();

console.log(b1.getType()); // B

delete b1.getType;
console.log(b1.getType()); // B

Object.setPrototypeOf(B.prototype, null);


console.log(typeof b1.getType); // function
console.log("getType" in b1); // true
// console.log(b1.hasOwnProperty("getType")); // error
console.log(Object.prototype.hasOwnProperty.call(b1, "getType")); // false

// Q26.
const base = Object.create(null);
base.sayHi = function () {
  return "Hi from base";
};
const mid = {
  sayHi() {
    return "Hi from mid";
  }
};
const child = Object.create(mid);
child.name = "Sohana";

Object.setPrototypeOf(mid, base);

console.log(child.sayHi());          // Hi from mid
console.log(mid.sayHi());            // Hi from mid
console.log(base.sayHi());           // Hi from base
console.log(child.hasOwnProperty("sayHi"));  // child.hasOwnProperty is not a function as base's prototype is null.
console.log("sayHi" in child);       // true
console.log(Object.getPrototypeOf(mid) === base); // true
console.log(Object.getPrototypeOf(child) === mid); // true

// Q27.
const base = Object.create(null);
base.getType = function () { return "Base"; };

const mid = Object.create(base);
mid.getType = function () { return "Mid"; };

const child = Object.create(mid);
child.type = "Child";


child.getType = function () { return "Shadowed " + this.type; };

console.log(child.getType());               // Shadowed Child

delete child.getType;

console.log(child.getType());               // Mid

Object.setPrototypeOf(mid, null);

console.log(child.getType());               // Mid
console.log("getType" in child);           // true
// console.log(child.hasOwnProperty("getType")); // error


console.log(Object.prototype.hasOwnProperty.call(child, "getType")); // false

// Q28.
function Base() {}
Base.prototype.getType = function() { return "Base"; };

const mid = Object.create(Base.prototype);
mid.getType = function() { return "Mid"; };

const child = Object.create(mid);
child.type = "Child";


child.getType = function() { return "Shadowed " + this.type; };

console.log(child.getType());           // Shadowed Child


delete child.getType;
console.log(child.getType());           // Mid


Object.setPrototypeOf(mid, null);

console.log(child.getType());           // Mid
console.log(child instanceof Base);     // false  because Base.prototype is no longer in chain

Object.setPrototypeOf(child, Base.prototype);

console.log(child.getType());           // Base
console.log(child instanceof Base);     // true

console.log(Object.prototype.hasOwnProperty.call(child, "getType")); // false
console.log(child.hasOwnProperty("getType")); // false

