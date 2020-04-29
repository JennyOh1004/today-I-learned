function small(a) {
  let arr = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a) {
      result.push(arr[i]);
    }
  }
  return result;
}
small(5);
