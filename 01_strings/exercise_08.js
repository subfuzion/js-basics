/**
 * Implement a function that returns the last n number
 * of charcters from a string.
 * Example: last("Cormac", 1);
 * Returns: "c"
 *
 * Example: last("Cormac", 3);
 * Returns: "mac"
 *
 * Example: last("Cormac", 6);
 * Returns: "Cormac"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function last(s, n) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let n = 1;
  let expected = "c";
  let actual = last(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let n = 3;
  let expected = "mac";
  let actual = last(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let n = input.length;
  let expected = "Cormac";
  let actual = last(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
