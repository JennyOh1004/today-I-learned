//1. 인풋 들어온다
//2. 그 숫자가 짝수라면 /2 해서 몫을 얻는다
//3. 그 누적수가 홀수라면 -1 해서 몫을 얻는다
//4. 값이 0이 될때까지 반복해서 계산한다.

//while => 몇번 반복될지 모를때
//for => 몇번 반복될지 알때

// function numberOfSteps(num) {
//   for (let i = 0; i < num; i++) {
//     if (num % 2 === 0) {
//       num = num / 2;
//     } else {
//       num = num - 1;
//     }
//     console.log(num);
//   }
//   return num;
// }
// numberOfSteps(14);

// function numberOfSteps(num) {
//   let count = 0;
//   while (num) {
//     if (num % 2 === 0) {
//       num = num / 2;
//     } else {
//       num = num - 1;
//     }
//     count++;
//   }
//   return count;
// }

// console.log(numberOfSteps(14));

//시간복잡도 - O(n)
//공간복잡도 - N(1)

//count 변수 만들어주기
function numberOfSteps(num) {
  let count = 0;
  while (num) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    count++;
  }
  return count;
}
console.log(numberOfSteps(14));
