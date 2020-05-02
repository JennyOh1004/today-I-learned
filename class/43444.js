//평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다

function avg(arr) {
  let totalNum = 0;
  let totalAvg;
  let count = 0;
  let result;
  for (let i = 0; i < arr.length; i++) {
    totalNum = totalNum + arr[i];
    // console.log("totalNum", totalNum); //350
    totalAvg = totalNum / arr.length;
    // console.log("total", totalAvg); //70
  }
  for (let j = 0; j < arr.length; j++) {
    //   console.log("arr", arr[j]);
    if (arr[j] > totalAvg) {
      count = count + 1;
    }
  }
  result = (100 / arr.length) * count;
  return `${result.toFixed(3)} %`;
}
console.log(avg([50, 50, 70, 80, 100]));
