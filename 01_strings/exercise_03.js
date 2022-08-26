/**
 * Implement a function that returns a character at the specified index.
 * Example: at("Cormac", 3);
 * Returns: "m"
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function at(s, index) {
}

// ============================================================================
// TESTS
// ============================================================================

// The comparison function for tests.
// returns true when actual is equal to expected.
let cmp = (a, b) => a === b;

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: at,
    args: ["Cormac", 3],
    expected: "m",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: at,
    args: ["Cormac", 6],
    expected: undefined,
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: at,
    args: ["Cormac", 5],
    expected: "c",
    cmpfn: cmp,
  },
  {
    id: 4,
    fn: at,
    args: ["Cormac", 6],
    expected: undefined,
    cmpfn: cmp,
  },
];

for (let i = 0; i < tests.length; i++) {
  let t = tests[i];
  t.actual = t.fn.apply(null, t.args);

  if (cmp(t.actual, t.expected)) {
    console.log(`✅ PASS: ${t.id}`);
  } else {
    // stringify to pretty-print values
    let actual = JSON.stringify(t.actual);
    let expected = JSON.stringify(t.expected);
    console.log(`❌ FAIL: ${t.id}. actual: ${actual}, expected: ${expected}`);
  }
}
