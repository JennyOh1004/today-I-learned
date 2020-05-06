// function diffNum(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let reminder = arr[i] % 42;
//     // console.log(reminder);
//     obj[reminder] = obj[reminder] ? obj[reminder] + 1 : 1;
//     console.log(obj);
//   }
//   console.log(Object.keys(obj).length);
// }
// diffNum([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]);

// key값 저장하는 방법
// 1. 초기화할때 저장한다.
let obj = {
  a: "apple",
  "apple - good": 2,
};
// - 초기화 할때 저장하면 좋겠지만, 보통 어떤 연산을 통해서
// key, value를 저장해야하므로 사용 빈도수가 드물다.

// 2. .연산자를 사용해서 저장한다. (읽는 방법이 될수도있음)
obj.b = "banana";
// - key값이 띄어쓰기 없는 알파벳이 아닌 경우는 사용 불가능하다.
// obj.banana - good = 2;
// obj.3 = 9;

// 3. []연산자를 사용해서 저장한다. (읽는 방법이 될수도있음)
// - 모든 key값 사용 가능
obj["banana - good"] = 2;
obj["3"] = 9;
