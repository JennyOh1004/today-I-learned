//delete

const arr = [1, 2, 3, 4, 5];
delete arr[2];
arr.map((x) => 0);
console.log(arr); //[0,0, undefined, 0,0]
