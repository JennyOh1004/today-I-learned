//Reverse integer
//Given a 32-bit signed integer, reverse digits of an integer.

//ex:  123 ->  321
//    -123 -> -321
//      90 ->   09

//문제: 정수를 뒤집어서 출력 (32비트 넘어가면 0을 리턴)
//문제핵심: negative 숫자가 트릭키이다. 그래서 Math.sign()을 사용해야한다.
//해결방안:
//1. 우선 number을 string 으로 바꿔준다. toString()
//2. 바뀐 string을 reverse로 뒤집어준다.
//3. string을 다시 number로 바꿔준다.
//4. sign 은 정확하게 있어야한다. 마이너스 sing.
//5. 그래서 Math.sign()을 사용해준다.

let reverseInteger = function(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(reversed);
};
reverseInteger([1, 2, 3]);

let reverseInteger = function(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(reversed);
};
