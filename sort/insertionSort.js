//insertionSort
//삽입정렬
//앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여
//자신의 위치 찾아 삽입.
//Binary insertion sort uses binary search to find the proper location
//to insert the selected item at each iteration.

//[5,6,1,2,4,3]
//   ^
//[5,6,1,2,4,3]
//     ^
//[1,5,6,2,4,3]
//       ^
//[1,2,5,6,4,3]
//         ^
//[1,2,4,5,6,3]
//           ^
//[1,2,3,4,5,6]

//1.배열(array)를 받는 함수 (insertionSort)를 만들자.
//2.일단 뽑을 숫자 위치를 선택할 변수 i가 필요하다.
//3.뽑은 숫자 값을 저장할 변수(temp)도 필요하다.
//4.뽑은 숫자를 알맞은 위치에 넣을때 사용할 변수 j도 필요하다.

//1.function을 만들어준다. 매개변수로 array 를 넣어준다
//2.뽑을숫자 위치 넣을 변수, 뽑은숫자 저장할 변수, 뽑은 숫자 알맞은 위치 넣어줄 변수필요
//3.각 array 돌기 위해서 for 문이 필요하다
//4.각 새로운 숫자를 index 별로 하나씩 뽑아준다 = temp
//5.또 for 문 = 선택한 숫자를 이미 정렬된 숫자들과 비교하여 넣을 위치 찾는과정,
//선택한 숫자가 정렬된 숫자보다 작으면
//6.한칸씩 뒤로 밀어낸다
//7.마지막 빈칸에 선택한 숫자를 넣어준다. = j

// let insertionSort = function(array) {
//   let i = 1,
//     j,
//     temp;
//   for (i; i < array.length; i++) {
//     temp = array[i]; //새로운 숫자 선택
//     for (
//       j = i - 1;
//       j >= 0 && temp < array[j];
//       j--
//     ) //선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정,
//     // 선택한 숫자가 정렬된 숫자보다 작으면
//     {
//       array[j + 1] = array[j]; //한칸씩 뒤로 밀어낸다.
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// };

// insertionSort([5, 6, 1, 2, 4, 3]);

let insertionSort = function(array) {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

insertionSort([5, 6, 1, 2, 4, 3]);

let insertionSort = function(arr) {
  let i, j, temp;
  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

let insertionSort = function(array) {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

let insertionSort = function(array) {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};
let insertionSort = function(array) {
  let i, j, temp;
  for (i = 1; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

insertionSort([5, 6, 1, 2, 4, 3]);
