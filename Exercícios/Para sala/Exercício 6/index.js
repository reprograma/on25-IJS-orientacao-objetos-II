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

const cachorro1 = new Cachorro('Toy', 14, 'bege', 'pequeno')
console.log(cachorro1)