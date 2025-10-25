export const findPivotIndex = (nums) => {
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }
  for (let i = 0, leftSum = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};
