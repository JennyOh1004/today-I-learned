//1.찾을수 없으면 return -1
//2. 찾을수 있으면 return index

function firstUniqChar(str) {
  let s = str.split("");
  let obj = {};

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
console.log(firstUniqChar("loveleetcode"));
