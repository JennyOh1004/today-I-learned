function times(a, b) {
  let b1 = b
    .toString()
    .split("")
    .map((b) => b * a)
    .reverse();
  console.log(b1);
  let a1 = a * b;
  console.log(a1);
}
times(472, 385);
