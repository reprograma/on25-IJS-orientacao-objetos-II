class Animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, corDoPelo, porte) {
        super(nome, idade)
        this.corDoPelo = corDoPelo
        this.porte = porte
    }
}

sansao = new Cachorro('sansao', 6, 'amarelo', 'médio')
console.log(sansao)