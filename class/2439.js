function a(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        result = result + " ";
      } else {
        result = result + "*";
      }
    }
    result = result + "\n";
  }
  console.log(result);
}
a(5);
