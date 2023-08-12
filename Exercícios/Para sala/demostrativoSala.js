/*class Person {
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

const person1 = new User("Luara", 28);
console.log(person1);
person1.speak();

const user1 = new User("Maria", 34);
console.log(user1);
user1.speak();*/

//segundo exmplo
/*class Animal {
  type = "animal";
  name;

  constructor(name) {
    this.name = name;
  }

  present() {
    console.log(`${this.name} é um ${this.type}.`);
  }
}

class Dog extends Animal {//subscreve a class
    type = "cachorro"
}

const animal1 = new Animal("Kissa");
animal1.present(); // Aslam é um animal.

const dog1 = new Dog("Aslam");
dog1.present(); // Aslam é um animal.

console.log(dog1 instanceof Dog)
console.log(dog1 instanceof Animal)*/
//exemplo 3




//exemplo 4
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
    email;
    password;
  
    constructor(name, age, email, password) {
      super(name, age);
      this.email = email;
      this.password = password;
    }
  
    speak() {
      console.log(`A usuária de nome ${this.name} está falando.`);
    }
  }
  
  class Student extends Person {
    email;
  
    constructor(name, age, email) {
      super(name, age);
      this.email = email;
    }
  
    speak() {
      console.log(`A estudante de nome ${this.name} está falando.`);
    }
  }
  
  const person1 = new Person('Bianca', 20);
  person1.speak(); // A pessoa de nome Bianca está falando.
  
  const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
  user1.speak(); // A usuária de nome Luara está falando.
  
  const student1 = new Student('Maria', 36, 'maria@hotmail.com');
  student1.speak(); // A estudante de nome Maria está falando.
  