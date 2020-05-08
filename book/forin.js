//for in
//loop for object
//객체용 반복문

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in obj) {
  console.log(prop, obj[prop]);
}

const obj2 = {
  name: "jenny",
  age: 30,
};

for (let prop in obj2) {
  console.log(prop, obj2[prop]);
}
