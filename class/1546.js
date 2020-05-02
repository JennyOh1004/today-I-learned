function newAvg(arr) {
  let max = arr[0];
  let newTotal = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    newTotal = (arr[j] / max) * 100;
    // console.log(`newTotal: ${newTotal}`);
    result = result + newTotal;
    // console.log(result);
  }
  return result / arr.length;
}
console.log(newAvg([40, 80, 60]));
