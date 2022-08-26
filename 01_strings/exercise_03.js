/**
 * Implement a function that returns a character at the specified index.
 * Example: at("Cormac", 3);
 * Returns: "m"
 *
 * NOTE: Use the appropriate string method to implement the function.
 */
function at(s, index) {
}

// ===== //
// TESTS //
// ===== //

{
  let input = "Cormac";
  let index = 3;
  let expected = "m";
  let actual = at(input, index);

  if (actual !== expected) {
    console.log(`❌ FAIL: actual: ${actual}, expected: ${expected}`);
  } else {
    console.log("✅ PASS");
  }
}

{
  let input = "Cormac";
  let index = 6;
  let expected = undefined;
  let actual = at(input, index);

  if (actual !== expected) {
    console.log(`❌ FAIL: actual: ${actual}, expected: ${expected}`);
  } else {
    console.log("✅ PASS");
  }
}

{
  let input = "Cormac";
  let index = input.length - 1;
  let expected = "c";
  let actual = at(input, index);

  if (actual !== expected) {
    console.log(`❌ FAIL: actual: ${actual}, expected: ${expected}`);
  } else {
    console.log("✅ PASS");
  }
}

{
  let input = "Cormac";
  let index = input.length;
  let expected = undefined;
  let actual = at(input, index);

  if (actual !== expected) {
    console.log(`❌ FAIL: actual: ${actual}, expected: ${expected}`);
  } else {
    console.log("✅ PASS");
  }
}
