/**
 * Implement a function that returns a string converted to lowercase.
 * Example: toLowerCase("CORMAC");
 * Returns: "cormac"
 */
function toLowerCase(s) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "CORMAC";
  let expected = "cormac";
  let actual = toLowerCase(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "cormac";
  let expected = "cormac";
  let actual = toLowerCase(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
