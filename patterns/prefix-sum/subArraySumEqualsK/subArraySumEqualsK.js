export function subArraySumEqualsk(nums, k) {
  // 1. Initialize the History Tracker (Hash Map)
  // Key: Prefix Sum value (the running total seen so far)
  // Value: Frequency (how many times that sum has occurred)
  const prefixMap = new Map();

  // CRITICAL STEP: Initialize with {0: 1} to handle subarrays starting from index 0.
  prefixMap.set(0, 1);

  let currentSum = 0; // The running total (Prefix Sum)
  let count = 0; // The total count of valid subarrays

  // 2. Iterate through the array
  for (const num of nums) {
    // Step 2: Update Running Sum
    currentSum += num;
    console.log("current", currentSum);

    // Step 3: Check for Matches
    // Use the rearranged formula: needed_sum = current_sum - k
    const neededSum = currentSum - k;
    console.log("neededSum:", neededSum);
    // If the needed_sum exists in the history,
    // add its frequency to our total count.

    if (prefixMap.has(neededSum)) {
      count += prefixMap.get(neededSum);
    }

    // Step 4: Update History (Record the current sum for future checks)
    // Set the current sum's frequency. If it's new, the default is 0.
    prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
    console.log("prefixMap:", prefixMap);
  }

  return count;
}
