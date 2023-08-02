class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo){
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas(){
        console.log(`Nacionalidade: ${this.nacionalidade}, Cor do Cabelo: ${this.corDoCabelo}, Cor dos Olhos: ${this.corDosOlhos}` )
    }
}

class Filha extends Mae{}

const mae = new Mae("brasileira", "marrom", "marrom");
mae.mostrarCaracteristicas()
const filha = new Filha("brasileira", "marrom", "loira");
filha.mostrarCaracteristicas()