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
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); //2
}
console.log(x); //2