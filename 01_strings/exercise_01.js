/**
 * Implement a function that returns a string converted to uppercase.
 * Example: toUpperCase("Cormac");
 * Returns: "CORMAC"
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function toUpperCase(s) {
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
    fn: toUpperCase,
    args: ["Cormac"],
    expected: "CORMAC",
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: toUpperCase,
    args: ["CORMAC"],
    expected: "CORMAC",
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: toUpperCase,
    args: ["cormac"],
    expected: "CORMAC",
    cmpfn: cmp,
  },
  {
    id: 4,
    fn: toUpperCase,
    args: [""],
    expected: "",
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
