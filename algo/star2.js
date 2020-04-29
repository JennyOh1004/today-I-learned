// function star2(n) {
//   for (let i = 5; i <= 0; i--) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result = result + "*";
//     }
//     console.log(result);
//   }
// }
// star2(5);

// function a(n) {
//   for (let i = n; i > 0; i--) {
//     let result = "";
//     for (let j = i - 1; j > 0; j--) {
//       result = result + "*";
//     }
//     console.log(result);
//   }
// }
// a(5);

function a(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result = result + " ";
    }
    for (let k = 1; k <= i; k++) {
      result = result + "*";
    }
    result = result + "\n";
  }
  console.log(result);
}
a(5);
