class Ingresso {
	lote;
	preco_promocional = 10;
	preco_primeiro_lote = 20;
	preco_segundo_lote = 30;
	preco_terceiro_lote = 40;

	constructor(lote) {
		this.lote = lote;
	}

	mostrarPreco() {
		if (this.lote === 'promocional') {
			console.log(`Preço do ingresso: R$ ${this.preco_promocional}. Lote ${this.lote}`);
		} else if (this.lote === 'primeiro') {
			console.log(`Preço do ingresso: R$ ${this.preco_primeiro_lote}. ${this.lote} lote`);
		} else if (this.lote === 'segundo') {
			console.log(`Preço do ingresso: R$ ${this.preco_segundo_lote}. ${this.lote} lote`);
		} else if (this.lote === 'terceiro') {
			console.log(`Preço do ingresso: R$ ${this.preco_terceiro_lote}. ${this.lote} lote`);
		} else {
			console.log('Lote não encontrado.');
		}
	}
}

const ingresso = new Ingresso('promocional')
ingresso.mostrarPreco()

class IngressoNormal extends Ingresso {
    mostrarPreco() {
        console.log('INGRESSO NORMAL');
        super.mostrarPreco();
    }
}

class IngressoVIP extends Ingresso {
	preco_promocional = 50;
	preco_primeiro_lote = 60;
	preco_segundo_lote = 70;
	preco_terceiro_lote = 80;

    mostrarPreco() {
        console.log('INGRESSO VIP');
        super.mostrarPreco();
    }
}

const ingressoNormal = new IngressoNormal('promocional')
ingressoNormal.mostrarPreco()

const ingVip = new IngressoVIP('primeiro')
ingVip.mostrarPreco()