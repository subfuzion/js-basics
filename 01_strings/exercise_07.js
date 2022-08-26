/**
 * Implement a function that returns a string with the
 * first and last characters removed.
 * Example: slice("Cormac");
 * Returns: "orma"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function removeFirstLast(s) {
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
    fn: removeFirstLast,
    args: ["Cormac"],
    expected: "orma",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: removeFirstLast,
    args: ["ab"],
    expected: "",
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: removeFirstLast,
    args: ["abc"],
    expected: "b",
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
