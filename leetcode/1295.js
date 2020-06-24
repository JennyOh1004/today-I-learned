//even num 찾기
//return how many of them contain an even number of digits.

function findNumbers(nums) {
  let n = nums.toString().split(",");
  let digits = 0;
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    digits = n[i].length;
    // console.log(digits);
    if (digits % 2 === 0) {
      arr.push(digits);
    }
  }
  return arr.length;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));
