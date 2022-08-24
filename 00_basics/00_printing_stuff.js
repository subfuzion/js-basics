// Different ways to print hello world.

// As a single string (a string is a sequence of characters).
// In JavaScript, a string is quoted (can be single or double
// quotes).
console.log("Hello, world!");

// As two separate strings (console.log() automatically prints a
// space between separate arguments).
console.log("Hello,", "world!");

// As a concatenated (joined together) string, formed from three
// separate strings (including one that was just an explicit space
// character).
console.log("Hello" + ", " + "world!");

// Create a string using a template (notice the backticks?):
let part1 = "Hello";
let part2 = "world";
let sentence = `${part1}, ${part2}!`;
console.log(sentence);

// It's tedious to keep writing out console.log, especially
// when you have a lot to print out.
// Let's assign the function to a shorter variable.
// Note: you're not calling ("invoking") the function, so you
// don't use parentheses: `console.log`, not `console.log()`.
let log = console.log;

// Now you can just use log():
log("Hello, world!");

// Or if you prefer using just `l()`:
let l = console.log;
l("Hello, world!");

// WARNING: depending on font, l can be very hard to distinguish from 1.
// A better idea would be to use "p" (for "print"):
let p = console.log;
p("Hello, world!");
