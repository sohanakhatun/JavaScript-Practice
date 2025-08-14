// Q1.
let map = new Map();
map.set(1, 'one');
map.set(true, 'bool');
map.set([1,2], 'array');
console.log(map.get([1,2]));
// This will result in undefined as the obj passed in .set() and .get() 
// refer to different references hence it will result as undefined. 
//  To use objects as keys and not point to different references
//  Use the same reference:
// Example:
let key = { id: 1 };
map.set(key, 'value');

// later use the same key reference
console.log(map.get(key)); // 'value'

// Q2.
let set = new Set([{}, {}, {}]);
console.log(set.size); // 3
 
// Q3. 
let set = new Set();
let obj = {};
set.add(obj);
set.add(obj);
console.log(set.size); // 1

// Q4.
let set = new Set([1, 2, NaN]);
console.log(set.has(NaN)); // true

// Q5.
let set = new Set(['a', 'b', 'c']);
set.forEach(v => {
  if (v === 'b') set.add('d');
});
console.log([...set]); // a,b,c,d

// Q6.
let map = new Map();
let obj = { a: 1 };
map.set(obj, 'first');
obj.a = 99;
console.log(map.get(obj)); // first

// Q7.
let map = new Map();
map.set({}, 'one');
map.set({}, 'two');
console.log(map.size); // 2  Each {} is a new object reference → two distinct keys.

// Q8.
let obj = { x: 1 };
let map = new Map([[obj, 'value']]);
obj = null;
console.log(map.size); //1

// Q9.
let map = new Map();
map.set('1', 'string');
map.set(1, 'number');
console.log(map.size); //2

// Q10.
let wm = new WeakMap();
let obj = {};
wm.set(obj, 'secret');
console.log(wm.has(obj));
obj = null;
setTimeout(() => console.log(wm.has(obj)), 1000); // true , false as obj reference is garbage collected now.

// Q11.
let wm = new WeakMap();
wm.set({}, 'a');
console.log(wm.size); // undefined

// Q12.
let set = new Set();
let map = new Map();
let wm = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 1 };

set.add(obj1);
set.add(obj2);
set.add(obj1);

map.set(obj1, "A");
map.set(obj2, "B");
map.set({ id: 1 }, "C");

wm.set(obj1, "secret1");
wm.set(obj2, "secret2");

obj1 = null;

set.delete(obj2);
set.add("1");
set.add(1);

map.set("1", "str1");
map.set(1, "num1");

console.log("SET:", [...set]);
console.log("MAP size:", map.size);
console.log("WM has obj1:", wm.has(obj1));
console.log("WM has obj2:", wm.has(obj2));
