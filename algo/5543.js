function burger() {
  let burgerPrice = [800, 700, 900];
  let drink = [198, 330];
  let set = 0;
  let total = 0;
  let result = [];

  for (let i = 0; i < burgerPrice.length; i++) {
    for (let j = 0; j < drink.length; j++) {
      set = burgerPrice[i] + drink[j] - 50;
    }
    total = Math.min(set);
    console.log("total", total);
  }
}
burger();
