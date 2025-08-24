// // const product = { name: "Iphone 14 prp", price: 125000, category: "Mobiles" };

// // const {name , price , category } = product;

// // const {name : productName , price : productPrice , category} = product;

// const purchasedProduct = {
//     orderId: "xsya122", orderDate: "11/09/2024",
//     ...product
// }

// // Nested Objects
// const product = {
//     name: "Iphone 14 prp", price: 125000, category: {
//         name:
//             "Mobiles", categoryId: 12
//     }
// };

// // To access categoryId:

// // First Method
// // const { category } = product;
// // const {categoryId } = category;

// // Second Method
// const { category: { categoryId } } = product; // this will give categoryId not category.

// // Q1.
// const person = { name: "Sohana", age: 22, city: "Bengaluru" };

// const { name, ...rest } = person;

// console.log(name); // Sohana
// console.log(rest);  //  {age: 22, city: "Bengaluru" }

// // Q2.
// const user = { id: 1, name: "Sohana", role: "Dev" };

// const { id, name: fullName } = user;

// console.log(id); // 1
// console.log(fullName); // Sohana
// console.log(name); // error

// // Q3.
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const merged = { ...obj1, ...obj2 };

// console.log(merged); // { a : 1 , b : 3 , c: 4}

// // Q4.
// const user = {
//   id: 101,
//   name: "Sohana",
//   address: {
//     city: "Bengaluru",
//     pin: 560001
//   },
//   role: "Frontend Dev"
// };

// const { name, address: { city }, ...rest } = user;

// console.log(name); // Sohana
// console.log(city); // Bengaluru
// console.log(address); // Error 
// console.log(rest); 
// //  {
// //   id: 101,
// //   role: "Frontend Dev"
// // };

// // Q5.
// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 99, z: 30 }, c: 3 };

// const merged = { ...obj1, ...obj2 };

// console.log(merged); // { a : 1 , b: { y: 99, z: 30 } , c : 3  };
// console.log(merged.b.x); // undefined


// Q6.
const users = [
    { id: 1, name: "Sohana", role: "Dev" },
    { id: 2, name: "Piyush" },
    { id: 3 }
];

const [
    { name: firstName, role = "Guest" },,
    { name = "Anonymous", role: userRole = "User" }
] = users;

console.log(firstName); //Sohana
console.log(role); // Dev
console.log(name); // Anonymous (as 2nd obj is skipped , so Anonymous is for 3rd obj)
console.log(userRole); // User

// Q7.
const data = {
  id: 42,
  info: {
    personal: { name: "Sohana", age: 22 },
    skills: ["JS", "React", "Shopify"]
  },
  role: "Frontend Dev"
};

const {
  info: {
    personal: { name: fullName, location = "Bengaluru" },
    skills: [firstSkill, ...otherSkills]
  },
  ...rest
} = data;

console.log(fullName); // Sohana
console.log(location); // Bengaluru
console.log(firstSkill); // JS
console.log(otherSkills); // [ 'React', 'Shopify' ]
console.log(info); // Error: info is not refined.
console.log(rest); // {id:42 , role:"Frontend Dev"}

// Q7.
const base = {
  id: 1,
  config: {
    theme: "light",
    lang: "en"
  },
  tags: ["frontend"]
};

const override = {
  config: {
    lang: "fr"
  },
  tags: ["react", "shopify"],
  extra: true
};

const merged = { ...base, ...override };

// merged will become:
// {
//   id: 1,
//    config: {
//     lang: "fr"
//   },
//   tags: ["react", "shopify"],
//   extra: true
// };

const {
  config: { theme: mode = "dark", lang: language },
  tags: [firstTag, ...otherTags],
  extra = false,
  ...rest
} = merged;

console.log(mode); //dark
console.log(language); //fr
console.log(firstTag); //react
console.log(otherTags); //["Shopify"]
console.log(extra); // true
console.log(config); // Error: config is not defined.
console.log(rest); // { id: 1 }

// Q8.
const data = {
  user: {
    id: 99,
    profile: {
      name: "Sohana",
      details: { city: "Bengaluru" }
    }
  },
  scores: [10, 20, 30, 40],
  active: undefined
};

const {
  user: {
    profile: {
      name: fullName,
      details: { city: location, country = "India" }
    }
  },
  scores: [first, , third, ...others],
  active = true,
  missing = "default",
  ...rest
} = data;

