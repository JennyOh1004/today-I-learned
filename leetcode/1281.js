//1281. Subtract the Product and Sum of Digits of an Integer

//Given an integer number n, return the difference between the product of
//its digits and the sum of its digits.

//1. input 에 들어오는 숫자를 split 해서 나온 값을 곱하고
//2. split 해서 나온 값을 더한다음
//1 - 2 를 뺀 값을 구한다

function subtractProductAndSum(n) {
  let nums = n.toString().split("");
  console.log(nums);

  let times = nums.reduce((a, b) => a * b);
  console.log(times);

  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = nums[0] + nums[1] + nums[2];
  //     console.log(sum);
  //   }

  //     sum = n.reduce((c, d) => c + d, 0);
  //     console.log(sum);

  //     for (let i = 0; i < nums.length; i++) {
  //       sum = sum + nums[i];
  //       console.log(sum);
  //     }

  //   let result = times - sum;
  //   console.log(result);
}
subtractProductAndSum(234);
