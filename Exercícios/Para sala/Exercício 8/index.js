class Ingresso {
	preco;
	lote;

	LOTE_PROMOCIONAL = 5;
	PRIMEIRO_LOTE = 10;
	SEGUNDO_LOTE = 15;
	TERCEIRO_LOTE = 20;

	constructor(lote) {
		this.lote = lote;
	}

	mostrarPreco() {
		if (this.lote === 'promocional') {
			this.preco = this.LOTE_PROMOCIONAL;
		} else if (this.lote === 'primeiro') {
			this.preco = this.PRIMEIRO_LOTE;
		} else if (this.lote === 'segundo') {
			this.preco = this.SEGUNDO_LOTE;
		} else if (this.lote === 'terceiro') {
			this.preco = this.TERCEIRO_LOTE;
		} else {
			this.preco = undefined;
			console.log('Lote não encontrado');
			return;
		}

		console.log(`${this.lote} lote - R$ ${this.preco},00`);
	}
}

class IngressoNormal extends Ingresso {
    mostrarPreco(){
        console.log("INGRESSO NORMAL");
        super.mostrarPreco();
    }
}

class IngressoVIP extends Ingresso {
	LOTE_PROMOCIONAL = 50;
	PRIMEIRO_LOTE = 60;
	SEGUNDO_LOTE = 70;
	TERCEIRO_LOTE = 80;

    mostrarPreco(){
        console.log("INGRESSO VIP");
        super.mostrarPreco();
    }
}

const ingresso1 = new Ingresso("segundo");
ingresso1.mostrarPreco();
console.log("-----");

const ingresso2 = new IngressoNormal("terceiro");
ingresso2.mostrarPreco();
console.log("-----");

const ingresso3 = new IngressoVIP("primeiro");
ingresso3.mostrarPreco();