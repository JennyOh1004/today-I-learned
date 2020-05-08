//filter
//필요한 요소만 반환한다!!

const users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

const newUser = users.filter((g) => g.group === "admin");
console.log(newUser);

const newName = users.filter((n) => n.name === "Adam");
console.log(newName);

const newId = users.filter((i) => i.id === 11);
console.log(newId);
