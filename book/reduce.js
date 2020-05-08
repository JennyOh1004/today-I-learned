//reduce 는 누적값을 주고 배열에 들어있는 숫자를 더하거나
//평균을 구하여 배열을 값 하나로 줄이는 동작

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => (a += x), 0); //누적값 0으로 시작
console.log(sum);

//a => accumulator 누적값
//x => 현재 index, 배열 자체

const arr1 = [1, 2, 3, 4, 5];
const sum1 = arr1.reduce((a, i) => (a += i), 0); //누적값 0으로 시작
console.log(sum1);

const arr2 = [1, 2, 3];
const sum2 = arr2.reduce((a, i) => (a *= i), 1); //누적값 1로 시작 //배열 값 모두 곱한다
console.log(sum2 / arr2.length); //배열값에 따른 평균을 구한다
