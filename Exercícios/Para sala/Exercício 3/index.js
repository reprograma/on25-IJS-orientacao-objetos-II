class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade,
        this.corDosOlhos = corDosOlhos,
        this.corDoCabelo = corDoCabelo
    }

    mostrarCaracteristicas(){
        return `Nacionalidade: ${this.nacionalidade}; Cor dos olhos: ${this.corDosOlhos}; Cor do cabelo: ${this.corDoCabelo}.`
    }
}

class Filha extends Mae{};

const mae1 = new Mae("brasileira", "castanho", "castanho escuro");
console.log(mae1.mostrarCaracteristicas());

const filha1 = new Filha("brasileira", "verde", "castanho");
console.log(filha1.mostrarCaracteristicas());