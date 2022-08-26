// (1) Implement a function to print the following output:
// Hello

function printHello() {

}

// (2) Implement a function to greet someone by name.
// Example: sayHello("Cormac")
// Output:  Hello Cormac

function sayHello(name) {

}

// (3) Implement a function to print a greeting to a name.
// Example: greet("Guten tag", "Cormac");
// Output:  Guten tag Cormac

function greet(greeting, name) {

}

// (4) Implement a function that returns a concatenated string,
// separated with a space.
// Example: join("Hello", "Cormac");
// Returns: "Hello Cormac"

function join(s1, s2) {

}

// Test it:
{
  let greeting = join("Hello", "Cormac");
  console.log(greeting);

  let expectedGreeting = "Hello Cormac";
  if (greeting === expectedGreeting) {
    console.log("PASS: 4")
  } else {
    console.log("FAIL: 4, actual:", greeting, "expected:", expectedGreeting);
  }
}

// (5) Implement a function that returns the product of
// multiplying two numbers:
// Example: mul(2, 3);
// Returns: 6

function mul(a, b) {

}

// test it:
{
  let a = 5;
  let b = 6;
  let product = mul(a, b);
  if (product === a * 6) {
    console.log("PASS (nice work!)");
  } else {
    console.log("FAIL (try again)! actual:", product, "expected:", a * b);
  }
}
