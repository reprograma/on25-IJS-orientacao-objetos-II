class Ingresso {
    lote;
    preco_promocional = 20;
    preco_primeiro_lote = 30;
    preco_segundo_lote = 40;
    preco_terceiro_lote = 50;

    constructor(lote) {
        this.lote = lote
    }

    mostrarPreco() {
        if(this.lote === 'promocional') {
            console.log(`Preço do ingresso é : ${this.preco_promocional}`);
        } else if(this.lote === 'primeiro') {}
    }

}

