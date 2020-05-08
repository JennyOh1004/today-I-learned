//객체 프로퍼티 키를 배열로 가져와야할때
//Object.keys is used for returning enumerable
//properties of a simple array.

let obj = {
  name: "jenny",
  age: 30,
};

console.log(Object.keys(obj));

let fruits = {
  name: "strawberry",
  count: 5,
};

console.log(Object.keys(fruits));
