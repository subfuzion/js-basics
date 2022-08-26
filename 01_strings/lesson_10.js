// ============================================================================
// Splitting strings with a specific delimiter (continued)
// ============================================================================

// See the docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Splits a string using "a" as the delimiter and returns an array of strings.
 *
 * @param {string} s
 * @returns {Array}
 *
 * @example
 * exercise_10("banana"); // Returns ["b", "n", "n", ""]
 */
function exercise_10(s) {
}

// ============================================================================
// TESTS
// ============================================================================

function isArrayEqual(a, b) {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Returns true when actual is strictly equal to expected.
let arrayEquals = (a, b) => isArrayEqual(a, b);

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: exercise_10,
    args: ["banana"],
    expected: ["b", "n", "n", ""],
    cmpfn: arrayEquals
  },
  {
    id: 2,
    fn: exercise_10,
    args: ["a"],
    expected: ["", ""],
    cmpfn: arrayEquals
  },
  {
    id: 3,
    fn: exercise_10,
    args: [""],
    expected: [""],
    cmpfn: arrayEquals
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
