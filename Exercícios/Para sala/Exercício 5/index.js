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
        if(this.lote === 'promocional') {
            console.log(`Preço do ingresso: R$ ${this.preco_promocional}`);
        } else if(this.lote === 'primeiro') {
            console.log(`Preço do ingresso: R$ ${this.preco_primeiro_lote}`);
        } else if(this.lote === 'segundo') {
            console.log(`Preço do ingresso: R$ ${this.preco_segundo_lote}`);
        } else if(this.lote === 'segundo') {
            console.log(`Preço do ingresso: R$ ${this.preco_segundo_lote}`);
        } else if(this.lote === 'terceiro') {
            console.log(`Preço do ingresso: R$ ${this.preco_terceiro_lote}`);
        } else {
            console.log(`Lote não encontrado`)
        }
    }
}

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    preco_promocional = 50;
    preco_primeiro_lote = 60;
    preco_segundo_lote = 70;
    preco_terceiro_lote = 80;
}

