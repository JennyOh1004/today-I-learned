function compareMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let times = arr[i] * arr[j];
      max = times > max ? times : max;
    }
  }
  console.log(max);
}
compareMax([1, 2, 3]);
