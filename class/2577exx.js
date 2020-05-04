function findNumber(arr) {
  let obj = {};
  let times = arr[0] * arr[1] * arr[2];
  times = times.toString().split("");
  console.log(times);

  for (let num of times) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let i = 0; i < 10; i++) {
    if (obj[i]) {
      console.log(obj[i]);
    } else {
      console.log(0);
    }
  }
}
findNumber([150, 266, 427]);
