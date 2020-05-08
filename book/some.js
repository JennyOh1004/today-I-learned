//some 은 조건에 맞는걸 찾으면 즉시 true 반환
//조건에 맞는걸 찾지 못하면 false 반환

const arr = [5, 7, 12, 15, 17];

console.log(arr.some((x) => x % 2 === 0)); //true
console.log(arr.some((x) => Number.isInteger(Math.sqrt(x)))); //false