console.log(fullName); // Sohana
console.log(location); // Bengaluru
console.log(country); // India
console.log(first); // 10 
console.log(third); // 30
console.log(others); // ['40']
console.log(active); // true
console.log(missing); // default
console.log(user); // Error: not defined
console.log(rest); // {}

// Q9.
const config = {
  theme: "dark",
  options: null
};

const {
  theme,
  options: { mode = "auto" } = {}
} = config;

console.log(theme); // dark
console.log(mode); // TypeError: Cannot destructure property 'mode' of 'options' as it is null
// Default assignment = {} only applies if options is missing (not provided), but since options is explicitly null, destructuring fails.

// Null/undefined
// Q1. 
const obj = { settings: null };
const { settings: { mode = "dark" } = {} } = obj;
console.log(mode); // Error due to null


// Q2.
const obj = { settings: undefined };
const { settings: { mode = "dark" } = {} } = obj;
console.log(mode); // dark

// Q3.
const obj = {};
const { settings: { mode = "dark" } = {} } = obj;
console.log(mode); // dark

// Q4.
const obj = { settings: { } };
const { settings: { mode = "dark" } = {} } = obj;
console.log(mode); // dark

// Q5.
const { a = 10 } = { a: undefined };
console.log(a); // 10

// Q6.
const { a = 10 } = { a: null };
console.log(a); // null (since null is there the default value is ignored).

// Q7.
const { obj: { x = 5 } = {} } = {};
console.log(x); // 5

// Q8.
const { obj: { x = 5 } = {} } = { obj: undefined };
console.log(x); // 5

// Q9.
const { obj: { x = 5 } = {} } = { obj: null };
console.log(x); // Error: Cant destructure null.


// Q10.
const data = {
  config: null,
  options: undefined,
  prefs: [null, undefined, 5]
};

const {
  config: { theme = "light" } = {},
  options: { mode = "auto" } = {},
  prefs: [first = 1, second = 2, third = 3, ...rest]
} = data;

console.log(theme); // Error due to null and execution stops here.TypeError: Cannot destructure property 'theme' of 'config' as it is null
console.log(mode); 
console.log(first); 
console.log(second); 
console.log(third); 
console.log(rest); 


// Q11.
const data = {
  user: { name: "Sohana", role: null },
  settings: undefined,
  prefs: [10, undefined, null]
};

const {
  user: { name, role = "Frontend Dev" },
  settings: { theme = "dark" } = {},
  prefs: [first = 1, second = 2, third = 3, fourth = 4]
} = data;

console.log(name); //Sohana
console.log(role); // null
console.log(theme); //dark
console.log(first); // 10
console.log(second); // 2
console.log(third); // null
console.log(fourth); // 4

// Q12.
const config = {
  user: { name: "Sohana", skills: ["JS", undefined, "React", null] },
  theme: null,
  options: { lang: "en" }
};

const {
  user: { name, skills: [first, second = "CSS", ...restSkills] },
  theme: { mode = "dark" } = {},
  options: { lang, version = 1 },
  extra = "default"
} = config;

console.log(name); // Sohana
console.log(first); // JS
console.log(second); // CSS
console.log(restSkills); //["React", null]
console.log(mode); // Error
console.log(lang); 
console.log(version); 
console.log(extra); 

// theme = null
// Destructuring tries to do { mode } = null → ❌ TypeError: Cannot destructure property 'mode' of 'null'.

// Q13.
const profile = {
  user: {
    name: "Sohana",
    address: { city: "Bengaluru", country: undefined },
    skills: ["JS", "React"]
  },
  prefs: undefined,
  meta: null
};

const {
  user: {
    name,
    address: { city, country = "India", pin = 560001 },
    skills: [primary, secondary, tertiary = "Shopify"]
  },
  prefs: { theme = "light", lang = "en" } = {},
  meta = {},
  extra = "default"
} = profile;

const { mode = "auto" } = meta ?? {};

console.log(name); // Sohana
console.log(city); // Bengaluru
console.log(country); // India
console.log(pin); // 560001
console.log(primary); //JS
console.log(secondary); // React
console.log(tertiary); // Shopify
console.log(theme); // light
console.log(lang); // en
console.log(mode); // auto
console.log(extra); // default

