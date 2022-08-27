// (1) Implement a function to return "Hello":

function sayHello() {
  // TODO
}

// test it:
{
  let result = sayHello();
  if (result === "Hello") {
    console.log("✅ PASS: sayHello() =>", result);
  } else {
    console.log("❌ FAIL: sayHello(): actual:", result, "expected: Hello");
  }
}

// (2) Implement a function to greet someone by name.
// Example: sayPersonalHello("Cormac")
// Output:  "Hello Cormac"

function sayPersonalHello(name) {
  // TODO
}

// test it:
{
  let name = "Cormac";
  let expect = "Hello Cormac";
  let result = sayPersonalHello(name);
  if (result === expect) {
    console.log("✅ PASS: sayPersonalHello() =>", result);
  } else {
    console.log("❌ FAIL: sayPersonalHello(): actual:", result, "expected:", expect);
  }
}

// (3) Implement a function that returns the product of
// multiplying two numbers:
// Example: mul(2, 3);
// Returns: 6

function mul(a, b) {

}

// test it:
{
  let a = 5;
  let b = 6;
  let expect = a * b;
  let result = mul(a, b);
  if (result === a * 6) {
    console.log("✅ PASS: mul(a, b) =>", result);
  } else {
    console.log("❌ FAIL: mul(): actual:", result, "expected:", expect);
  }
}
