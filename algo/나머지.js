function remainder(a, b, c) {
  let a1 = (a + b) % c;
  console.log(a1);
  let a2 = (a % c) + ((b % c) % c);
  console.log(a2);
  let b1 = (a * b) % c;
  console.log(b1);
  let b2 = ((a % c) * (b % c)) % c;
  console.log(b2);
}

remainder(5, 8, 4);
