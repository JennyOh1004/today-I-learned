//367. Valid Perfect Square

function isPerfectSquare(num) {
  let s = num / 4;
  if (s * s === num) {
    return true;
  } else {
    return false;
  }
}
console.log(isPerfectSquare(16));

//Math.pow(값, 제곱승)
function isPerfectSquare(num) {
  let s = Math.pow(4, 2);
  if (s === num) {
    return true;
  } else {
    return false;
  }
}
console.log(isPerfectSquare(14));
