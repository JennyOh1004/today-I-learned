//Given an integer array nums, find the contiguous subarray (containing at least one number)
//which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//O(n) solution => for loop 한번만 사용하기

let maxSubArray = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    currentSum = Math.max(currentSum + currentNum, 0);

    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

let maxSubArray = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];

    currentSum = Math.max(currentSum + currentNum, 0);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

let maxSubArray = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    currentSum = Math.max(currentSum + currentNum, 0);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// if you had difficulties with this problem, just like me, then I hope it will be useful to you

// set initials
// 1.1 first value in the array.it doesn’t matter to us whether it is positive or negative
// 1.2 current - we need an intermediate positive value, because a negative value does not interest us, since -2 is always more than -5 and it means 0 + -2 > -5.
// At this point we've covered first value in the array, that's why we will move through array starting from the 1 index.
// current += nums[i] means that every time we take a new value, we will sum it with the past current value. This will help us discard lower values in the next step.
// max = Math.max(max, current) means that we choose only the highest value (previous max or current).
// current = Math.max(current, 0) means that if the value was negative, then we throw it away. Why? Because it makes no sense to summarize the negative values, they simply do not interest us. The previous step is enough to compare negative values. There we will choose the minimum negative value (if it is the case i.e [-10, -3, -5, -2, -6] will return only -2 because it is the highest value from the negative ones.
// const maxSubArray = nums => {
//     let max = nums[0];
//     let current = Math.max(max, 0);

//     for (let i = 1; i < nums.length; i += 1) {
//         current += nums[i];
//         max = Math.max(max, current);
//         current = Math.max(current, 0);
//     }

//     return max;
// };
