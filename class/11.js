//큰수 찾기

// function maxNum(arr) {
//   let num = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//       num = arr[i];
//     }
//   }
//   return num;
// }
// console.log(maxNum([1, 2, 6, 3, 8, 9]));

//작은수 찾기

function minNum(arr) {
  let num = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      num = arr[i];
    }
  }
  return num;
}
console.log(minNum([4, 7, 9, 3, 1, 2]));

//배열의 합

function sum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = num + arr[i];
  }
  return num;
}
console.log(sum([4, 7, 9, 3, 1, 2]));
