// function defangIPaddr(address) {
//   let newAddress = address.split(".").join("[.]");

//   console.log(newAddress);
// }
// defangIPaddr("1.1.1.1");

function defangIPaddr(address) {
  return address.split(".").join("[.]");
}
console.log(defangIPaddr("1.1.1.1"));
