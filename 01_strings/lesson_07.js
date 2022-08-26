// ============================================================================
// Extracting parts of a string (substrings) with slice (continued).
// ============================================================================

// See the docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns a slice of s with the first and last characters removed.
 * the end index.
 *
 * @param {string} s
 * @returns {string}
 *
 * @example
 * exercise_07("Cormac"); // returns orma
 */
function exercise_07(s) {
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
    fn: exercise_07,
    args: ["Cormac"],
    expected: "orma",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_07,
    args: ["ab"],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_07,
    args: ["abc"],
    expected: "b",
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
