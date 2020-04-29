// function star(n) {
//   for (let i = 1; i <= n; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result = result + "*";
//     }
//     console.log(result);
//   }
// }
// star(5);

function star(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result = result + "*";
    }
    console.log(result);
  }
}
star(5);

for (let i = 1; i <= 5; i++) {
  //가로
  let result = "";
  for (let j = 1; j <= i; j++) {
    //세로
    result = result + "*";
  }
  console.log(result);
}

// i = 1 ~> 5
1;
2;
3;
4;
5;
