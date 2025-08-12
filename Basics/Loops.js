// Q1.
let count = 0;

for (let i = 0; i < 3; i++) {
    for (let j = i; j < 3; j++) {
        count += i + j;
    }
}

console.log(count); // 12

// Q2.
let result1 = "";
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    result += i;
}

console.log(result1); // "1245"

// Q3.
let output1 = "";

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === j) break;
        output += i + "" + j + " ";
    }
}

console.log(output1);

// output1 = 2 + "" + 1 + "" = 21 + 3 + "" + 1 + "" = 2131 +  32 = 21 31 32

// Q4.
let res = "";

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i + j === 4) break;
        if (i === j) continue;
        res += i + "" + j + " ";
    }
}

console.log(res);

// i = 1;
// res = 12
// i = 2;
// res = 12 21;
// i = 3;
// res = 12 21;

// Q5.
let i = 0;
let output2 = "";

while (i < 5) {
    if (i === 2) {
        i++;
        continue;
    }
    output2 += i;
    i++;
}

console.log(output2); // 0134

// i = 0;
// output2 = "" + 0 = "0";
// i = 1;
// output2 = 01
// i = 2;
// i = 3
// output2 = 013
// i=4
// output2 = 0134

// Q6.
let x = 5;
let str = "";

do {
    str += x + " ";
    x--;
} while (x > 5);

console.log(str);

str = 5;
x = 5;
str = 5;

// Forloop
// Q1. 
let result = "";

for (let i = 0; i < 5; i += 2) {
    result += i + " ";
}

console.log(result);

// i = 0;
// result = 0 

// i = 2;
// result = 0 2 

// i = 4;
// result = 0 2 4 ;

// Q2.
let sum = 0;

for (let i = 5; i > 0; i -= 2) {
    sum += i;
}

console.log(sum);

// i = 5;
// sum = 5;

// i = 3;
// sum = 8;

// i = 1;
// sum = 9;

// Q3.
let output = "";

for (let i = 0; i < 4; i++) {
    if (i === 2) break;
    output += i;
}

console.log(output); //01

// Q4.
let s = "";

for (let i = 0; i < 4; i++) {
    for (let j = i; j < 4; j++) {
        if ((i + j) % 2 === 0) continue;
        s += i + "" + j + " ";
    }
}

console.log(s);
// i = 0;
// s= 01 03
// i = 1;
// s = 01 03 12
// i = 2;
// s = 01 03 12 23
// i = 3;
// s= 01 03 12 23 

// Q5.
let str2 = "";

for (let i = 0; i < 10; i += 3) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    str2 += i + " ";
    if (i > 5) break;
}

console.log(str2);

// i = 0;
// i = 1;
// i = 4;
// i = 5;
// i = 6;
// i = 7;
// i = 10;
// str2 = "";

// Q6.
let num = 0;
for (let i = 0; i++ < 5;) {
    if (i % 2 === 0) {
        num += i;
        continue;
    }
    i++;
    num -= i;
}

console.log(num);

// i = 0 ; num = 0 ;

// i++ < 5 ==> 0 < 5 ==> true
// i = 1;
//  i++ = 2;
//  num = -2;

//  i = 2 ; num = -2;
//  i++ < 5 ==> 2 < 5 ==> true
//  i = 3;
//  i++ = 4;
//  num = -6;

//  i = 4 ; num = -6;
//  i++ < 5 ==> 4 < 5 ==> true
//  i = 5;
//  i++ = 6;
//  num = -12;

//  i = 5 , num = -12;
//  i++ < 5 ==> 5 < 5 ==> false
//  Answer: num  = -12;

// Q7.
let total = 0;

for (let i = 1, j = 4; i < 5 && j > 0; i++, j--) {
    if ((i + j) % 2 === 0) {
        total += i * j;
    } else {
        total -= i + j;
    }
}

console.log(total);

// i = 1 ; j = 4
// i + j = 5 % 2 != 0 ==> total = 0 - 1 + 4 = -5;

// i = 2 ; j = 3 ; total = 3;
// i + j = 5 % 2 != 0 ==> total = -5 - 5 = -10;

// i = 3 ; j = 2 ; total = 4;
// i + j = 5 % 2 != 0 ==> total = -10 -5 = -15;

// i = 4 ; j = 1 ; total = 3;
// i + j = 5 % 2 != 0 ==> total = -15 - 5 = -20;

// Q8.
let x1 = 2, y = 5;

for (let i = 0; (x1 += i) < 15; i += 2, y--) {
  if (y % 2 === 0) {
    x1 += y;
  } else {
    x1 -= y;
  }
}

console.log(x1, y);

// i = 0 ; x1 = 2 ; y = 5 
// (x1 += i) < 15 ==> 2 < 15 ==> true
// x1 = 2
// x1 = 2 - 5 = -3

// i = 2 ; x1 = -3 , y = 4;
// (x1 += i) < 15 ==> -1 < 15 ==> true
// x1 = -1
// x1 = -1 + 4 = 3;

// i = 4; x1 = 3 ; y = 3;
// (x1 += i) < 15 ==> 7 < 15 ==> true
// x1 = 7;
// x1 = 7 - 3 = 4;

// i = 6 ; x1 = 4 ; y = 2
// (x1 += i) < 15 ==> 10 < 15 ==> true
// x1 = 10;
// x1 = 10 + 2 = 12;

