console.log("JavaScript numbers can be very large (53 bits)");
console.log("Max safe integer value (2^53 - 1):    ", Number.MAX_SAFE_INTEGER);
console.log("Min safe integer value (-(2^53 - 1)): ", Number.MIN_SAFE_INTEGER);
console.log();

const a = 3;
const b = 2;

console.log("Given:");
console.log("a:", a, "; typeof a:", typeof a);
console.log("b:", b, "; typeof b:", typeof b);

console.log();
console.log("Arithmetic operations");

// addition
console.log(
  `✅ addition: a + b is an expression that evaluates to ${a + b} (${typeof (
    a + b
  )})`
);

// subtraction
console.log(
  `✅ subtraction: a - b is an expression that evaluates to ${a - b} (${typeof (
    a - b
  )})`
);

// multiplication
console.log(
  `✅ multiplication: a * b is an expression that evaluates to ${
    a * b
  } (${typeof (a * b)})`
);

// division - can result in a number with a decimal
console.log(
  `✅ division: a / b is an expression that evaluates to ${a / b} (${typeof (
    a / b
  )})`
);

// whole number division (no decimal in result): use Math.floor(division_expr)
console.log(
  `✅ whole number division: Math.floor(a / b) is an expression that evaluates to ${Math.floor(
    a / b
  )} (${typeof Math.floor(a / b)})`
);

// modulo (remainder)
console.log(
  `✅ modulo (remainder): a % b is an expression that evaluates to ${
    a % b
  } (${typeof (a % b)})`
);
console.log("   Note: modulo always takes the sign of the dividend");

console.log();
console.log("Standard algebraic precedence:");
console.log();

const c = 4;
console.log("Given:");
console.log("a:", a, "; typeof a:", typeof a);
console.log("b:", b, "; typeof b:", typeof b);
console.log("c:", c, "; typeof c:", typeof c);

console.log();
console.log(`a + b * c = ${a + b * c}`);
console.log(`(a + b) * c = ${(a + b) * c}`);
console.log(`a + b / c = ${a + b / c}`);
console.log(`(a + b) / c = ${(a + b) / c}`);
