function diffNum(arr) {
  let obj = {};
  let reminder;
  for (let i = 0; i < arr.length; i++) {
    reminder = arr[i] % 42;
    console.log(reminder);
  }
  for (let num of reminder.toString()) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let j = 0; j < reminder.length; j++) {
    if (obj[j]) {
      console.log(obj[j]);
    } else {
      console.log(0);
    }
  }
}
diffNum([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]);
