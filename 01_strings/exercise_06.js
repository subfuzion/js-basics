/**
 * Implement a function that returns a string slice from a
 * start index up until but not including an end index.
 * Example: slice("Cormac", 1, 5);
 * Returns: "orma"
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function slice(s, start, end) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let start = 3;
  let end = input.length;
  let expected = "mac";
  let actual = slice(input, start, end);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = 0;
  let end = input.length;
  let expected = "Cormac";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = 1;
  let end = input.length - 1;
  let expected = "orma";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = 1;
  let end = -1;
  let expected = "orma";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = "5";
  let end = input.length;
  let expected = "c";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = input.length;
  let end = input.length + 1;
  let expected = "";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = input.length + 1;
  let end = input.length + 1;
  let expected = "";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = -3;
  let end = -1;
  let expected = "ma";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "Cormac";
  let start = -input.length;
  let end = -2
  let expected = "corm";
  let actual = slice(input, start);

  if (actual !== expected) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
