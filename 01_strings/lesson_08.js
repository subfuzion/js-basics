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
 * Returns the last number n of characters from a string.
 *
 * @param {string} s
 * @returns {string}
 *
 * @example
 * exercise_08("Cormac", 1); // returns c
 *
 * @example
 * exercise_08("Cormac", 3); // returns mac
 *
 * @example
 * exercise_08("Cormac", 6); // returns cormac
 */
function exercise_08(s, n) {
  // HINT: you will need to negate n to return characters from the end
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
    fn: exercise_08,
    args: ["Cormac", 1],
    expected: "c",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_08,
    args: ["Cormac", 3],
    expected: "mac",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_08,
    args: ["Cormac", 6],
    expected: "Cormac",
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
