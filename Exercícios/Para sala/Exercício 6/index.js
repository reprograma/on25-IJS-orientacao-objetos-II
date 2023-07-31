class Animal {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let bichin = new Animal("sophia", 10);
console.log(bichin);

class Cachorro extends Animal {
    corDoPelo;
    porte;

    constructor(nome, idade, corDoPelo, porte) {
        super(nome, idade);
        this.corDoPelo = corDoPelo;
        this.porte = porte
    }
}

let zozo = new Cachorro("zoe", 10, "caramelo", "médio");
console.log(zozo);