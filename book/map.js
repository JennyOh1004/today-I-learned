//map
//배열 요소를 변형한다.
//필요한 요소만 뽑아서 반환한다
//원래 값은 건들지 않는다
//새 배열을 반환한다

const cart = [
  {
    name: "widget",
    price: 9.95,
  },
  {
    name: "gadget",
    price: 22.95,
  },
];

const names = cart.map((x) => x.name); //callback function => //매개변수는 중요하지 않음!
console.log(names);

const prices = cart.map((x) => x.price);
console.log(prices);

const discountPrices = prices.map((x) => x * 0.8);
console.log(discountPrices);
