class Mae {
    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade
        this.corDosOlhos = corDosOlhos
        this.corDoCabelo = corDoCabelo
    }

    mostrarCaracteristicas() {
        console.log(`Caracteristicas de ${this}`)
        console.log(`Nacionalidade: ${this.nacionalidade}, Cor dos Olhos: ${this.corDosOlhos}, Cor do Cabelo: ${this.corDoCabelo}`)
    }
}

Lulu = new Mae('Brasileira', 'Castanho-escuro', 'Castanho-escuro')

Lulu.mostrarCaracteristicas()

class Filha extends Mae {}

Yane = new Filha('Brasileira', 'Preto', 'Preto')
Yane.mostrarCaracteristicas()