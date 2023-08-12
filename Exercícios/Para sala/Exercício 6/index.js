<<<<<<< HEAD
class Animal {
    nome;
    idade;
  
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
   mostrarCaracteristicas() {
     console.log(`o nome ${this.nome} tem ${this.idade}`);
   }
  }
  
  const kissa = new Animal("Kissa", 17);
  kissa.mostrarCaracteristicas();
  
  class Gato extends Animal {
    corPelo;
    porte;
  
    constructor(nome, idade, corPelo, porte) {
      super(nome, idade);
      this.corPelo = corPelo;
      this.porte = porte;
    }
  }
  
  const keta = new Gato("Keta", 10, "preto", "pequeno");

  keta.mostrarCaracteristicas();

  console.log(keta)
=======
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
>>>>>>> a846e22c0633d363495d431f20260788415d5397
