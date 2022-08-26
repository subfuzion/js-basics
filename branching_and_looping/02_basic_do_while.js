let money = 10;

do {
  console.log("current  balance", money);
  if (money > 1) {
    money = Math.floor(money - 0.2 * money);
  }
} while (money > 1);
