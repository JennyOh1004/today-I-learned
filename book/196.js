//closure example
//1
let globalFunc;
{
  let blockVar = "a";
  globalFunc = function () {
    console.log(blockVar);
  };
}
globalFunc();

//2
const message = (function () {
  const secret = "I'm a secret";
  return `${secret.length}`;
})();
console.log(message);
