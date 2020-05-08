//concat
//여러요소 추가한 복사본 반환
//원본 건들지 않음

const arr = [1, 2, 3];
arr.concat(4, 5, 6);
console.log(arr);
arr.concat([4, 5, 6]);
console.log(arr);
arr.concat([4, [5, 6]]);
console.log(arr);
//원본은 변하지 않음

const arr1 = arr.concat(4, 5, 6);
console.log(arr1);
//새 변수를 만들어서 담아줘야함.
