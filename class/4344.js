function avg(arr) {
  let totalNum = 0;
  let totalAvg;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    totalNum = totalNum + arr[i];
    console.log("totalNum", totalNum); //350
    totalAvg = totalNum / arr.length;
    console.log("total", totalAvg); //70

    console.log("arr", arr[i]);
    if (arr[i] > totalAvg) {
      count = count + 1;
    }
  }
  return (100 / arr.length) * count;
}
console.log(avg([50, 50, 70, 80, 100]));
