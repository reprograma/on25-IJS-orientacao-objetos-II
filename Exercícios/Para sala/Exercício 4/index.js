class Ingresso {
	preco = 10;

	mostrarPreco() {
		console.log(`Preço do ingresso: R$ ${this.preco}`);
	}
}

// const ingresso1 = new Ingresso()
// ingresso1.mostrarPreco();

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
	preco = 50;
}

const ingressoNormal1 = new IngressoNormal();
const ingressoVip1 = new IngressoVIP();

ingressoNormal1.mostrarPreco();
ingressoVip1.mostrarPreco();
