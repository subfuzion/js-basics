const log = console.log;

// In JavaScript, you will do things with data that are
// represented with literal values or with variables.

// Here are examples of data expressed as literal values:

// (1) Print a number
// ==================
log(1); // the value of the number is 1
log(99); // the value of the number is 99

// (2) Print a string (a collection of characters)
// ===============================================
log("1"); // print a string with a single character (a digit)
log("99"); // print a string of two characters (2 digits)
log("a"); // print a string with a single character (a letter)
log(","); // print a string with a punctuation character (a comma)
log("hello"); // print a string of 5 characters
log("Happy 25th birthday!"); // print a string with various characters

// (3) Print a boolean (there are only two, true and false)
// ========================================================
log(true); // print the boolean true
log(false); // print the boolean false

log(1 + 1); // number addition => 2
log("Hello, " + "world!"); // string concatenation => Hello, world!

log(true); // true
log(!true); // false
log(true === true); // true
log(true !== true); // false

log(false); // false
log(!false); // true
log(false === false); // => true
log(false !== false); // => false

// (4) Adding number literals vs concatenating string literals
log(10 + 10); // 20
log("10" + "10"); // 1010

// (5) Literal objects
// An object is something that contains properties
// Properties map names ("keys") to values.
// The names are strings, the values can be any valid type,
// including numbers, strings, booleans, objects, arrays,
// and even functions (called "methods" when part of an object).

let p1 = {
  name: "Cormac",
  city: "San Francisco",
  role: "student",
};

let p2 = {
  name: "Tony",
  city: "Mountain View",
  role: "instructor",
};

console.log(p1); // { name: 'Cormac', city: 'San Francisco' }
console.log(p2); // { name: 'Tony', city: 'Mountain View' }

function printNameRole(p) {
  console.log(p.name + " (role: " + p.role + ")");
}

printNameRole(p1);
printNameRole(p2);

// (6) Literal arrays
// Arrays are an indexed-based sequence of elements.
// The index of the first element in the array is 0.
// The second element is at index 1, and so on.
// An array of strings might look like this:
// let animals =      [ "dog", "cat", "bird" ];
//                      |      |      |
// Index:               0      1      2
//
// This array's length is 3.
// If you wanted to append an item to the array, you could write
// it at the element indexed by the array's length:
//
// animals[animals.length] = "lizard";
//                    [ "dog", "cat", "bird", "lion"];
//                      |      |      |       |
// Index:               0      1      2       3
//
// You can think of the array's length as pointing to the
// next available slot for appending an element.
//
// But you can also just use `push()` to do the same thing:
//
// animals.push("tiger");
//                    [ "dog", "cat", "bird", "lion", "tiger" ];
//                      |      |      |       |       |
// Index:               0      1      2       3       4
//
// console.log(animals[4]);     // tiger
// console.log(animals.length); // 5
// console.log(animals[5]);     // undefined (past the end)

let persons = [p1, p2];
console.log(persons);

for (let i = 0; i < persons.length; i++) {
  let p = persons[i];
  console.log(p.name, p.city, p.role);
}
