function secondNum(arr) {
  let first = arr[0];
  let second = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= first) {
      second = first;
      first[i] = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondNum([20, 30, 10]));

//   let result = arr.sort(function (a, b) {
//     return a - b;
//   });

function secondNum(arr) {
  let first = Math.max.apply(null, arr);
  firstIndex = arr.indexOf(first);
  arr[firstIndex] = 0; //해당 인덱스 값을 0으로 초기화 해준뒤 다시 배열 최대값 찾아서 리턴

  let secondMax = Math.max.apply(null, arr);
  return secondMax;
}
secondNum([20, 30, 10]);

function second(arr) {
  let first = Math.max.apply(null, arr); //40
  firstIndex = arr.indexOf(first); //2
  arr[firstIndex] = 0;

  let secondMax = Math.max.apply(null, arr); //두번째로 큰수를 다시 찾아서
  return secondMax; //리턴해줌
}
second([20, 30, 40, 10]);

function second(arr) {
  let first = Math.max.apply(null, arr); //40
  firstIndex = arr.indexOf(first); //2
  arr[firstIndex] = 0;

  let secondMax = Math.max.apply(null, arr);
  console.log(secondMax);
}
second([10, 20, 40, 30]);
