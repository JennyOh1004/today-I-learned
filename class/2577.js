function findNumbers(arr) {
  let total = 1;
  let reminder = 0;
  let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i]; //a*b*c
  }

  for (let j = 0; j < total; j++) {
    reminder = total % 10;
    num[reminder]++;
    total /= 10;

    console.log(Math.floor(reminder));
  }
  // for (let k = 0; k < 10; k++) {
  //   console.log(`숫자:${k}: ${num[k]}`);
  // }
  return Math.floor(total);
}
console.log(findNumbers([150, 266, 427]));
