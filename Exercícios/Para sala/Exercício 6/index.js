class Animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  colorHair;
  size;
  constructor(name, age, colorHair, size) {
    super(name, age);
    this.colorHair = colorHair;
    this.size = size;
  }
}

let apolo = new Dog ("Apolo", 12, "brown", "medium")
console.log(apolo)