//Single Number!
//Hash Table

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// 반복되는거 제외하고 하나만 나오는거 프린트하기

//문제: 정수가 들어있는 배열을 준다. 그리고 그 배열을 각각 돌면서 반복되는 두 수가 있고 하나만 있는 수가 있다.
//반복되는 수는 제외하고 하나만 있는 수만 output 되게 한다.

//문제핵심: xor 을 이용해서 문제를 푼다. 그렇게 해야 쓸데없는 메모리를 사용안하기 때문이다.

//문제 해결방안:
//1.각각 배열을 돌아야 하니까 for loop 을 사용한다.
//2. js 에서 xor 을 사용하기 위해서는 ^ 를 사용한다.

// Input: [2,2,1]
// Output: 1

// Input: [4,1,2,1,2]
// Output: 4

let singleNumber = function (nums) {
  let n = nums.length,
    result = 0;

  for (let i = 0; i < n; i++) {
    result = result ^ nums[i];
  }
  return result;
};

singleNumber([2, 2, 1]);

let singleNumber = function (nums) {
  let n = nums.length,
    result = 0;
  for (let i = 0; i < n; i++) {
    result = result ^ nums[i];
  }
  return result;
};

singleNumber([2, 2, 1]);

let singleNumber = function (nums) {
  let n = nums.length,
    result = 0;

  for (let i = 0; i < n; i++) {
    result = result ^ nums[i];
  }
  return result;
};
singleNumber([2, 2, 4, 1, 1]);

let singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    esult ^= nums[i];
  }
  return result;
};
singleNumber([2, 2, 4, 1, 1]);

//given non-empty array.
//같은거 두개 있고, except one.
//fine one

//without using memory

//[1,2,2,4,4]
//[1]

let singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};
singleNumber([2, 2, 4, 1, 1]);
