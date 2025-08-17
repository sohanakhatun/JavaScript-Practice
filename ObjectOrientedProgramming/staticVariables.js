class Product {
    static x = 10;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(x); // we cannot access the static variables like this it has to be accessed with the class name.
        console.log(Product.x); // valid     
    }
}

let p = new Product("Iphone", 10000);
console.log(p1.x); // undefined
console.log(Product.x); // 10 
// static variables are associated with the class not the object. they are created when the class is created , they will exist even if no object is created from the class.
// They can also be created as private variables by using # in the start of the name --> static #x ==> this is pvt.

// Questions
// Q1.
class Test {
    static greet() {
        return "Hello";
    }
}

let t = new Test();
console.log(t.greet()); // t.greet is not a function


// Q2.
class A {
    static foo() {
        return "A";
    }
}

class B extends A { }

console.log(B.foo()); // A

// Q3.
class A {
    static greet() {
        return "Hi from A";
    }
}

class B extends A {
    static greet() {
        return super.greet() + " and Hi from B";
    }
}

console.log(B.greet());  //Hi from A and Hi from B

// Q4.
class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }
}

let c1 = new Counter(); //1
let c2 = new Counter(); // 2
console.log(Counter.count); // 2

// Q5.
class X {
    static num = 10;
    static getNum() {
        return this.num;
    }
}

class Y extends X {
    static num = 20;
}

console.log(X.getNum()); // 10
console.log(Y.getNum());  // 20

// Q6.
class Base {
  static greet() {
    return "Hello from Base";
  }
}

class Derived extends Base {
  static greet() {
    return super.greet() + " & Derived";
  }
}

console.log(Base.greet()); //Hello from Base
console.log(Derived.greet()); //Hello from Base & Derived

// Q7.
class Parent {
  static value = 1;
  static inc() {
    this.value++;
    return this.value;
  }
}

class Child extends Parent {}

console.log(Parent.inc());  // 2
console.log(Child.inc());  // 3
console.log(Parent.value);  // 2
console.log(Child.value);  // 3

// Q8.
class Foo {
  static x = 5;
  static printX() {
    console.log(this.x);
  }
}

class Bar extends Foo {
  static x = 10;
}

Foo.printX(); //5
Bar.printX(); //10

// Q9.
class One {
  static whoAmI() {
    return "One";
  }
}

class Two extends One {
  static whoAmI() {
    return super.whoAmI() + " & Two";
  }
}

class Three extends Two {}

console.log(One.whoAmI()); // One
console.log(Two.whoAmI()); // One & Two
console.log(Three.whoAmI()); // One & Two

// Private Variables.
// Q10.
class Counter {
  #count = 0;   

  constructor(step) {
    this.step = step;
  }

  increment() {
    this.#count += this.step;
    return this.#count;
  }

  static create(step) {   
    return new Counter(step);
  }

  static doubleIncrement(counter) {  
    return counter.increment() + counter.increment();
  }
}

let c = Counter.create(2);

console.log(c.increment());   // 2         
console.log(Counter.doubleIncrement(c)); // 10
console.log(c.#count);  //  Private field '#count' must be declared in an enclosing class

// Q11.
class BankAccount {
  #balance = 100;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    this.#balance -= amount;
    return this.#balance;
  }

  static transfer(from, to, amount) {
    from.withdraw(amount);
    to.deposit(amount);
  }
}

let a = new BankAccount();
let b = new BankAccount();

BankAccount.transfer(a, b, 40); 
// balance in a : 60 , b : 140
console.log(a.withdraw(10));  // 50
console.log(b.deposit(20));   // 160

// Q12.
class Counter {
  #count = 1;

  constructor(step) {
    this.step = step; // 2
  }

  increment() {
    this.#count += this.step;
    return this.#count;
  }

  static triple(counter) {
    return counter.increment() * 3;
  }
}

let c = new Counter(2);

console.log(c.increment());         // 3
console.log(Counter.triple(c));     // 15
console.log(c.increment());         // 7

// Q13.
class Timer {
  static #secret = 5; 
  static getSecret() {
    return this.#secret;
  }

  constructor(limit) {
    this.limit = limit;
  }

  static resetSecret(value) {
    this.#secret = value;
  }
}

console.log(Timer.getSecret());      // 5
Timer.resetSecret(12);
console.log(Timer.getSecret());      // 12
let t = new Timer(3);
console.log(t.limit);                // 3

// Q14.
class Mystery {
  #x = 1;

  constructor(val) {
    this.#x += val;
  }

  getX() {
    return this.#x;
  }

  static combine(a, b) {
    return a.getX() + b.getX();
  }
}

let m1 = new Mystery(2);
let m2 = new Mystery(5);

console.log(m1.getX());                  // 3
console.log(m2.getX());                  // 6
console.log(Mystery.combine(m1, m2));    // 9
