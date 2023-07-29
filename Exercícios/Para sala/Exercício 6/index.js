class Animal {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
}

class Cachorro extends Animal {
    corDoPelo;
    porte;

    constructor(nome, idade, corDoPelo, porte){
        super(nome, idade),
        this.corDoPelo = corDoPelo,
        this.porte = porte
    }
}

const animal1 = new Animal("Adolfo", 12);
const cachorro1 = new Cachorro("Lajotinha", 9, "ruivo", "grande");
const cachorro2 = new Cachorro("Sininho", 15, "médio");

let obj = [animal1, cachorro1, cachorro2];
obj.forEach(e => {
    console.log(e);
});