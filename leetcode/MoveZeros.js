//Move Zeros
//Given an array nums, write a function to move all 0's to the end of it
//while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

//문제: 숫자가 들어있는 배열이 주어지는데, 그 배열 안에서 0은 뒤로 빼주고 나머지 숫자들은 그 자리 그대로
//인덱스 처음으로 나열해주는것,

//문제핵심: 제자리를 유지할것, 따로 정렬 필요없음.
//two-pointer?

//문제해결방안:
// 1. 0이 아닌 숫자들을 담아주기 위해서 변수 필요. 인덱스 위치 정해주기 위해서.
// 2. 배열을 돌기 위해서 for loop 이 필요.
// 3. if 조건문 필요. 0 이 아닌 숫자들을 걸러내야하기때문에.
// 4. another for loop 필요. 나머지 남은 숫자들 0 값들을 채워주기 위해서.
// 5. nums 로 다시 리턴해준다.

let moveZeros = function (nums) {
  let index = 0; //0이 아닌 숫자들을 인덱스 [0]자리에 두기 위해 필요한 변수

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //각 수가 0이 아니라면
      nums[index++] = nums[i]; //인덱스 0번째 자리가 처음으로 들어오고, 그다음 1씩 증감하면서 자리 채워준다.
    }
  }
  for (let i = index; i < nums.length; i++) {
    //남아있는 0들의 배열을 채워주기 위한것.
    nums[i] = 0; // ?
  }
  return nums;
};

moveZeros([0, 1, 0, 3, 12]);

let moveZeros = function (nums) {
  let index = 0; //use this variable because we modify the input array in place.

  for (let i = 0; i < nums.length; i++) {
    //iterate each of numbers
    if (nums[i] !== 0) {
      //if each of the number is not 0
      nums[index] = nums[i]; //it places the index 0
      index++; //it keeps incrasing this index variable
    }
  }
  for (let i = index; i < nums.length; i++) {
    //another for loop for the filling the rest of the input array.
    nums[i] = 0; //with zeros in place.
  }
  return nums; //return nums
};

moveZeros([0, 1, 0, 3, 12]); // [1,3,12,0,0]

let moveZeros = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
moveZeros([0, 1, 0, 3, 12]);

let moveZeros = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
moveZeros([1, 0, 2, 3, 0, 3, 2]);
