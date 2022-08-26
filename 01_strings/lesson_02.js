// ============================================================================
// Converting a string to lowercase: .exercise_02()
// ============================================================================

let spell = "ABACADABRA".toLowerCase();
console.log(spell); // abacadabra

// Non-letters are ignored:
console.log("COUNTDOWN: 3..2..1..LIFTOFF!".toLowerCase());
// countdown: 3..2..1..liftoff!

// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns a lowercase version of the given string, s.
 *
 * @param {string} s
 * @returns {string}
 *
 * @example
 * exercise_02("Cormac"); // returns "cormac"
 */
function exercise_02(s) {
}

// ============================================================================
// TESTS
// ============================================================================

// Returns true when actual is strictly equal to expected.
let equals = (a, b) => a === b;

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: exercise_02,
    args: ["CORMAC"],
    expected: "cormac",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_02,
    args: ["cormac"],
    expected: "cormac",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_02,
    args: [""],
    expected: "",
    cmpfn: equals,
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
