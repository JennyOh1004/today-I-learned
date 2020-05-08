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
console.log(arr.find((o) => o.id === 5)); //{id: 5, name: 'jenny'}
console.log(arr.find((o) => o.name === "jerry")); //{id:7, name: 'jerry'}
console.log(arr.find((o) => o.name === 3)); //undefined
