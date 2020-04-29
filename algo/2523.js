// function a(n) {
//   let result = "";
//   let num = 2 * n - 1;
//   for (let i = 1; i < num; i++) {
//     for (let j = 1; j < num; j++) {
//       if (j <= num - i) {
//         result = result + " ";
//       } else {
//         result = result + "*";
//       }
//     }
//     result = result + "\n";
//   }
//   console.log(result);
// }
// a(3);

// function a(n) {
//   let result = "";
//   for (let i = -n; i <= n; i++) {
//     let k = 0;
//     console.log(i);
//     for (let j = 0; j < n - Math.abs(i); j++) {
//       result = k < Math.abs(i) ? " " : "*";
//       console.log(result);
//     }
//   }
//   result = result + "\n";
// }
// a(3);

function star(n) {
  let temp = 1;
  for (let i = 0; i < n * 2 - 1; i++) {
    // console.log(temp);
    let str = "";
    for (let j = 0; j < temp; j++) {
      str = str + "*";
    }
    console.log(str);
    if (i < n - 1) {
      temp++;
    } else {
      temp--;
    }
  }
}
star(3);
