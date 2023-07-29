class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`A pessoa de nome ${this.name} está falando.`);
  }
}

class User extends Person {
  speak() {
    super.speak();
    console.log('Essa pessoa é uma usuária.');
  }
}

const user1 = new User('Luara', 28)
user1.speak();