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
 * Returns a string slice from the start index up to but not including
 * the end index.
 *
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @returns {string}
 *
 * @example
 * exercise_06("Cormac", 1, 5); // returns orma
 */
function exercise_06(s, start, end) {
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
    fn: exercise_06,
    args: ["Cormac", 0, 6],
    expected: "Cormac",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_06,
    args: ["Cormac", 3, 6],
    expected: "mac",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_06,
    args: ["Cormac", 1, 5],
    expected: "orma",
    cmpfn: equals,
  },
  {
    id: 4,
    fn: exercise_06,
    args: ["Cormac", 1, -1],
    expected: "orma",
    cmpfn: equals,
  },
  {
    id: 5,
    fn: exercise_06,
    args: ["Cormac", 5, 6],
    expected: "c",
    cmpfn: equals,
  },
  {
    id: 6,
    fn: exercise_06,
    args: ["Cormac", 6, 7],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 7,
    fn: exercise_06,
    args: ["Cormac", 7, 7],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 8,
    fn: exercise_06,
    args: ["Cormac", -3, -1],
    expected: "ma",
    cmpfn: equals,
  },
  {
    id: 9,
    fn: exercise_06,
    args: ["Cormac", -6, -2],
    expected: "Corm",
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
