//if..else
//if 의 차이

let winnings = 0;
for (let die = 0; die < hand.length; die++) {
  let face = hand[die];
  if (bets[face] > 0) winnings = winnings + bets[face];
  //yes => winnings = winnings + bets[face]
  //no  => 다시 for loop 으로 돌아가서 die < hand.length => die++ => face=hand[die] => if 문으로 돌아감
}
funds = funds + winnings;
