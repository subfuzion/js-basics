// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns the index of the given character ch, or else -1 if not found.
 *
 * @param {string} s
 * @param {string} ch
 * @returns {string}
 *
 * @example
 * exercise_04("Cormac", "m"); // returns 3
 */
function exercise_04(s, ch) {
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
    fn: exercise_04,
    args: ["Cormac", "m"],
    expected: 3,
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_04,
    args: ["Cormac", "x"],
    expected: -1,
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_04,
    args: ["Cormac", "c"],
    expected: 5,
    cmpfn: equals,
  },
  {
    id: 4,
    fn: exercise_04,
    args: ["Cormac", ""],
    expected: 0,
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
