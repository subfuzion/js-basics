/**
 * Implement a function that splits strings on the letter a
 * and returns an array.
 * Example: split("banana");
 * Returns: ["b", "n", "n", ""]
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function splitA(s) {
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

// The comparison function for tests.
// returns true when actual is equal to expected.
let cmp = (a, b) => isArrayEqual(a, b);

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: splitA,
    args: ["banana"],
    expected: ["b", "n", "n", ""],
    cmpfn: cmp,
  },
  {
    id: 2,
    fn: splitA,
    args: ["a"],
    expected: ["", ""],
    cmpfn: cmp,
  },
  {
    id: 3,
    fn: splitA,
    args: [""],
    expected: [""],
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
