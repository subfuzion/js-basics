/**
 * Implement a function that splits strings on the letter a
 * and returns an array.
 * Example: split("banana");
 * Returns: ["b", "n", "n", ""]
 *
 * Learn from the tests. Consider adding your own!
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function splitA(s) {
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
  let input = "banana";
  let expected = ["b", "n", "n", ""];
  let actual = splitA(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "a";
  let expected = ["", ""];
  let actual = splitA(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}

{
  let input = "";
  let expected = [""];
  let actual = split(input);

  if (!isArrayEqual(actual, expected)) {
    console.log(`FAIL: actual: ${actual}, expected: ${expected}`);
  }
}
