class Animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const a1 = new Animal("tata", 15);

class Dog extends Animal {
  corDoPelo;
  porte;
  constructor(name, age, corDoPelo, porte) {
    super(name, age);
    this.corDoPelo = corDoPelo;
    this.porte = porte;
  }
}

const d1 = new Dog("Caramelo", 3, "caramelo", "pequeno");
console.log(d1);
