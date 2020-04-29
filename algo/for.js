// function forloop(n) {
//   let temp = 1;
//   for (let i = 0; i < n * 2 - 1; i++) {
//     //어떤방법 * 몇번 => 찍을거야
//     console.log(temp); //1
//     if (i < n - 1) {
//       //i => 0,1 n-1 => 3-1= 2  ==> 0,1 < 2
//       temp++;
//     } else {
//       temp--;
//     }
//   }
// }
// forloop(3);

// function forloop(n) {
//   let temp = 1;
//   for (let i = 0; i < n * 2 - 1; i++) {
//     // console.log(temp);
//     let str = "";
//     for (let j = 0; j < temp; j++) {
//       str = str + "*";
//     }
//     console.log(str);
//     if (i < n - 1) {
//       temp++;
//     } else {
//       temp--;
//     }
//   }
// }
// forloop(3);

function star(n) {
  let temp = 1;
  for (let i = 0; i < n * 2 - 1; i++) {
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
