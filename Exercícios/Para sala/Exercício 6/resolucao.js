class Animal {
    Nome;
    Idade;

    constructor(nome, idade) {
        this.Nome = nome;
        this.Idade = idade;
    }
}

// const animal1 = new Animal('Claire', 12)
// console.log(animal1)

class Cachorro extends Animal {
    CorDoPelo;
    Porte;

    constructor(nome, idade, corDoPelo, Porte) {
        super(nome, idade);
        this.CorDoPelo = corDoPelo;
        this.Porte = Porte;
    }
}

const claire = new Cachorro("Claire", 10, "preto", "pequeno")

console.log(claire);