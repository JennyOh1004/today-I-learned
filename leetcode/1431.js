//arr 값이 들어온다
//extra 값이 주어진다
//배열에 있는 값과 엑스트라 더한값이 5라면 t
//아니면 5보다 작다면 f

function candy(candies, extraCandies) {
  let max = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  for (let j = 0; j < candies.length; j++) {
    let sum = candies[j] + extraCandies;
    // console.log(sum);
    if (sum < max) {
      console.log("false");
    } else {
      console.log("true");
    }
  }
}
candy([12, 1, 12], 10);

//시간복잡도 - O(n)
//공간복잡도 - O(1)

function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= max);
  // console.log(max);
}
console.log(kidsWithCandies([12, 1, 12], 10));
