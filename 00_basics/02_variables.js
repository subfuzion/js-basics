const log = console.log;

// In JavaScript, you will do things with data that are
// represented with literals or with variables. Variables
// let you use names to represent potentially different
// values.

let n;
console.log(n); // undefined

n = 1; // assign a number
log(n); // 1

n = 2; // assign a different number
log(n); // 2

n = n + 1;
log(n); // 3

log(++n); // 4

let a = 3, b = 2;
let sum = a + b, dif = a - b;
console.log(sum); // 5
console.log(dif); // 1

let name = "cormac";
console.log(name); // "cormac"

let ch = name.at(0);
console.log(ch); // "c"

let s1 = "Hello";
let s2 = "world";
let s3 = s1 + ", " + s2 + "!";
console.log(s3); // Hello, world!

let v = true;
console.log(v); // true
v = !v;
console.log(v); // false

v = 1 < 2;
console.log(v); // true

v = 1 > 2;
console.log(v); // false

// BEWARE: JavaScript lets you assign different types...
let x = 0;
console.log(typeof x); // number
// ... but you generally want to avoid it.
x = "hello";
console.log(type x); // string! Probably not what you want

x = false;
consxole.log(typeof x); // boolean! Again, usually not what you want

// The names you use for variables should help you spot errors:
let y = "Alice"; // x and y are good variable names for numbers
let name = 7; // Really? Ok, maybe somebody is actually named "Seven" (or "7"), but not 7.
let year = false; // Another "code smell" ...
