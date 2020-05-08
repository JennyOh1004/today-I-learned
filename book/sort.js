const arr = [
  {
    name: "suzan",
  },
  {
    name: "jim",
  },
  {
    name: "trevor",
  },
  {
    name: "amanda",
  },
];
arr.sort((a, b) => a.name > b.name); //알파벳 정렬
arr.sort((a, b) => a.name[1] < b.name[1]); //두번째 글자의 알파벳 역순 정렬
console.log(arr);
