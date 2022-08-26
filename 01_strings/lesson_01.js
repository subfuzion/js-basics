// ============================================================================
// Converting a string to uppercase.
// ============================================================================

let spell = "abacadabra".toUpperCase();
console.log(spell); // ABACADABRA

// Non-letters are ignored:
console.log("countdown: 3..2..1..liftoff!".toUpperCase());
// COUNTDOWN: 3..2..1..LIFTOFF!

// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================

/**
 * Returns an uppercase version of the given string, s.
 *
 * @param {string} s
 * @returns {string}
 *
 * @example
 * exercise_01("Cormac"); // returns "CORMAC"
 */
function exercise_01(s) {
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
    fn: exercise_01,
    args: ["Cormac"],
    expected: "CORMAC",
    cmpfn: equals,
  },
  {
    id: 2,
    fn: exercise_01,
    args: ["CORMAC"],
    expected: "CORMAC",
    cmpfn: equals,
  },
  {
    id: 3,
    fn: exercise_01,
    args: ["cormac"],
    expected: "CORMAC",
    cmpfn: equals,
  },
  {
    id: 4,
    fn: exercise_01,
    args: [""],
    expected: "",
    cmpfn: equals,
  },
  {
    id: 5,
    fn: exercise_01,
    args: ["countdown: 3..2..1..liftoff!"],
    expected: "COUNTDOWN: 3..2..1..LIFTOFF!",
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
