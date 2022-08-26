/**
 * Implement a function that returns a string slice from the
 * start index until the end of the string.
 * Example: slice("Cormac", 3);
 * Returns: "mac"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function slice(s, start) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let start = 3;
  let expected = "mac";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = 0;
  let expected = "Cormac";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = "5";
  let expected = "c";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = input.length;
  let expected = "";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = input.length + 1;
  let expected = "";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = -1;
  let expected = "c";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = -input.length;
  let expected = "c";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
