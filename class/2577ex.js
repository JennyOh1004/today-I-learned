function findNumber(arr) {
  let obj = {};
  let num = arr.reduce((a, b) => a * b);
  num = num.toString().split("");
  console.log(num);

  for (let i = 0; i < num.length; i++) {
    let target = num[i];
    // if (obj[target]) {
    //   obj[target] = obj[target] + 1;
    // } else {
    //   obj[target] = 1;
    // }
    // 삼항 연산자 (if문을 간결하게 쓰기위한것 )
    // 조건 ? 참일떄 : 거짓일떄

    // if(조건) {참일때}
    // else {거짓일 떄}

    obj[target] ? (obj[target] = obj[target] + 1) : (obj[target] = 1);
    obj[target] = obj[target] ? obj[target] + 1 : 1;
  }

  for (let j = 0; j < 10; j++) {
    if (obj[j]) {
      console.log(obj[j]);
    } else {
      console.log(0);
    }
  }
}
findNumber([150, 266, 427]);
