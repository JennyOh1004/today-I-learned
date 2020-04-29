function leapYear(year) {
  if (year % 400 === 0) {
    console.log("윤년");
  } else if (year % 100 === 0) {
    console.log("윤년 아님");
  } else if (year % 4 === 0) {
    console.log("윤년");
  } else {
    console.log("윤년아님");
  }
}

leapYear(2012);
