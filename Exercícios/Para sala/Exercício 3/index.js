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
        console.log("Nacionalidade", this.nacionalidade);
        console.log("Cor dos olhos", this.corDosOlhos);
        console.log("Cor dos cabelos", this.corDoCabelo);
    }
}

class Filha extends Mae {}

let mamae = new Mae("br huehuehue", "castanhos", "castranhos");

console.log(mamae.mostrarCaracteristicas());

let filha = new Filha("francesa", "verde", "preto");

console.log(filha.mostrarCaracteristicas());
