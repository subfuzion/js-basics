/**
 * Implement a function that returns the last n number
 * of charcters from a string.
 *
 * Example: last("Cormac", 1);
 * Returns: "c"
 *
 * Example: last("Cormac", 3);
 * Returns: "mac"
 *
 * Example: last("Cormac", 6);
 * Returns: "Cormac"
 *
 * HINT: you will need to negate n to return n number of
 * characters starting from the end.
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function last(s, n) {
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
    fn: last,
    args: ["Cormac", 1],
    expected: "c",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: last,
    args: ["Cormac", 3],
    expected: "mac",
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: last,
    args: ["Cormac", 6],
    expected: "Cormac",
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
