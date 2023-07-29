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
