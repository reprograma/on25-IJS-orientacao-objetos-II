class Animal {
    nome
    idade

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, corDoPelo, porte){
        super(nome, idade)
        this.corDoPelo = corDoPelo
        this.porte = porte
    }
}

//const animal = new Animal("Tico", 4)
//console.log(animal)
const cachorro = new Cachorro("Bella", 4, "preto e branco", "médio")
console.log(cachorro)