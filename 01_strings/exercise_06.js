/**
 * Implement a function that returns a string slice from a
 * start index up until but not including an end index.
 * Example: slice("Cormac", 1, 5);
 * Returns: "orma"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function slice(s, start, end) {
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
    args: ["Cormac", 0, 6],
    expected: "Cormac",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: slice,
    args: ["Cormac", 3, 6],
    expected: "mac",
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: slice,
    args: ["Cormac", 1, 5],
    expected: "orma",
    cmpfn: cmp,
  },
  {
    id: 4,
    fn: slice,
    args: ["Cormac", 1, -1],
    expected: "orma",
    cmpfn: cmp,
  },
  {
    id: 5,
    fn: slice,
    args: ["Cormac", 5, 6],
    expected: "c",
    cmpfn: cmp,
  },
  {
    id: 6,
    fn: slice,
    args: ["Cormac", 6, 7],
    expected: "",
    cmpfn: cmp,
  },
  {
    id: 7,
    fn: slice,
    args: ["Cormac", 7, 7],
    expected: "",
    cmpfn: cmp,
  },
  {
    id: 8,
    fn: slice,
    args: ["Cormac", -3, -1],
    expected: "ma",
    cmpfn: cmp,
  },
  {
    id: 9,
    fn: slice,
    args: ["Cormac", -6, -2],
    expected: "Corm",
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
