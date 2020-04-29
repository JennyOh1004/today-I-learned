//Happy Number
//Hash Table

//Write an algorithm to determine if a number "n" is 'happy'
//Starting with any positive integer,
//Replace the number by the sum of the squares of its digits.
//squares = 제곱 ^
//Repeat the process until the number equals 1 or it loops endlessly in a cycle which does not include 1.
//End in 1 are happy number.

//문제: 예를 들어 19 라는 숫자를 준다.
//그럼 1과 9를 나누고 각각 수를 제곱한 다음 더해준다.
//그럼 output 은 1^ + 9^ = 1 + 81 => 82 <= 이 값이 1이 될때까지
//결과 값이 1이 될때까지 계속 이 과정을 반복 한다.

//문제 핵심: 결과 값이 1 이 나오면 true, false 면 다시 sum 으로 return 해서 계속 반복한다.

//문제 해결방안:
//1. 우선 주어진 숫자를 toString을 이용해서 string 으로 바꿔준다음,
//2. 바꾼 string을 split 으로 나눠준다.
//3. map을 사용해서 새 배열로 출력한다.
//4. reduce 를 사용해서 각각 수의 제곱을 만들어준다. 1^ + 9^ 의 제곱 => 1 + 81
//5. if 문을 이용해서 sum 의 값이 1 === true : false 를 return 한다.
//6. 하지만 count를 이용해서 계속 돌아야하는 값을 정해준다. 그래야 반복해서 돌수있기 때문이다.

//방법1

let happyNumber = function (n) {
  let result = false;
  let array = n
    .toString()
    .split("")
    .map((n) => n * n);
  let sum = array.reduce((a, b) => a + b);

  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    result = happyNumber(sum);
  }
  return result;
};
happyNumber([19]);

//function
//variables = result, array, sum
//if - t / f

let happyNumber = function (nums) {
  let result = false;
  let array = nums
    .toString()
    .split("")
    .map((nums) => nums * nums); //19 => "1", "9" => 1^, 9^
  let sum = array.reduce((a, b) => a + b); //1^ + 9^ => 1 + 81 => 82

  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    result = happyNumber(sum);
  }
  return result;
};

//방법2
//count 를 주는 방법 = 권장하진 않음
let happyNumber = function (n, count = 0) {
  result = false;
  if (count < 10) {
    let array = n
      .toString()
      .split("")
      .map((n) => n * n);
    let sum = array.reduce((a, b) => a + b, 0);

    if (sum === 1) {
      return (result = true);
    }
  } else {
    count++;
    happyNumber(sum, count);
  }

  return result;
};
happyNumber(19);

//happyNumber
//positive integer
//squares that number => sum
//repeat until find a happynumber => 1
//if false => return sum => repeat until find a happynumber

//function
//if => count =>
//number => string => split => map n * n
//sum => reduce
//if => t / f

//happyNumber
let happyNumber = function (n) {
  let result = false;
  let array = n
    .toString()
    .split("")
    .map((n) => n * n);
  let sum = array.reduce((a, b) => a + b);

  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    result = happyNumber(sum);
  }
  return result;
};

//singleNumber
// [1,1,3,3,5]
// [5] 반환하기
//xor 필요

let singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};
singleNumber([1, 1, 3, 3, 5]);

//Moves Zeros

//[1,0,2,0,4,2] 있을때
//[1,2,4,2,0,0] 0을 다 뒤로 밀고 나머지 숫자는 in place.
//copy 하지말것
//정렬하지말것
//for 두개 필요함

let moveZeroes = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
moveZeros([1, 0, 2, 0, 4, 2]);
