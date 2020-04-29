function clock(h, m) {
  // 1. 몇 시(0일경우 24시라고 생각함) 몇분을 총 몇분인지 바꾼다.
  if (h === 0) {
    h = 24;
  }
  let totalMin = h * 60 + m;
  // 10* 60 + 10 = 610
  // 2. 총 몇분인지 구한 값에서 45분을 뺀다.
  totalMin = totalMin - 45;

  // 610 - 45 = 565
  // 3. 다시 몇시(24시면 0으로 바꿔준다) 볓분으로 바꿔준다.
  let resultHour = totalMin / 60;
  if (resultHour === 24) {
    resultHour = 0;
  }

  console.log(resultHour, " ", totalMin % 60);
  // 565/60 = 9 시
  // 565 % 60 = 25분
}
clock(23, 40);
