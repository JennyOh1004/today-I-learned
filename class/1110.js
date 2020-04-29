function cycle(initial) {
  let N = initial;
  //   let tmp = (Math.floor(N / 10) + (N % 10)) % 10;
  //   N = (N % 10) * 10 + tmp;
  //   console.log("1.", N);

  //   while (N != initial) {
  //     tmp = (Math.floor(N / 10) + (N % 10)) % 10;
  //     N = (N % 10) * 10 + tmp;
  //     console.log(N);
  //   }
  let cnt = 0;
  do {
    let tmp = (Math.floor(N / 10) + (N % 10)) % 10;
    N = (N % 10) * 10 + tmp;
    cnt++;
    console.log(N, cnt);
  } while (N != initial);

  return cnt;
}
cycle(26);
