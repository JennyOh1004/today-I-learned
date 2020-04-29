// //1. 직삼각형 n=3

// function triangle3(n) {
//   let temp = 3;
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += " ";
//     }
//     for (let k = 0; k < temp; k++) {
//       str += "*";
//     }
//     console.log(str);
//     if (i < n) {
//       temp--;
//     }
//   }
// }
// triangle3(3);

//2. 직삼각형 n=5

function triangle5(n) {
  let temp = n;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let k = 0; k < temp; k++) {
      str += "*";
    }
    console.log(str);
    if (i < n) {
      temp--;
    }
  }
}
triangle5(5);
