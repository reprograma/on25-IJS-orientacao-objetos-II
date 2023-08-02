class Animal{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cachorro extends Animal{
    corDoPelo;
    porte;

    constructor(nome, idade, corDoPelo, porte){
        super(nome, idade);
        this.corDoPelo = corDoPelo;
        this.porte = porte;
    }
}

const animal1 = new Animal("filó", 9);
console.log(animal1);
const olivia = new Cachorro("olivia", 7, "branco, marrom e preto", "pequeno a médio");
console.log(olivia);
