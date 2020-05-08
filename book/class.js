const Car = function () {
  const carProps = new WeakMap();

  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      carProps.set(this, {userGear = this._userGears[0]});
    }

    get userGear() {
      return carProps.get(this).userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`Invalid gear: ${gear}`);
      carProps.get(this).userGear =value;
    }
    shift(gear) {
      this.userGear = gear;
    }
  }
  return Car;
};
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift("D");
car2.shift("R");
console.log(car1.userGear);
console.log(car2.userGear);

// class Car{} //생성자는 의도적으로 생략 
function Car(make,model){ 
    this.make = make;
    this.model = model;
    this._userGears = ['p', 'n', 'r', 'd']
    this._userGear = this.userGears[0]
}