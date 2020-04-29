//function 만들기
//for문을 이용해서 반복적인 sum 값 계산 만들기
//i 이용해서 output 만들기

// function sum2(a, b) {
//   let n = 5;
//   let result = a + b;
//   for (let i = 1; i <= n; i++) {
//     console.log(`Case # ${i} : `, result);
//   }
// }
// sum2(1, 1);
// sum2(2, 3);
// sum2(3, 4);
// sum2(9, 8);
// sum2(5, 2);

// function sum2(a, b) {
//   let n = 5;
//   let result = a + b;

//   for (let i = 1; i <= n; i++) {
//     console.log(`Case #${i} : ${result}`);
//   }
// }
// sum2(1, 1);
// sum2(2, 3);
// sum2(3, 4);
// sum2(9, 8);
// sum2(5, 2);

// function berry(nums) {
//   // let result = nums.toString().split("");
//   // result = nums[0] + nums[1];

//   let result = nums[0] + nums[1];
//   console.log(result);

//   // for (let i = 1; i < nums.length; i++) {
//   //   console.log("index:", nums[i]);
//   // }
// }

// berry([1, 1]);
// berry([2, 3]);
// berry([3, 4]);
// berry([9, 8]);
// berry([5, 2]);

function berry(nums) {
  let index = 0;
  let result = nums[0] + nums[1];

  for (let i = 0; i < nums.length; i++) {
    index += nums[i];
  }
  console.log("index", index, "result", result);
}

berry([1, 1]);
berry([2, 3]);
berry([3, 4]);
berry([9, 8]);
berry([5, 2]);

function sum2(a, b, n = 5) {
  for (let i = 0; i < n; i++) {
    sum = a + b;
    console.log(sum);
  }
}
sum2(1, 1);
