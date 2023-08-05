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
    super(nome, idade)
    this.corDoPelo = corDoPelo;
    this.porte = porte;
  }
}

const peludinho = new Cachorro ("Peludinho", 8, "preto", "médio");

console.log(peludinho.idade)