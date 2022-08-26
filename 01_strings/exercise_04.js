/**
 * Implement a function that returns the index of the specified character.
 * Example: indexOf("Cormac", "m");
 * Returns: 3
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function indexOf(s, char) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let char = "m";
  let expected = 3;
  let actual = indexOf(input, char);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let char = "x";
  let expected = -1;
  let actual = indexOf(input, char);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
