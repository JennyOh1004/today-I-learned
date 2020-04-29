//1. hour => min 으로 바꿔서 h * 60
//2. - 45 min
//3. 다시 분으로 바꿔주려면 / 60

//4. 만약 h === 0 이면
//24 시로 꿔준다.

//5. 만약 또 시간이 24면 === 0 으로 바꿔준다.
//6. 시간 계산한것과, % 분 계산 나온거 출력하기. 나머지

function clock(h, m) {
  if (h === 0) {
    h = 24;
  }
  let totalMin = h * 60 + m;
  totalMin = totalMin - 45;

  let resultHour = parseInt(totalMin / 60);
  if (resultHour === 24) {
    resultHour = 0;
  }
  console.log(`${resultHour} : ${totalMin % 60}`);
}
clock(0, 30);
