class Ingresso {
    lote;
    lotePromocional = 5;
    lotePrimeiro = 10;
    loteSegundo = 20;
    loteTerceiro = 30;
    preco;
    constructor(lote){
        this.lote = lote;
    }
    mostrarPreco() {
        if (this.lote === 'promocional') {
            console.log(`LOTE PROMOCIONAL. Preço do ingresso: R$${this.lotePromocional}`)
        }
        else if (this.lote === 'primeiro') {
            console.log(`PRIMEIRO LOTE. Preço do ingresso: R$${this.lotePrimeiro}`)
        }
        else if (this.lote === 'segundo') {
            console.log(`SEGUNDO LOTE. Preço do ingresso: R$${this.loteSegundo}`)
        }
        else if (this.lote === 'terceiro') {
            console.log(`TERCEIRO LOTE. Preço do ingresso: R$${this.loteTerceiro}`)
        } else {
            console.log(`Lote não encontrado.`)
        }
    }
}

const ingresso1 = new Ingresso('promocional')
ingresso1.mostrarPreco()