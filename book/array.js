//array literal
const arr1 = [1, 2, 3]; //숫자로 구성된 배열
const arr2 = ["one", 1, "three"]; //비균질적 배열
const arr3 = [
  [1, 2, 3],
  ["one", 2, "three"],
]; //배열을 포함한 배열
const arr4 = [
  {
    name: "Fred",
    type: "object",
    luckyNumbers: [5, 6, 13],
  },
  [
    {
      name: "Susan",
      type: "object",
    },
    {
      name: "Anthony",
      type: "object",
    },
  ],
  1,
  function () {
    return "arrays can contail functions too";
  },
  "three",
];

//access to array element
arr1[0]; //1
arr2[2]; //1
arr3[1]; //["one", 2, "three"]
arr4[1][0]; //{
//     name: "Susan",
//     type: "object",
//   },

//length
arr1.length; //3
arr4.length; //5 (, 기준으로 끊기 )
arr4[1].length; //2

//extend length
arr1[4] = 5;
arr1; //[1, 2, 3, undefined, 5]
arr1.length; //5

//배열의 현재 길이보다 큰 인덱스에 접근하는것만으로 배열의 길이가 늘어나지 않는다

arr2[10]; //undefined => 접근만 했고 데이타를 넣어주지 않았기땜에
arr2.length; // 그대로 3

//Array 생성자
const arr5 = new Array(); //빈배열 //empty array
const arr6 = new Array(1, 2, 3); //[1,2,3]
const arr7 = new Array(2); //[undefined, undefined]
const arr8 = new Array("2"); //["2"]
