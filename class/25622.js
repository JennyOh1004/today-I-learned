//배열에서 최대값 구하고, 최대값의 인덱스 위치를 찾는다.
function getMax(arr) {
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  console.log(arr.indexOf(num));
  return num;
}
console.log(getMax([29, 38, 12, 57, 74, 40, 85, 61]));
