class Mae {
<<<<<<< HEAD
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

constructor(nacionalidade, corDosOlhos, corDoCabelo) {
    this.nacionalidade = nacionalidade;
    this.corDosOlhos = corDosOlhos;
    this.corDoCabelo = corDoCabelo
};

mostrarCaracteristicas() {
    console.log(`A nacionalidade ${this.nacionalidade} tem olhos da cor ${this.corDosOlhos}, cabelos ${this.corDoCabelo}`);
  }
}
const mae1 = new Mae("espanhola", "castanho", "preto");

mae1.mostrarCaracteristicas()

class Filha extends Mae {}

const alessandra = new Filha("italiana", "azul", "loiro");
alessandra.mostrarCaracteristicas();

const elvira = new Filha("italiana", "castanho", "castanho");
elvira.mostrarCaracteristicas();

class Neta extends Filha {
    constructor(nacionalidade, corDosOlhos, corDoCabelo, idade) {
        super(nacionalidade, corDosOlhos, corDoCabelo);
        this.idade = idade;
}}

const giovana = new Neta("brasileira", "azul", "vermelho", 23);
giovana.mostrarCaracteristicas()
console.log(giovana)
=======
	nacionalidade;
	corDosOlhos;
	corDoCabelo;

	constructor(nacionalidade, corDosOlhos, corDoCabelo) {
		this.nacionalidade = nacionalidade;
		this.corDosOlhos = corDosOlhos;
		this.corDoCabelo = corDoCabelo;
	}

	mostrarCaracteristicas() {
		return `Essa pessoa é ${this.nacionalidade}, tem olhos ${this.corDosOlhos} e cabelo da cor ${this.corDoCabelo}`;
	}
}

const mae1 = new Mae('brasileira', 'pretos', 'castanho');
const retorno = mae1.mostrarCaracteristicas();
console.log(retorno);

class Filha extends Mae {}

const filha1 = new Filha('brasileira', 'pretos', 'ruivo');
const retornoFilha1 = filha1.mostrarCaracteristicas();
console.log(retornoFilha1);
>>>>>>> a846e22c0633d363495d431f20260788415d5397
