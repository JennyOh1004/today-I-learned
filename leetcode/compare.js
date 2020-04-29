function jenny(a, b) {
  let result;
  if (a > b) {
    result = ">";
  } else if (a < b) {
    result = "<";
  } else {
    result = "==";
  }
  return result;
}

console.log(jenny(1, 2));
