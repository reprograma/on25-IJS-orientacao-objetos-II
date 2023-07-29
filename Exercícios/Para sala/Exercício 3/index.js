class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas() {
        console.log(`Características: essa pesso é ${this.nacionalidade}, tem a cor dos olhos ${this.corDosOlhos} e cor do cabelo ${this.corDoCabelo}`)
    }
}

const mae = new Mae("brasileira", "castanho", "loiro")

mae.mostrarCaracteristicas()