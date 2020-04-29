//TwoSum

//Given nums = [2, 7, 11, 15], target = 9,
//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

//Given an array of integers,
//return indices of the two numbers
//such that they add up to a specific target.
//You may assume that each input would have
//exactly one solution, and you may not use the
//same element twice.

//문제: 문제입력은 nums(array)와 target(하나의 숫자)가 들어온다.
//문제핵심: nums 배열에 있는 숫자중 2개를 사용하여 target 해당하는 숫자를 만드는것.
//문제출력: nums 배열의 몇번째 인덱스[index]를 합쳐야 하는지 순서대로 표기.

// ex) nums[1,2,3,4] target => 3
// output => [0,1]

// ex) nums[1,2,3,4] target => 4
// output => [0,2]

//해결방안 찾기: 삽입정렬가ㅗ 비슷한 방법으로 loop 를 돌리면서 2개 숫자의 합으로 나올수있는
//경우의 수들을 구해보다가 맞는경우 즉시 리턴.

//code

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
twoSum([1, 2, 3, 4], 4);

let twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
twoSum([1, 2, 3, 4], 3);

let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

twoSum([1, 2, 3, 4], 4);
