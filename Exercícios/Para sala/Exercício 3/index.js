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
        return `Essa pessoa é ${this.nacionalidade}, tem olhos ${this.corDosOlhos} e a cor do cabelo é ${this.corDoCabelo}.`;
    }
}

class Filha extends Mae { }

const mae1 = new Mae("Brasileira", "castanho", "castanho escuro");
const retorno = mae1.mostrarCaracteristicas()
console.log(retorno)

const filha1 = new Filha("Brasileira", "azul", "castanho claro");
const retornoFilha1 = filha1.mostrarCaracteristicas()
console.log(retornoFilha1)
