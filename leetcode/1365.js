function smallerNumbersThanCurrent(nums) {
  let n = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j != i && nums[j] < nums[i]) {
        count++;
      }
    }
  }
  return count;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
