class Animal {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

class Cachorro extends Animal {
  corDoPelo;
  porte;

  constructor(nome, idade, corDoPelo, porte) {
    super(nome, idade);
    this.corDoPelo = corDoPelo;
    this.porte = porte;
  }
}

const aufi = new Cachorro("Aufi", 19, "branco e preto", "pequeno");
console.log(aufi);
