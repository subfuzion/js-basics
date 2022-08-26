// ============================================================================
// EXERCISE
// Use the appropriate string method to implement the function.
// ============================================================================
import {test} from "../../lib/test.js";

/**
 * Splits a string using "a" as the delimiter and returns an array of strings.
 *
 * @param {string} s
 * @returns {Array}
 *
 * @example
 * exercise_10("banana"); // Returns ["b", "n", "n", ""]
 */
function exercise_10(s) {
}

// Our test cases. Can you think of more?
let tests = [
  {
    id: 1,
    fn: exercise_10,
    args: ["banana"],
    expected: ["b", "n", "n", ""],
    cmpfn: test.arrayEquals,
  },
  {
    id: 2,
    fn: exercise_10,
    args: ["a"],
    expected: ["", ""],
    cmpfn: test.arrayEquals,
  },
  {
    id: 3,
    fn: exercise_10,
    args: [""],
    expected: [""],
    cmpfn: test.arrayEquals,
  },
];

test(tests);
