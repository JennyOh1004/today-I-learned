//모래시계 n=3

// function clock3(n) {
//   let temp = n;
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
//       temp = temp - 2;
//     } else {
//       temp = temp + 2;
//     }
//   }
// }

// clock3(3);

//모래시계 n=5

function clock5(n) {
  let temp = n;
  for (let i = 0; i < n; i++) {
    let str = "";
    let str1 = "";
    for (let j = 0; j < temp; j++) {
      str = str + "*";
    }
    for (let k = 0; k < n - temp / 2; k++) {
      str1 = str1 + " ";
    }
    console.log(str1, str, str1);
    if (i < n / 2 - 1) {
      temp = temp - 2;
    } else {
      temp = temp + 2;
    }
  }
}
clock5(9);
