import { subarraySum } from "./patterns/sliding-window/subArrayWithGivenSum/subarrayWithGivenSum.js";
import { minSumSubarraySum } from "./patterns/sliding-window/minimumSizeSubarraySum/minimumSizeSubarraySum.js";
import { twoSum2 } from "./patterns/two-pointer/two-sum-2/twoSum2.js";
import { subArraySumEqualsk } from "./patterns/prefix-sum/subArraySumEqualsK.js";

console.log(twoSum2([2, 7, 11, 15], 9)); // Output: [1, 2]
console.log(minSumSubarraySum(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(subarraySum([1, 2, 3, 7, 5], 12)); // Output: [2, 4]
console.log(subArraySumEqualsk([1, 2, 3], 3)); // Output: 2
