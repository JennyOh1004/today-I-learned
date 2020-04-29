// //다이아몬드 n=3

// function diamond3(n) {
//   let temp = 1;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     let str1 = "";
//     for (let j = 0; j < temp; j++) {
//       str = str + "*";
//     }
//     for (let k = 0; k < n - 2 - temp / 2; k++) {
//       str1 = str1 + " ";
//     }
//     console.log(str1, str, str1);
//     if (i < n - 2) {
//       temp = temp + 2;
//     } else {
//       temp = temp - 2;
//     }
//   }
// }
// diamond3(3);

// function diamond5(n) {
//   let temp = 1;
//   for (let i = 0; i < n * 2 - 1; i++) {
//     console.log(temp);
//     if (i < n - 1) {
//       temp = temp + 2;
//     } else {
//       temp = temp - 2;
//     }
//   }
// }
// diamond5(3);

function diamond5(n) {
  let temp = 1;
  for (let i = 0; i < n * 2 - 1; i++) {
    let str = "";
    let str1 = "";
    for (let j = 0; j < temp; j++) {
      str = str + "*";
    }
    for (let k = 0; k < (n * 2 - 1 - temp) / 2; k++) {
      str1 = str1 + " ";
    }
    console.log(str1, str, str1);
    if (i < n - 1) {
      temp = temp + 2;
    } else {
      temp = temp - 2;
    }
  }
}
diamond5(3);
