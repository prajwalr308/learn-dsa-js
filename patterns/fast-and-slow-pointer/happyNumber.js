function getNext(num) {
  let total = 0;
  while (num > 0) {
    const digit = num % 10;
    total += digit * digit;
    num = Math.floor(num / 10);
  }
  return total;
}

function isHappy(n) {
  let slow = n;
  let fast = getNext(n);

  // Fast moves twice as fast as slow
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}

// ✅ Example usage:
console.log(isHappy(19)); // true (Happy number)
console.log(isHappy(2)); // false (Not happy)
