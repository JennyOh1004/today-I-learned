// //역피라미드 n=3

// function pyramidSecond(n) {
//   let temp = n;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str = str + " ";
//     }
//     for (let k = 0; k < temp; k++) {
//       str = str + "*";
//     }
//     console.log(str);
//     if (i < n) {
//       temp = temp - 2;
//     }
//   }
// }
// pyramidSecond(7);

//역피라미드 n=5

// function pyramidSecond5(n) {
//   let temp = n * 2 - 1;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str = str + " ";
//     }
//     for (let k = 0; k < temp; k++) {
//       str = str + "*";
//     }
//     console.log(str);
//     if (i < n) {
//       temp = temp - 2;
//     }
//   }
// }
// pyramidSecond5(10);

function pyramidSecond5(n) {
  let temp = n * 2 - 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str = str + " ";
    }
    for (let k = 0; k < temp; k++) {
      str = str + "*";
    }
    console.log(str);
    if (i < n) {
      temp = temp - 2;
    }
  }
}
pyramidSecond5(5);
