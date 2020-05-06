//숫자가 10개 들어온다
//그 수를 42로 나누고 나눈 수의 나머지가 몇개가 다른지 갯수를 찾는다

function diffNum(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] % 42;

    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }
  console.log(Object.keys(obj).length);
}
diffNum([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]);
