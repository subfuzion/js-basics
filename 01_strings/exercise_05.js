/**
 * Implement a function that returns a string slice from the
 * start index until the end of the string.
 * Example: slice("Cormac", 3);
 * Returns: "mac"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function slice(s, start) {
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
    fn: slice,
    args: ["Cormac", 3],
    expected: "mac",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: slice,
    args: ["Cormac", 0],
    expected: "Cormac",
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: slice,
    args: ["Cormac", 5],
    expected: "c",
    cmpfn: cmp,
  },
  {
    id: 4,
    fn: slice,
    args: ["Cormac", 6],
    expected: "",
    cmpfn: cmp,
  },
  {
    id: 5,
    fn: slice,
    args: ["Cormac", 7],
    expected: "",
    cmpfn: cmp,
  },
  {
    id: 6,
    fn: slice,
    args: ["Cormac", -1],
    expected: "c",
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
