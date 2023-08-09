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
        this.corDoPelo = corDoPelo
        this.porte = porte
    }
}

const animal1 = new Animal("Saroo", 3)
console.log(animal1)

const dog1 = new Cachorro("Sushi", 5, "amarelo", "pequeno")
console.log(dog1)