class Animal {
    nome
    idade

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class Cachorro extends Animal {
    corPelo
    porte

    constructor(nome, idade, corPelo, porte){
        super(nome, idade)
        this.corPelo = corPelo
        this.porte = porte
    }
}

const animal = new Animal ("aslam", 6)
console.log(animal)
const doguinho = new Cachorro("pipo", 2, "marrom", "pequeno")
console.log(doguinho)