function multiplication(n) {
  for (let i = 1; i < 10; i++) {
    let multi = n * i;
    console.log(`${n} * ${i} = ${multi}`);
  }
}

multiplication(2);
//1~9
//let i = 1 ==> 1부터
//i < 10    ==> 9까지
//i < 11    ==> 10까지
