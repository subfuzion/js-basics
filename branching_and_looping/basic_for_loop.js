import { format } from "util";

// Why the basic for-loop?
// - Most flexible, general purpose, foundational form of looping
// - Gives you the ability to create a loop-scoped iteration variable
// - Gives you access to the loop iteration variable

function log(...args) {
  const s = format("", ...args);
  process.stdout.write(s);
}

const i = 100;
console.log("outer i:", i);

// incrementing loop
for (let i = 0; i < 51; i++) {
  if (i % 10 === 0) {
    log(`*${i}*`);
  } else if (i % 5 === 0) {
    log(i);
  } else {
    log(".");
  }
}
console.log();

for (let i = 10, j = 0; i > 0 && j !== 3; i--, j++) {
  log(i);
}
console.log();

console.log("outer i remains unchanged:", i);
console.log();

console.log("looping forever, press Ctrl-C to exit");
//for (;;) {
// will run forever (an infinite loop!), so ensure
// that you have some other condition you're checking in
// the loop to decide when to exit
// Sometimes this is what you want: imagine the event loop
// for your own program that never exits unless user
// explicitly chooses to. In this case, use Ctrl-C
//  log(".");
//}
