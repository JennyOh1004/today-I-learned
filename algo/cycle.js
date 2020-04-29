// function cycle() {
//   let arr = [26, 55, 1];
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i].toString().split("");
//     console.log(num);
//   }
// }
// cycle();

// function cycle(x) {
//   let num = x.toString().split("");
//   console.log(num);
//   let sum = Number(num[0]) + Number(num[1]);
//   console.log(sum);
//   let newNum = Number(num[1] + sum.toString());
//   console.log(newNum);
// }
// cycle(26);

function cycle(x) {
  let result = false;
  let num = x.toString().split("");
  let sum = Number(num[0]) + Number(num[1]);
  console.log(sum);
  let newNum = Number(num[1] + sum.toString());
  console.log(newNum);

  //   if (newNum === 26) {
  //     return true;
  //   } else {
  //     result = cycle(newNum);
  //   }
  //   return result;
}
cycle(26);
