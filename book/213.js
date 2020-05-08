class Perseon {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;
const jamie = new Person("Jamie");
juliet = new Person("Juliet");
peter = new Person("Peter");
jay = new Person("Jay");

const arr = [jamie, juliet, peter, jay];

//option 1
arr.find((p) => p.id === juliet.id); //juliet object

//option 2
arr.find(function (p) {
  return p.id === this.id;
}, juliet); //juliet 객체
