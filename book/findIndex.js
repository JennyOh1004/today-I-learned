const arr = [
  {
    id: 5,
    name: "jenny",
  },
  {
    id: 7,
    name: "jerry",
  },
];
console.log(arr.findIndex((o) => o.id === 5)); //0
console.log(arr.findIndex((o) => o.name === "jerry")); //1
console.log(arr.findIndex((o) => o.name === 3)); //-1
