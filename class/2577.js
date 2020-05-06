function findNumbers(arr) {
  let obj = {};
  let num = arr.reduce((a, b) => a * b);
  num = num.toString().split("");
  console.log(num);

  for (let i = 0; i < num.length; i++) {
    if (obj[num[i]]) {
      obj[num[i]] = obj[num[i]] + 1;
    } else {
      obj[num[i]] = 1;
    }
  }
  for (let j = 0; j < 10; j++) {
    if (obj[j]) {
      console.log(obj[j]);
    } else {
      console.log(0);
    }
  }
}
findNumbers([150, 266, 427]);

//3수의 곱
//그 나온 수의 갯수를 찾는다
//인덱스에 위치마다 갯수를 더 해준다
