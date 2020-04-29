function average() {
  let arr = [10, 65, 100, 30, 95];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 40) {
      arr[i] = 40;
    }
  }
  let sum = arr.reduce((a, b) => a + b);
  let aver = sum / arr.length;
  console.log("sum:", sum);
  console.log("average:", aver);
}

average();
