/**
 * Implement a function that splits strings in csv format
 * as an array.
 * Example: split("Bob,Alice,Mary");
 * Returns: ["Bob", "Alice", "Mary"]
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function split(csv) {
}

// ===== //
// TESTS //
// ===== //

function isArrayEqual(a, b) {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

{
  let input = "a,b,c";
  let expected = ["a", "b", "c"];
  let actual = split(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "a";
  let expected = ["a"];
  let actual = split(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "";
  let expected = [];
  let actual = split(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
