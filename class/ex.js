//10보다 작은수 찾기

function find(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(find([3, 5, 15, 7, 5]));

//10 보다 큰수 찾기
function find(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(find([3, 5, 15, 7, 5]));
