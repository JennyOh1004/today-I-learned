function quadrant(x, y) {
  if (x > 0 && y > 0) {
    console.log("1");
  } else if (x < 0 && y > 0) {
    console.log("2");
  } else if (x < 0 && y < 0) {
    console.log("3");
  } else if (x > 0 && y < 0) {
    console.log("4");
  }
}
quadrant(-9, 2);
