// Object.create() 
const proto = {
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const obj = Object.create(proto);
obj.name = "Sohana";
obj.greet(); // Hello Sohana

//  Object Property Descriptors
const obj1 = { name: "Sohana" };
const desc = Object.getOwnPropertyDescriptor(obj1, "name");
console.log(desc);

// Output:
// {
//   value: 'Sohana',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Making a property read only.
Object.defineProperty(obj1, "name", { writable: false });
obj1.name = "Alex";
console.log(obj1.name); // "Sohana" → cannot change

// Making a property non-enumerable.
const obj3 = { name: "Sohana", age: 23 };
Object.defineProperty(obj3, "age", { enumerable: false });

console.log(Object.keys(obj3)); // ['name'] as age is not enumerable now 

for (const key in obj3) {
    console.log(key); // name
}

console.log(obj3.age); // 23 as it is still accessible

// Making a property non-configurable.
const obj4 = { name: "Sohana" };
Object.defineProperty(obj4, "name", { configurable: false });

delete obj4.name;
console.log(obj4.name); // Sohana , no deletion occured.

// trying to redefine descriptor.
Object.defineProperty(obj4, "name", { writable: false });
obj4.name = "Khatun";
console.log(obj4.name); // Sohana

// Object.freeze();
const obj5 = { name:"Sohana"};
Object.freeze(obj5);
obj5.name = "Alex";
console.log(obj5.name); // Sohana

const obj6 = {nested:{city:"Bengaluru"}};
Object.freeze(obj6);
obj6.nested.city = "Mumbai";
console.log(obj6.nested.city); // Mumbai

// Questions
// Q1.
const obj = { name: "Sohana" };

Object.defineProperty(obj, "age", {
  value: 21,
  enumerable: false
});

console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertyNames(obj)); // ['name','age']
console.log(Object.entries(obj)); // [['name' , 'Sohana']]

// Q2.
const obj = { name: "Sohana", age: 21 };

Object.freeze(obj);
obj.age = 25;
delete obj.name;
obj.city = "Bengaluru";

console.log(obj); // { name: "Sohana", age: 21 };

// Q3.
const obj = { name: "Sohana", age: 21 };

Object.seal(obj);
obj.age = 25;
delete obj.name;
obj.city = "Bengaluru";

console.log(obj); //{ name: "Sohana" , age: 25 }

// Q4.
const obj = { name: "Sohana" };

Object.defineProperty(obj, "age", {
  value: 21,
  enumerable: false
});

Object.seal(obj);
obj.city = "Bengaluru";
delete obj.name;

console.log(Object.keys(obj)); // ['name']
console.log(Object.getOwnPropertyNames(obj)); // ['name','age']


// Q5.
const obj1 = { name: "Sohana" };
Object.preventExtensions(obj1);

obj1.age = 21;
delete obj1.name;

console.log(obj1); // {}


const obj2 = { name: "Sohana" };
Object.seal(obj2);

obj2.age = 21;
delete obj2.name;

console.log(obj2); // {name: "Sohana"}

// Q6.
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Sohana",
  writable: true,
  enumerable: true,
  configurable: false
});

Object.defineProperty(obj, "age", {
  value: 21,
  writable: false,
  enumerable: false,
  configurable: true
});

Object.preventExtensions(obj);

// {name:"Sohana",age:21}

obj.city = "Bengaluru";   // (1)

// {name:"Sohana",age:21} Nothing can be added

delete obj.name;          // (2)

// {name:"Sohana",age:21} name cannot be deleted as it's descriptor configurable is set to false.

obj.name = "Khatun";      // (3)

// {name:"Khatun",age:21}

obj.age = 25;             // (4)

// {name:"Khatun",age:21}

console.log(Object.keys(obj));  // (5) ['name']
console.log(Object.getOwnPropertyNames(obj)); // (6)  ['name','age']
console.log(obj); // {name:"Khatun",age:21}


// Q8.
const obj = {};

// define `name`
Object.defineProperty(obj, "name", {
  value: "Sohana",
  writable: false,
  enumerable: true,
  configurable: true
});

// define `age`
Object.defineProperty(obj, "age", {
  value: 21,
  writable: true,
  enumerable: false,
  configurable: false
});


Object.seal(obj);
Object.freeze(obj);

obj.name = "Khatun";   // (1)
delete obj.age;        // (2)
obj.age = 25;          // (3)
obj.city = "Bengaluru"; // (4)

console.log(Object.keys(obj));             // (5)
console.log(Object.getOwnPropertyNames(obj)); // (6)
console.log(obj);                          // (7)

// Q8.
const obj = {};

Object.defineProperty(obj, "name", {
  value: "Sohana",
  writable: true,
  enumerable: false,
  configurable: true
});

Object.defineProperty(obj, "age", {
  value: 21,
  writable: false,
  enumerable: true,
  configurable: false
});

// {name:"Sohana" , age: 21}

obj.name = "Khatun";   // (1)

// {name:"Khatun" , age: 21}

delete obj.name;       // (2)

// { age: 21}

obj.age = 25;          // (3)

// { age: 21}

delete obj.age;        // (4)

console.log(Object.keys(obj));              // (5)
console.log(Object.getOwnPropertyNames(obj)); // (6)
console.log(obj);                           // (7)
