/**
 * Implement a function that returns a string converted to uppercase.
 * Example: toUpperCase("Cormac");
 * Returns: "CORMAC"
 */
function toUpperCase(s) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let expected = "CORMAC";
  let actual = toUpperCase(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "CORMAC";
  let expected = "CORMAC";
  let actual = toUpperCase(input);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
