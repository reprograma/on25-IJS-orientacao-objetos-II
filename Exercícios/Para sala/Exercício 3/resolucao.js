class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade;
        this.corDoCabelo = corDoCabelo;
        this.corDosOlhos = corDosOlhos;
    }
    mostrarCaracteristicas() {
        console.log(`Nacionalidade: ${this.nacionalidade}, Cor do Cabelo: ${this.corDoCabelo}, Cor dos olhos: ${this.corDosOlhos}`);
    }
}

class Filho extends Mae {
    idade;
}

const mae1 = new Mae('brasileira', 'preto', 'castanho');
mae1.mostrarCaracteristicas();

const filha1 = new Filho('brasileira', 'ruivo', 'azuis');
filha1.mostrarCaracteristicas();

console.log(filha1 instanceof Mae)