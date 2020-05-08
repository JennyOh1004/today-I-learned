//indexOf() //배열 앞에서 부터 찾음
//lastIndexOf() //배열 뒤에서 부터 찾음
//일치하는걸 찾지 못하면 -1 반환

const o = {
  name: "jenny",
};

const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

arr.indexOf(5); //1
arr.lastIndexOf(5); //5
arr.indexOf("a"); //2
arr.lastIndexOf("a"); //2
arr.indexOf({ name: "jenny" }); //-1
arr.indexOf(o); //3
arr.indexOf([1, 2]); //6
arr.indexOf("9"); //7
arr.indexOf("a", 5); //-1
arr.indexOf(5, 5); //5
