let start = Date.now();
let limit = 1 * 1000; // 3 seconds

console.log(new Date(start).toTimeString());
console.log("running...");

// run forever
while (true) {
  let t = Date.now();
  if (t - start > limit) break;
}

console.log("Done.", new Date().toTimeString());

let money = 1000;

while (money > 1) {
  console.log("current  balance", money);
  money = Math.floor(money - 0.2 * money);
}

console.log("final balance:", money);
