const p = console.log;

// IMPORTANT: String methods are the functions that are attached
// to the String.prototype (ex: String.prototype.toUpperCase()).
// (String.prototype is an object that is the prototype for all
// String instances).
// You will NOT create instance of String yourself. JavaScript
// will convert a *string* to a *String* instance for you so that
// you can use String methods. Instead you create strings by
// using quotes (single, double, or from template strings using
// backticks, ex: "hello", 'hello', or `hello`).

// ==================================================
// String methods that you really NEED to memorize!!!
// Keep in mind strings and arrays methods use
// zero-based *offets*, not "positions".
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ==================================================

// (1) Case conversions
// .toUpperCase(), .toLowerCase()

// (2) Indexing into a string
// .at(), .charAt(), .charCodeAt()
// .indexOf(), .lastIndexOf()

// (3) Carving up a string
// .slice()
// .substring()
//   NOTE: slice and substring are almost identical, but
//   slice lets you use negative indices, where as substring
//   converts any negative number to zero, and then reorders
//   your start and end indices (if necessary) so that the
//   start index is less than the end index. Many programmers
//   find slice() behavior more intuitive than substring()
//   behavior, so for now, just focus on slice().

// .split() - breaking up a string into array elements
//   NOTE: the complementary array join() method can be
//   used to create a string

// (4) Cleaning up or padding a string
// .trim(), .trimStart(), .trimEnd()
// .padStart(), .padEnd()

// (5) Regular Expressions -- MUST KNOW!!!
// .search(regex) / .match(regex) / .replace(pattern)

// =====================
// (1) Case conversions:
// =====================
let name = "cormac".toUpperCase();
p(name);
p(name.toLowerCase());

// ==========================
// (2) Indexing into a string
// ==========================
let a = "hello world";
p(a);
p("0:", a.at(0));
p("1:", a.at(1));
p("6:", a.at(6));
p("length", a.length);

// all equivalent
p(a.at(a.length - a.length));
p(a.at(-a.length));
p(a.at(-11));

// equivalent (why? because the offet must be to the "left" side of the "slot")
p(a.at(a.length - 1));
p(a.at(-1));

p(a.at(12));

p(a.at(0) === a.charAt(0));
p(a.at(-1) === a.charAt(a.length - 1));

// crash and burn DON'T DO THIS!
// Use at() instead of charAt() because the
// latter does not support negative indices
p(a.at(-1) === a.charAt(-1));

// Character codes
// 16-bit Unicode (UTF-16)
// https://en.wikipedia.org/wiki/List_of_Unicode_characters
// By design, same as ASCII for the first 127 characters
// https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg
p("A".charCodeAt(0));
p("Aa".charCodeAt(1));

p("a1b2c3".toUpperCase());
p("a1B2c3".toUpperCase());

// =======================
// (3) Carving up a string
// =======================
// .slice()
let s = "hello world";
// Can't do the following:
// s[0] = "H";  // want "Hello world"
// So... need to create a new string

let titleCasedHello = s.slice(0, 1).toUpperCase() + s.slice(1);
p(titleCasedHello);

// want Hello World (not the optimal, just a slice demo)
let titleCasedHello2 =
  s.slice(0, 1).toUpperCase() +
  s.slice(1, 6) +
  s.slice(6, 7).toUpperCase() +
  s.slice(7);
p(titleCasedHello2);

// .substring()
console.log(s.substring(0, 6));
console.log(s.substring(6));

// .split() - breaking up a string into array elements
let words = s.split(" ");
p("number of parts when splitting 'hello world' on space:", words.length);
p(words[0], words[1].toUpperCase());

let csv = "10,9,8,7,6,5,4,3,2,1";
let data = csv.split(",");
p(data);

// ============================================
// NOTE: Joining a string from array elements
// This is an array method, but it's convenient
// to show how array join() works after showing
// how string split works. They complement each
// other and are very frequently used together.
// ============================================
// Let's used previous split (data) and join it:
let t = data.join("");
p(t);

// That doesn't look nice (digits are all
// cramped up together), so let's add a separator:
t = data.join(" | ");
p(t);

// ===================================
// (4) Cleaning up or padding a string
// ===================================
// .trim(), .trimStart(), .trimEnd()
// .padStart(), .padEnd()

// =======================================
// (5) Regular Expressions -- MUST KNOW!!!
// =======================================
// .search(regex) / .match(regex) / .replace(pattern)

// =======================================================
// PUTTING IT ALTOGETHER!
// Introduction to an algorithm: Is a string a palindrome?
//
// A palindrome is a string that is the same forwards and
// backwards (ignoring case and punctuation).
//
// This is just one way to implement the algorithm, but
// lets put what you've learned in this module to use!
//
// Study this until you understand and can implement it
// on your own!
// =======================================================

let u = "A man a plan a canal Panama";
p(u);

let forward = u.toLowerCase().replace(/ /g, "");
p(forward);

let backward = forward.split("").reverse().join("");
p(backward);

p("isPalindrome?", forward === backward);
