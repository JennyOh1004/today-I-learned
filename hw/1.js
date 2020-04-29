//1. 사각형 i=3, j=5 찍기

// function square3(n) {
//   let temp = 1;
//   for (let i = 0; i < n; i++) {
//     let str = "";

//     for (let j = 0; j < n * 2 - 1; j++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }
// square3(3);

//2. 사각형 i=5, j=5 찍기
function square5(n) {
  let temp = 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}
square5(4);
