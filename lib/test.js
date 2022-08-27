// Returns true when the actual value strictly equals the expected value
export const equals = (a, b) => a === b;

// Returns true when the actual array equals the expected array
export const arrayEquals = (a, b) => {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

function validateTest(t) {
  let errors = [];
  if (!t.goal) errors.push("test case is missing property: goal");
  if (!t.args) errors.push("test case is missing property: args");
  if (!t.expect) errors.push("test case is missing property: expect");
  if (!t.test) errors.push("test case is missing property: test");

  if (!Array.isArray(t.args))
    errors.push("test case: args value must be an array of test iput arguments");

  if (typeof t.test !== "function")
    errors.push("test case: test value must be a function");

  return errors;
}

function validateTests(tests) {
  let errorCount = 0;
  for (let i = 0; i < tests.length; i++) {
    let t = tests[i];
    let id = t.id === undefined ? i+1 : t.id;
    id = id.toString().padStart(2, " ");
    let errors = validateTest(t);
    if (errors.length) {
      errorCount++;
      console.log(`🆘 ERROR: ${id}. ${t.goal}.`);
      errors.forEach(err => console.log(`   - ${err}`));
    }
  }

  if (errorCount > 0) {
    console.log(`Invalid tests: ${errorCount}`);
  }
  return errorCount === 0;
}

export function test(tests) {
  if (!validateTests(tests)) return;

  let passed = 0;
  let failed = 0;

  for (let i = 0; i < tests.length; i++) {
    let t = tests[i];

    let id = t.id === undefined ? i+1 : t.id;
    id = id.toString().padStart(2, " ");

    let cmpfn = t.cmpfn;
    if (!cmpfn) {
      if (Array.isArray(t.expect)) {
        cmpfn = arrayEquals;
      } else {
        cmpfn = equals;
      }
    }

    let args = t.args;
    t.actual = t.test.apply(null, args);

    if (cmpfn(t.actual, t.expect)) {
      passed++;
      console.log(`✅ PASS: ${id}. ${t.goal}.`);
    } else {
      failed++;
      // stringify to pretty-print values
      let input = args.join(", ");
      let actual = JSON.stringify(t.actual);
      let expect = JSON.stringify(t.expect);

      console.log(`❌ FAIL: ${id}. ${t.goal}.`);
      console.log(`   Test: input args: (${input}) => result: ${actual}, expected: ${expect}`);
      if (t.hint) {
      console.log(`   Hint: ${t.hint}.`);
      }
    }
  }

  let total = passed + failed;
  let score = ((passed / total) * 100).toFixed(1);
  console.log()
  console.log(`TEST RESULTS: ✅ PASS: ${passed}, ❌ FAIL: ${failed}, SCORE: ${score}%`);
}
