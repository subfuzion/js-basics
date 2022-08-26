/**
 * Implement a function that returns the index of the specified character.
 * Example: indexOf("Cormac", "m");
 * Returns: 3
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function indexOf(s, ch) {
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
    fn: indexOf,
    args: ["Cormac", "m"],
    expected: 3,
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: indexOf,
    args: ["Cormac", "x"],
    expected: -1,
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: indexOf,
    args: ["Cormac", "c"],
    expected: 5,
    cmpfn: cmp,
  },
  {
    id: 4,
    fn: indexOf,
    args: ["Cormac", ""],
    expected: 0,
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
