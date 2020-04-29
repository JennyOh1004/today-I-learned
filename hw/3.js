//3. 피라미드 n=3

// function pyramid3(n) {
//   let temp = 1;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n - i; j++) {
//       //0,1,2 < 3,2,1 => 0,1
//       str += " ";
//     }
//     for (let k = 0; k < temp; k++) {
//       str += "*";
//     }
//     console.log(str);
//     if (i < n) {
//       temp = temp + 2;
//     }
//   }
// }
// pyramid3(3);

// function pyramid3(n) {
//     let temp = 1;
//     for (let i = 0; i < n; i++) {
//       console.log(temp);
//       if (i < n) {
//         temp = temp + 2;
//       }
//     }
//   }
//   pyramid3(3);

// 피라미드 n=5

function pyramid5(n) {
  let temp = 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < temp; k++) {
      str += "*";
    }
    console.log(str);
    if (i < n) {
      temp = temp + 2;
    }
  }
}
pyramid5(3);
