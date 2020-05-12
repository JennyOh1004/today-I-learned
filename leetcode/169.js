//배열중에 가장 많은 숫자 찾기
//1. 배열 각각 돌아
//2. 객체 만들어줘서

// function majorityElement(nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       obj[nums[i]] = obj[nums[i]] + 1;
//     } else {
//       obj[nums[i]] = 1;
//     }
//     // if (obj[nums[i]] > nums.length / 2)
//     return nums[i];
//   }
// }
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

function majorityElement(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }

    if (obj[nums[i]] > nums.length / 2) {
      //length / 2 한것보다 더 많이 나타난다.
      //length / 2 한것보다 더 많은 경우의 수를 리턴한다.
      return nums[i];
    }
  }
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
