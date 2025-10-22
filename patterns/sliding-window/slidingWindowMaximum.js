function cleanUp(i, currentWindow, nums) {
  // remove all the indexes from currentWindow whose corresponding values are smaller than or equal to the current element
  while (
    currentWindow.length !== 0 &&
    nums[i] >= nums[currentWindow.peekBack()]
  ) {
    currentWindow.pop();
  }
}

function findMaxSlidingWindow(nums, w) {
  // if the length of input array is 1, return the input array
  if (nums.length === 1) {
    return nums;
  }

  // initializing variables
  const output = new Array(nums.length - w + 1);
  const currentWindow = new Deque();

  // iterate over the first w elements
  for (let i = 0; i < w; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // append the index of the current element to currentWindow
    currentWindow.push(i);
  }

  // appending the maximum element of the current window to the output array
  output[0] = nums[currentWindow.peekFront()];

  // iterate over the remaining input array
  for (let i = w; i < nums.length; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // remove first index from the currentWindow if it has fallen out of the current window
    if (currentWindow.length !== 0 && currentWindow.peekFront() <= i - w) {
      currentWindow.shift();
    }

    // append the index of the current element to currentWindow
    currentWindow.push(i);

    // adding the maximum element of the current window to the output array
    output[i - w + 1] = nums[currentWindow.peekFront()];
  }

  // return the array containing output
  return output;
}
