//function hoisting
//only function declaration => hoisting (o)

f(); //f
function f() {
  console.log("f");
}

//hoisting(x)
//function expression => hoisting(x)
f();
let f = function () {
  console.log("f");
};
