// Different ways to print hello world.

// (1) As a single string (a string is an ordered sequence of characters).
// In JavaScript, a string is quoted (can be single or double
// quotes).
console.log("Hello, world!");
console.log('Hello, world!');

// (2) As two separate strings (console.log() automatically prints a
// space between separate arguments).
console.log("Hello,", "world!");

// (3) As a concatenated (joined together) string, formed from three
// separate strings (including one that was just an explicit space
// character).
console.log("Hello" + ", " + "world!");

// (4) Using a template (notice the backticks?):
let s1 = "Hello";
let s2 = "world";
console.log(`${s1}, ${s2}!`);

// It's tedious to keep writing out console.log, especially
// when you have a lot to print out.
// Let's assign the function to a shorter variable.
let log = console.log;

// Note: you're not actually calling the function, just
// referring to it as part of an assignment, so you
// don't use parentheses:
// `console.log`, not `console.log()`.

// Now you can just use log():
log("Hello, world!");

// Or you can be really terse with a single character: `l()`:
let l = console.log;
l("Hello, world!");

// WARNING: depending on font, l can be very hard to distinguish from 1.
// A better idea would be to use "p" (for "print"):
let p = console.log;
p("Hello, world!");
