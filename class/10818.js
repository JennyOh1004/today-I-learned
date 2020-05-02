//배열에서 최소값 구하기

function min(arr) {
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      num = arr[i];
    }
  }
  return num;
}
console.log(min([20, 10, 35, 30, 7]));

//배열에서 최대값 구하기

function max(arr) {
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}
console.log(max([20, 10, 35, 30, 7]));
