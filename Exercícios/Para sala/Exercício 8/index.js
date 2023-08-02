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
			console.log(`Preço do Ingresso: R$ ${this.preco = this.LOTE_PROMOCIONAL} - Lote Promocional`);
		} else if (this.lote === 'primeiro') {
			console.log(`Preço do Ingresso: R$ ${this.preco = this.PRIMEIRO_LOTE} - Primeiro Lote`);
		} else if (this.lote === 'segundo') {
			console.log(`Preço do Ingresso: R$ ${this.preco = this.SEGUNDO_LOTE} - Segundo Lote`);
		} else if (this.lote === 'terceiro') {
			console.log(`Preço do Ingresso: R$ ${this.preco = this.TERCEIRO_LOTE} - Terceiro Lote`);
		} else {
			this.preco = undefined;
			console.log('Lote não encontrado');
			return;
		}

		console.log(`R$ ${this.preco},00`);
	}
}

class IngressoNormal extends Ingresso {

    mostrarPreco() {
        console.log("Estes são os preços do Ingresso Normal")
        super.mostrarPreco()
	}
}

class IngressoVIP extends Ingresso {
	LOTE_PROMOCIONAL = 50;
	PRIMEIRO_LOTE = 60;
	SEGUNDO_LOTE = 70;
	TERCEIRO_LOTE = 80;

    mostrarPreco(){
        console.log("Estes são os preços do Ingresso VIP");
        super.mostrarPreco();
    }
}