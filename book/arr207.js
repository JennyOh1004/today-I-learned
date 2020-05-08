//push 끝에 추가
//pop 끝에 삭제
//unshift 맨앞에 추가
//shift 맨앞에 삭제

const arr = ["b", "c", "d"];
arr.push("e"); //[ 'b', 'c', 'd', 'e' ]
console.log(arr);
arr.pop(); //[ 'b', 'c', 'd' ]
console.log(arr);
arr.unshift("a"); //['a', 'b', 'c', 'd' ]
console.log(arr);
arr.shift(); //[ 'b', 'c', 'd' ]
console.log(arr);
