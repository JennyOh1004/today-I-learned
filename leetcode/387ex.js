//1.글자를 배열로 만든다
//2. 배열을 돈다
//3. 반복되는 글자가 없는 위치를 찾는다
//4. 반복되는 글자가 첫 인덱스에 없으면 0 출력
//5. 반복되는 글자가 있으면 계속 다음으로 넘어가고
//반복 되는 글자 찾을때까지 ++
//6. 아예 글자가 없는경우 -1

function firstUni(str) {
  let obj = {};
  let s = str.split("");

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) {
      obj[s[i]] = 0;
    }
    obj[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUni("loveleetcode"));
