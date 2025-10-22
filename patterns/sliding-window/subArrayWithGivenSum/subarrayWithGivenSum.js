export function subarraySum(arr, target) {
  let currentSum = 0;
  let start = 0;
  let i = 0;
  while (i < arr.length) {
    currentSum += arr[i];
    if (currentSum > target) {
      currentSum -= arr[start];
      start++;
    }
    if (currentSum === target) {
      return [start + 1, i + 1];
    }
    i++;
  }
  return -1;
}

console.log(subarraySum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]
