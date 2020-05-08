//각각 따로 있는 배열을 객체로 결합하기 !!!

//ex 1.
const items = ["widget", "gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i] }));
console.log(cart);

//ex 2.
const names = ["jenny", "jerry"];
const ages = [30, 32];
const list = names.map((x, i) => ({ name: x, age: ages[i] }));
console.log(list);

//ex 3.
const fruits = ["strawberry", "blueberry", "kiwi", "banana"];
const counts = [1, 2, 3, 4];
const shoppingList = fruits.map((x, i) => ({ name: x, count: counts[i] }));
console.log(shoppingList);

//ex 4.
const furnitures = ["desk", "chair", "cabinet", "couch", "bed"];
const prices = [100, 200, 300, 100, 400];
const list = furnitures.map((x, i) => ({ name: x, price: prices[i] }));
console.log(list);
