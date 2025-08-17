class Product {
    // Data Members
    name;
    price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.rating = productRating;
        this.description = productDescription;
    }

    // Member Functions
    addToCart() {
        console.log("Product added to cart");
    }
    removeFromCart() {
        console.log("Product deleted to cart");
    }
    displayProduct() {
        console.log("Product Displayed");
    }
    buyProduct() {
        console.log("Product bought");
    }
}

typeof Product // Function

let constructor = 10;
console.log(constructor);

// Creating Object from Class
// let iphone = new Product();// referring the constructor of the object

// with paramters
let iphone = new Product("Iphone", 125000, "mobile", "Some Desc", 4.3);
console.log(iphone);
// instead of passing values here as params we can also set them manually instead.
// iphone.name = "Iphone 15";
// iphone.price = 100000;


// Step1: new will create a plain empty object.
// Step2: new will call the constructor of the class and pass the empty object to the constructor through this keyword inside the constructor.
// this.name = productName; Now, this.name will create a new key called name inside the plain object and assign the value iphone to it.
// this.price = productPrice; this.price will create a new key called price inside the plain object and assign the value 125000 to it.
// this.category = productCategory; same 
// this.rating = productRating; same
//  Hence, there is no need for writting the keys before constructor as a new key and value pair will be created everytime new keyword is called. If we write it also there is no point.
// Step 3: Will see later
// Step 4: The empty object that now has key value pairs is returned hence that will be return

let obj = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            console.log(this.x, this.y);
        }
    }
}

// call site for fn is z
// hence output will be 99 , undefined.

// this with arrow function
let obj1 = {
    x: 10,
    y: 20,
    fn: function () {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
} // undefined , undefined as for arrow functions this doesnt refer to the call site.


// Output Based Questions.
// Q1.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

let a = new Animal("Generic");
let d = new Dog("Tommy");

a.speak(); // Generic makes a sound
d.speak(); // Tommy barks

// Q2.
class Parent {
  static greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  static greet() {
    return super.greet() + " and Hello from Child";
  }
}

console.log(Parent.greet()); //Hello from Parent
console.log(Child.greet()); // Hello from Parent and Hello from Child

//Q3.
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getName() {
    return this.name + " (" + this.id + ")";
  }
}

let p = new Person("Alice");
let e = new Employee("Bob", 101);

console.log(p.getName()); // Alice
console.log(e.getName()); // Bob (101)

// Q4.
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
}

let c = new Counter();
setTimeout(c.increment, 1000); // NaN 
// Why NaN ?
// setTimeout(c.increment, 1000) ==> we are not calling c.increment(). 
// We are passing a reference to the function. 

// let fn = c.increment;
// setTimeout(fn, 1000);

// Now, when setTimeout runs the function later , it does something like fn(); // not c.fn();

// In this case, function runs without any object attached to it.

// In such cases, the value of this becomes the global Object. 
// In strict mode it becomes undefined.

// now, this.count = undefined;
// this.count++ = undefined++ = NaN // hence NaN is the answer.

// Q5.
class A {
  constructor() {
    this.value = 10;
    console.log("A",this);
  }
  show() {
    return this.value;
  }
}

class B extends A {
  constructor() {
    super(); // calls A's constructor → sets this.value = 10
    this.value = 20;  // then overrides it to 20
    console.log("B",this);
  }
  show() {
    return super.show() + this.value;
  }
}

let obj2 = new B();
console.log(obj2.show()); // 40
// Calls B’s constructor.
// Inside it, super() → runs A’s constructor → sets this.value = 10.
// Then this.value = 20 overrides it.
// So finally, obj.value = 20.

// Q6.
class X {
  constructor() {
    this.num = 5;
  }
  getNum() {
    return this.num; 
  }
}

class Y extends X {
  constructor() {
    super();
    this.num = 15;
  }
  getNum() {
    return super.getNum() + this.num; // 25 + 25
  }
}

class Z extends Y {
  constructor() {
    super();
    this.num = 25;
  }
  getNum() {
    return super.getNum() + this.num; // 50 + 25
  }
}

let obj3 = new Z();
console.log(obj3.getNum()); // 75

// Q7.
class A {
  constructor() {
    this.num = 2;
  }
  getNum() {
    return this.num * 2; // 16
  }
}

class B extends A {
  constructor() {
    super(); 
    this.num = 4;
  }
  getNum() {
    return super.getNum() + this.num; 
  }
}

class C extends B {
  constructor() {
    super(); 
    this.num = 6; 
  }
  getNum() {
    return super.getNum() + this.num;
  }
}

class D extends C {
  constructor() {
    super(); 
    this.num = 8;
  }
  getNum() {
    return super.getNum() + this.num; 
  }
}

let obj4 = new D();
console.log(obj4.getNum()); // this.num becomes 8 (value from the last child) // 40

// Q8.

class A {
  constructor() {
    this.x = 1;
    this.y = 2;
  }
  calc() {
    return this.x + this.y;
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 3;
  }
  calc() {
    return super.calc() * this.x;
  }
}

class C extends B {
  constructor() {
    super();
    this.y = 4;
  }
  calc() {
    return super.calc() + this.y;
  }
}

class D extends C {
  constructor() {
    super();
    this.x = 5;
    this.z = 6;
  }
  calc() {
    return super.calc() + this.z + this.x;
  }
}

let obj5 = new D();
console.log(obj5.calc());

// Q9.
class A {
  calc(x) {
    return x + 1;
  }
}

class B extends A {
  calc(x) {
    return super.calc(x) * 2;
  }
}

class C extends B {
  process(x) {
    return super.calc(x) - 3;  
  }
}

class D extends C {
  calc(x) {
    return super.process(x) + 5;  
  }
}

const obj6 = new D();
console.log(obj6.calc(4)); //12

// Q10.
class A {
  constructor() {
    this.value = 10;
  }
}

class B extends A {
  constructor() {
    super(); // 10
    this.value += 20; // 30
  }
}

class C extends B {
  constructor() {
    super(); // 30
    this.value *= 2; // 60
  }
}

const obj7 = new C();
console.log(obj7.value); // 60


