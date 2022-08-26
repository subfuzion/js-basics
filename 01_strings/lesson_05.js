// ============================================================================
// Extracting parts of a string (substrings) with slice.
// ============================================================================

// The `.slice()` is used to extract parts of strings, called substrings,
// from the start index (inclusive) up to but not including the end index
// (exclusive).

// Negative indices can be used to start from the end instead of the beginning
// of a string.

// See the docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns a string slice from the start index to the end of the string.
 *
 * @param {string} s
 * @param {number} start
 * @returns {string}
 *
 * @example
 * exercise_05("Cormac", 3); // returns mac
 */
function exercise_05(s, start) {
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
    fn: exercise_05,
    args: ["Cormac", 3],
    expected: "mac",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_05,
    args: ["Cormac", 0],
    expected: "Cormac",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_05,
    args: ["Cormac", 5],
    expected: "c",
    cmpfn: equals,
  },
  {
    id: 4,
    fn: exercise_05,
    args: ["Cormac", 6],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 5,
    fn: exercise_05,
    args: ["Cormac", 7],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 6,
    fn: exercise_05,
    args: ["Cormac", -1],
    expected: "c",
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
