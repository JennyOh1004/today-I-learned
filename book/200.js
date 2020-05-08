//hoisting example

//ex. 1
if (x !== 3) {
  console.log(y); //undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); //5
}
if (x === 3) {
  console.log(y); //5
}

//ex. 2
//var 로 새 변수를 만들수 없고 let 으로 가능했던 변수 숨김도 불가능
//블록안에서 두번째 var을 썼지만 변수 x는 하나뿐이다!!

var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); //2
}
console.log(x); //2
