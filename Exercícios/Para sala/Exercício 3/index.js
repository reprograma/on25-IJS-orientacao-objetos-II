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
        console.log(`Nacionalidade: ${this.nacionalidade} Cor dos olhos: ${this.corDosOlhos} Cor do cabelo: ${this.corDoCabelo}`)
    }
}

const mami1 = new Mae('brasileira', 'verde', 'loiro') 
console.log(mami1)

class Filha extends Mae {

}

const filha1 = new Filha("brasileira", "castanho", "preto")
console.log(filha1)