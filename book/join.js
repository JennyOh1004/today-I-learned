const arr = [1, null, "hello", "world", true, undefined];
// delete arr[3];

arr.join(); //, 쉼표로 구분 (기본)
arr.join(""); //빈열이 추가 되서 배열안에 데이타가 다 붙는다
arr.join("--"); //--로 구분