// Q14.
const data = {
  user: {
    id: 1,
    name: "Sohana",
    skills: ["JS", "React", "Shopify"],
    address: { city: "Bengaluru", pin: 560001 }
  },
  prefs: { theme: "dark", lang: "en" },
  meta: { role: "Frontend Dev" }
};

const {
  user: {
    id,
    name,
    skills: [primary, , third, fourth = "CSS", ...moreSkills],
    address: { city, country = "India", ...restAddress },
    ...restUser
  },
  prefs: { theme, mode = "auto", ...restPrefs },
  meta,
  extra = "default",
  ...restData
} = data;

console.log(id); //1
console.log(name); // Sohana
console.log(primary); // JS
console.log(third); // Shopify
console.log(fourth); // CSS
console.log(moreSkills); // []
console.log(city); // Bengaluru
console.log(country); //India
console.log(restAddress); // {pin:560001}
console.log(restUser);//{}
console.log(theme); //dark
console.log(mode); // auto
console.log(restPrefs); //{lan:"en"}
console.log(meta); //{ role: "Frontend Dev" }
console.log(extra); // default
console.log(restData); // {}

// Q15.
const settings = null;

const { theme = "light", mode = "auto" } = settings || {};

console.log(theme);  // light
console.log(mode);   // auto


const config = undefined;

const { lang = "en", region = "US" } = config;

console.log(lang); // error   Cannot read properties of undefined (reading 'lang')
console.log(region);

// Q16.
const config = {
  user: {
    name: "Sohana",
    details: null
  },
  prefs: undefined,
  theme: "dark"
};

const {
  user: {
    name,
    details: { city = "Bengaluru", country = "India" } = {}
  },
  prefs: { lang = "en", mode = "auto" } = {},
  theme,
  extra = "default"
} = config;

console.log(name); // Sohana
console.log(city); //
console.log(country);
console.log(lang);
console.log(mode);
console.log(theme);
console.log(extra);

// Q17.
const profile = {
  user: {
    name: "Sohana",
    info: undefined,
    details: null
  },
  prefs: {
    theme: undefined
  }
};

const {
  user: {
    name,
    info: { city = "Bengaluru", country = "India" } = {},
    details: { role = "Frontend Dev" } = {}
  },
  prefs: {
    theme = "light",
    lang = "en"
  } = {},
  extra = "default"
} = profile;

console.log(name);// Sohana
console.log(city);// Bengaluru
console.log(country);// India
console.log(role); // Error
console.log(theme);
console.log(lang);
console.log(extra);

// Q20.
const config = {
  user: {
    name: "Sohana",
    info: null,
    details: null
  },
  prefs: null,
  theme: undefined
};

const {
  user: {
    name,
    info = {},
    details: { city = "Bengaluru" } = {}, 
  },
  prefs: prefsValue = {},
  theme = "dark",
  extra = "default"
} = config;

console.log(name);
console.log(info);
console.log(city);
console.log(prefsValue);
console.log(theme);
console.log(extra);

// ---------------------------------------------------
const data1 = { a: undefined, b: null };
const { a = 10, b = 20 } = data1;
console.log(a); // 10
console.log(b); // null

const data2 = { nested: undefined };
const { nested: { x = 5 } = {} } = data2;
console.log(x); // 5

const data3 = { nested: null };
const { nested: { y = 10 } = {} } = data3;
console.log(y); // Error

const arr = [undefined, null, 0];
const [first = 1, second = 2, third = 3] = arr;
console.log(first, second, third); // 1 , null , 0

const config = { user: { name: "Sohana", info: null }, theme: undefined };
const {
  user: { name, info: { city = "Bengaluru" } = {} },
  theme = "dark"
} = config;
console.log(name); // Sohana
console.log(city); // Cannot read properties of null 
console.log(theme);

const arr = [1,2,3];
const obj = {...arr};
// const obj = { 0: 1 , 1: 2 , 2: 3} Index becomes the Keys

const obj = { 0: 1 , 1: 2 , 2: 3} ;
const arr = [...obj];
console.log(arr); // This will throw error : "obj is not iterable"

// Alternative solution to this:
const arr = [...Object.entries(obj)];
console.log(arr); // [['0',1] , ['1',2] , ['2',3]]

