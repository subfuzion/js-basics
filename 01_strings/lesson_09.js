// ============================================================================
// Splitting strings with a specific delimiter.
// ============================================================================

// See the docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split


// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Splits a string in csv format and returns an array of strings.
 *
 * @param {string} csv
 * @returns {Array}
 *
 * @example
 * exercise_09("Bob,Alice,Mary"); // Returns ["Bob", "Alice", "Mary"]
 */
function exercise_09(csv) {
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
    fn: exercise_09,
    args: ["a,b,c"],
    expected: ["a", "b", "c"],
    cmpfn: arrayEquals,
  },
  {
    id: 2,
    fn: exercise_09,
    args: ["a"],
    expected: ["a"],
    cmpfn: arrayEquals,
  },
  {
    id: 3,
    fn: exercise_09,
    args: [""],
    expected: [""],
    cmpfn: arrayEquals,
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