// i = 8 ; x1 = 12 ; y = 1
// (x1 += i) < 15 ==> 20 < 15 ==> false


// answer == x1 = 20 , y = 1

// While Loop
// Q1.
let a = 1, b = 5;

while (a++ < 5) {
  if (b-- % 2 === 0) {
    a += b;
  } else {
    b -= a;
  }
}

console.log(a, b);

// a = 1 , b = 5;
// 1 < 5 ==> true
// a = 2;
// 5 % 2 == 0 ==> false
// b = 4;
// b = 4 - 2 = 2;

// a = 2 , b = 2;
// 2 < 5 ==> true
// a = 3
// b = 1;
// a = 4;

// a=4 , b=1
// a= 5 , b = 0;
// b = 0 - 5 = -5

// a=5 , b = -5;

// console.log ==> a = 6 , b = -5

// Q2.

let x2 = 1;
let y2 = 4;

while (x2 < 7) {
    if (y2 % 2 === 0) {
        y2 += 3;
        continue;
    }
    x2++;
    y2--;
}

console.log(x2, y2);

// x2 = 1 , y2 = 4;
// 1 < 7 ==> true
// 4 % 2 == 0 ==> true ==> y2 = 4+3=7

// x2 = 1 , y2 = 7;
// 1 < 7
// 7 % 2 == 0 ==> false
// x2 = 2
// y2 = 6

// x2 = 2 , y2 = 6;
// 2 < 7 ==> true
// 6 % 2 == 0 ==> true
// y2 = 9;

// x2 = 2 , y2 = 9;
// x2 = 3 , y2 = 8;
// x2 = 3 , y2 = 11;
// x2 = 4 , y2 = 10;
// x2 = 4 , y2 = 13;
// x2 = 5 , y2 = 12;
// x2 = 5 , y2 = 15;
// x2 = 6 , y2 = 14;
// x2 = 6 , y2 = 17;
// x2 = 7 , y2 = 16;

// Q3. 
let x3 = 1, y3 = 4;

while (x3 < 7) {
    if (y3 % 2 === 0) {
        y3 += 3;
        continue;
    }
    x3++;
    y3 += 2;
}
console.log(x3, y3);

// x3 = 1, y3 = 4;
// x3 = 1 , y3 = 7;
// x3 = 2 , y3 = 9;
// x3 = 3 , y3 = 11;
// x3 = 4 , y3 = 13;
// x3 = 5 , y3 = 15;
// x3 = 6 , y3 = 17;
// x3 = 7 , y3 = 19;

// Q4.
let x4 = 1;
let y4 = 4;

while (x4 < 7) {
    if (y4 % 2 === 0) {
        y4 += 3;
        continue; 
    }
    y4 += 2;
}
console.log(x4, y4); // infinite loop


// Q5.
let a1 = 3;
let b1 = 8;

while (a1 < 15) {
    if (b1 % 5 === 0) {
        a1 += 4;
        b1 -= 2;
    } else {
        b1 += 3;
    }

    if (b1 > 20) {
        b1 -= 17;
    }
}

console.log(a1, b1); // Infinite loop

// a1 = 3 , b1 = 8;
// a1 = 3 , b1 = 11;
// a1 = 3 , b1 = 14;
// a1 = 3 , b1 = 15;
// a1 = 7 , b1 = 13;
// a1 = 7 , b1 = 16;
// a1 = 7 , b1 = 19;
// a1 = 7 , b1 = 3;
// a1 = 7 , b1 = 6;
// a1 = 7 , b1 = 9;
// a1 = 7 , b1 = 12;
// a1 = 7 , b1 = 15;
// a1 = 11 , b1 = 13;
// a1 = 11 , b1 = 16;
// a1 = 11 , b1 = 19;
// a1 = 11 , b1 = 3;


// Do While Loop

// Q1. 
let x = 5;
let y = 0;

do {
  y += x;
} while (x-- > 0);

console.log(x, y); // x = -1 , y = 15
//  y = 5 , x = 4
//  y = 9 , x = 3
//  y = 12 , x = 2
//  y = 14 , x = 1
//  y = 15 , x = -1

// Q2.
let a = 3;
let b = 2;

do {
  a += b;
  b++;
} while (a < 15);

console.log(a, b);

a = 5, b = 3
a = 8 , b = 4
a = 12 , b = 5
a= 16 , b = 6

//Q3.
let x = 2;
let y = 10;

do {
  y -= x++;
} while (y > 0 && x < 10);

console.log(x, y); // 6 , -4

// x = 3 , y = 8;
// x = 4 , y = 5;
// x = 5 , y = 1;
// x = 6 , y = -4;

// Q4.
let a = 2;
let b = 0;

do {
  let c = a;
  do {
    b += c;
    c--;
  } while (c > 0);
  a--;
} while (a > 0);

console.log(a, b);

 

// c = 2 ,  b = 0;
// b = 2 , c = 1
// b = 3 , c = 0
// b = 3 , c = -1

// a  = 1 , b = 3 ;

// b = 4 , c = 0
// b = 4 , c = -1

// a = 0 , b = 4;


// Q5.
let a = 0;
let b = 1;

do {
  b += a++;

} while (a < 3 && b-- > 2);

console.log(a, b);

b = 0 , a = 1;

// Q6.
let a = 0, b = 5;

do {
    a += b-- - a++;
} while (a < 5 && b-- > 0);

console.log(a, b); // a = 5 b =4

// a = 0 + 5 - 0 = 5
// b = 4























