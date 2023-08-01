class Person {
    name;
    age;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`A pessoa de nome ${this.name} está falando`);
    }
  }
  
  class User extends Person {}
  
  const person1 = new User('Luara', 28);
  console.log(person1);
  person1.speak();
  
  const user1 = new User('Maria', 34);
  console.log(user1);
  user1.speak();

  