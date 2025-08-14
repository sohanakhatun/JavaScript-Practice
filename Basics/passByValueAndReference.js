// Q1.
function change(obj) {
  obj.num = 50;
  obj = { num: 100 };
}

let data = { num: 10 };
change(data);
console.log(data.num); // 50
// data = num : 10 
// change is called and now obj.num changes the data.num to 50 as it points to the same ref as data.
// obj = {num:100}; creates a whole new copy of obj hence wont affect the original one.
// so the output will be 50.

// Q2.
let arr = [1, 2, 3];
let ref = arr;

ref.push(4);
arr = [5, 6];

console.log(ref);
// Output will be [1,2,3,4] as ref = arr creates a copy of arr which wont get affected by the original one now.

// Q3. // Important --> Start from here.
let obj1 = { a: { value: 10 } }; 
let obj2 = obj1.a; //obj2 and obj 1 same location

obj2.value = 20; // changes for both obj2 and obj1 as both are pointing to the same ref.
obj1.a = { value: 30 }; // Now this creates a new reference because in js when we assign an object property to a new object , we dont mutate the original object , it points to a new ref now.

console.log(obj2.value); // 20 as obj2 is separate now.

// Q4.
let obj = { nums: [1, 2] };
let copy = obj; //same

copy.nums.push(3); // copy and obj = [1,2,3]
obj.nums = [4, 5]; // copy and obj = [4,5]
copy.nums.push(6); // copy and obj = [4,5,6]

console.log(copy.nums);

// Q5.
function update(obj) {
  obj.name = "Updated";
  obj = { name: "New Object" };
}

let person = { name: "Original" };
update(person);
console.log(person.name); // Output: Updated as  obj = { name: "New Object" }; creates a new ref.

// Q6.
let a = { inner: { num: 1 } };
let b = { inner: a.inner };

b.inner.num = 2;
a.inner = { num: 3 };

console.log(b.inner.num); // 2 as b.inner.num = 2 updates the same ref that b and a are initially pointing to but a.inner = { num: 3} points to a new ref as in js when we assign a new value to the object property to a new object it points to a new ref.


// Q7.
let arr1 = [1, 2];
let arr2 = arr1;

arr2.push(3); 
arr1 = [4, 5]; 
arr2.push(6);

console.log(arr2); // [1,2,3,6]

// Q8.
let obj1 = { list: [1, 2] };
let obj2 = obj1;

obj2.list.push(3); // both obj1 and 2 point to same ref 
obj1.list = [4]; // both obj1 and 2 point to same ref 
obj2.list.push(5); // both obj1 and 2 point to same ref as obj2 is an obj and not the property of an object hence it will also get affected by obj1.

console.log(obj2.list); // [4,5]

// Q9.
function replace(obj) {
  obj.value = 1;
  return { value: 2 };
}

let item = { value: 0 };
let result = replace(item);

console.log(item.value, result.value); // 1 (obj.value = 1) , 2 as returned from the function.

// Q10.
let obj = { x: 1 };
let copy = obj; // same ref

copy.x = 2; // obj = {x : 2}
obj = { x: 3 }; // points to new ref now.

console.log(copy.x); // hence , output is 2.

// Q11.
let obj1 = { inner: { num: 5 } };
let obj2 = { inner: obj1.inner }; // both obj1 and obj2 point to same ref.

obj1.inner.num = 10; // will affect obj2 as well.
obj2.inner = { num: 20 }; // this now points to a new object ref hence obj2 is untouched.

console.log(obj1.inner.num); // output will be 10.

// Q12.
let container = { arr: [1, 2] };
let alias = container; // Both container and alias point to the same outer object

alias.arr.push(3); // Mutates the shared array → [1, 2, 3]
container.arr = [4, 5]; // Reassigns the arr property in the shared object → [4, 5]

console.log(alias.arr); // [4, 5]

// Q13.
function modify(o) {
  o.prop = 100; // still points to obj
  o = { prop: 200 }; // new ref , reassigns local reference only
}

let obj = { prop: 0 };
modify(obj);
console.log(obj.prop); // 100


// Q14.
let a = [1];
let b = a;
let c = b;

b.push(2); // [1,2] Mutating (like b.push(2)) changes the contents of the array in the heap.
c = [3]; // [3] Reassigning a variable (like c = [3]) does not mutate the existing object.

console.log(a); 

// Q15.
function modify(obj) {
  obj.inner = { value: 10 }; // changes value here and assigns to 10
  obj = { inner: { value: 20 } }; // points to another object.
}

let outer = { inner: { value: 0 } };
modify(outer);
console.log(outer.inner.value); // 10 

// Q16.
let obj = { arr: [1] };
let ref = obj.arr;

ref.push(2);
obj.arr = [3, 4]; // points to a diff ref now , no connection with ref any more.
ref.push(5);

console.log(obj.arr); // [3,4]

// Q17.
function change(o) {
  o.nested.num = 50;
  o = { nested: { num: 100 } };
  o.nested.num = 200;
}

let data = { nested: { num: 10 } };
change(data);
console.log(data.nested.num); // 50

// Q18.
let x = [1];
let y = x;
let z = y;

y.push(2);
z.push(3);
x = [4]; // ref is broken here as x points to new ref as it is reassigned.

console.log(y); // [1,2,3]

// Q19.
function replace(obj) {
  obj.arr.push(1);
  return { arr: [2] };
}

let myObj = { arr: [] };
let result = replace(myObj);
result.arr.push(3);
console.log(myObj.arr, result.arr); // [1] , [2,3]

// Q20.
function update(obj) {
  obj.items.push(1);
  obj = { items: [2] };
  obj.items.push(3);
}

let data = { items: [] };
update(data);
console.log(data.items); //[1]

// Q21.
let outer = { inner: { value: 5 } };
let ref = outer.inner;

ref.value = 10;
outer.inner = { value: 20 };
ref.value = 15;

console.log(outer.inner.value); // 20

// Q22.
let a = { b: { c: { num: 0 } } };
let x = a.b.c;
x.num = 5;
a.b = { c: { num: 10 } }; // new ref
x.num = 15; 
console.log(a.b.c.num); // 10







