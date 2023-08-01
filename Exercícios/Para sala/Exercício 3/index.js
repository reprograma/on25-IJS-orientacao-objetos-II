class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor (nacionalidade,corDosOlhos,corDoCabelo) {
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas() {
        console.log(`A mãe é nacional de ${this.nacionalidade}, possui a cor dos olhos 
        ${this.corDosOlhos} e a cor do cabelo ${this.corDoCabelo}`)

    }
}

const mae1 = new Mae('brasileira', 'verdes', 'cobre');
mae1.mostrarCaracteristicas();

class filha extends Mae {}

const filha1 = new filha('brasileira', 'verdes', 'pretos');
const retornoFilha1 = filha1.mostrarCaracteristicas();
console.log(retornoFilha1)

