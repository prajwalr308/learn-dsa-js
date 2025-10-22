export function minSumSubarraySum(target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }
  return (minLength = minLength === Infinity ? 0 : minLength);
}
