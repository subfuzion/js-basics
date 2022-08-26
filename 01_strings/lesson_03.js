// ============================================================================
// Accessing a character by index
// ============================================================================

// There are two ways to access a character by index.

let name = "Cormac";

// 1. Using bracket notation:

console.log(name[3]); // m

// 2. Using the string `.at()` method:

console.log(name.at(3)); // m

// The convenience of using the `.at()` method is that negative indices
// access characters relative to the end.

console.log(name.at(-1)); // c

// NOTE: that although the index is relative to the end, it is not
// zero-based as it is when relative to the start. You can think of it
// like this:
//
//            | C | o | r | m | a | c |
//            ^   ^   ^   ^   ^   ^   |
// Index      0   1   2   3   4   5<==| (-1)
//
// Starting from the end, it's necessary to move -1 to get to the
// index of the "slot" holding the character "c".

// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns a character at a given index.
 *
 * @param {string} s
 * @param {number} index
 * @returns {string}
 *
 * @example
 * exercise_03("Cormac", 3); // returns "m"
 */
function exercise_03(s, index) {
}

// ============================================================================
// TESTS
// ============================================================================

// Returns true when actual is strictly equal to expected.
let equals = (a, b) => a === b;

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: exercise_03,
    args: ["Cormac", 3],
    expected: "m",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_03,
    args: ["Cormac", 6],
    expected: undefined,
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_03,
    args: ["Cormac", 5],
    expected: "c",
    cmpfn: equals,
  },
  {
    id: 4,
    fn: exercise_03,
    args: ["Cormac", 6],
    expected: undefined,
    cmpfn: equals,
  },
];

for (let i = 0; i < tests.length; i++) {
  let t = tests[i];
  t.actual = t.fn.apply(null, t.args);

  if (t.cmpfn(t.actual, t.expected)) {
    console.log(`✅ PASS: ${t.id}`);
  } else {
    // stringify to pretty-print values
    let actual = JSON.stringify(t.actual);
    let expected = JSON.stringify(t.expected);
    console.log(`❌ FAIL: ${t.id}. actual: ${actual}, expected: ${expected}`);
  }
}
