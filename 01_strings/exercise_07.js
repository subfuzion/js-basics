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

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let expected = "orma";
  let actual = removeFirstLast(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "a";
  let expected = "";
  let actual = removeFirstLast(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "ab";
  let expected = "";
  let actual = removeFirstLast(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "abc";
  let expected = "b";
  let actual = removeFirstLast(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
