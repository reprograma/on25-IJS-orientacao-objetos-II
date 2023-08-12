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
