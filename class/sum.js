function revise(obj) {
  // arr.push(5)
  return { b: 5, ...obj };
}

console.log(revise({ a: 1, b: 2, c: 3 }));
