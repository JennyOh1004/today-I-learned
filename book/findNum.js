//10보다 큰수 찾기

function find(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      num.push(arr[i]);
    }
  }
  return num;
}
console.log(find([1, 5, 7, 9, 10, 15, 19]));

//10보다 작은수 찾기

function find1(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      num.push(arr[i]);
    }
  }
  return num;
}
console.log(find1([1, 5, 7, 9, 10, 15, 19]));
