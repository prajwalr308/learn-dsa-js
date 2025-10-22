## 🧭 Two Pointers Pattern (Fast and Slow Pointer)

### 🧠 Explanation

In this pattern, we use **two pointers** that move through a data structure (like a linked list or number sequence) at **different speeds**.

- **Slow pointer** moves **one step** at a time
  `slow → +1`
- **Fast pointer** moves **two steps** at a time
  `fast → +2`

This approach helps detect cycles or find midpoints efficiently in linear time and constant space.

---

### 🔁 Applications

#### 1. Detect a Cycle in a Linked List

If the two pointers **meet at some point**, a cycle exists.

#### 2. Find the Middle of a Linked List

If the **fast pointer** reaches the end,
the **slow pointer** will be at the **middle** of the list.

---

### 💡 Example: Happy Number

A **happy number** is defined as:

> Starting with any positive integer, replace the number by the sum of the squares of its digits.
> Repeat the process until the number equals 1 (it’s happy),
> or it loops endlessly in a cycle (it’s not happy).

We can use the **fast and slow pointer** technique to detect if a cycle occurs.

---

### 💻 Code Example

```js
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
```

---

### 🧩 Key Insight

This pattern is powerful for **cycle detection** — whether in:

- Linked lists,
- Number transformations,
- Or any process that can repeat states.

If two pointers meet → **Cycle detected**.
If one reaches the end (or reaches 1 in this case) → **No cycle**.
