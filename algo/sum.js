// => 1 + n 까지 합 구하기
//1. Result 변수 선언 = 0 으로 해준다
//2. for 문을 이용해서 각각의 합을 계산해준다.
//3. i 값은 1로 시작 하고 주어진 매개변수 까지 실행하도록 한다.
//4. result = result + i
//   0 = 0 + 1
//   3 = 1 + 2
//   6 = 3 + 3

function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  console.log(result);
}
sum(3);

// 1+2 = 3
// 3+3 = 6
