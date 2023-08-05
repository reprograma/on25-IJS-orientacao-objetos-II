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
        console.log(`Essa pessoa é ${this.nacionalidade} com olhos ${this.corDosOlhos} e a cor do cabelo é ${this.corDoCabelo}`
        );
    }
}

const mae1 = new Mae('brasileira', 'castanho', 'preto');

class Filha extends Mae {}
const filha1 = new Filha ('brasileira', 'preto', 'loura');
const retorno = mae1.mostrarCaracteristicas();
console.log(retorno, filha1);