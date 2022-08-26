// You've already been using a function to print to the
// console (console.log()).
//
// Functions allow us to encapsulate code that does some
// work -- sometimes the work is to do something (like
// print to the console) and sometimes the work is to
// do some processing on the input and return a value.
//
// We'll be using functions a lot, which is why we're
// looking at them early.
//
// Let's look at examples:

// A pure function
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5

// A function that produces a "side effect":
function printGreeting(name) {
  console.log("Hello", name);
}

printGreeting("Cormac"); // Hello Cormac

// A function that creates a greeting
function makeGreeting(name) {
  return "Hello " + name;
}

let g = makeGreeting("Cormac");
console.log(g); // Hello Cormac

// A function to reverse a string (this is just an
// example, don't focus on the implementation for now)
function reverseString(s) {
  let rev = "";

  // Starting from the last character, iterate our way
  // to the first character, appending each character
  // to rev.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev;
}

let r = reverseString("tony");
console.log(r); // ynot (ynot indeed? :)
