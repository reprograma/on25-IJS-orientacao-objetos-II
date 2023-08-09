class Ingresso {
    lote;
    preco_promocional = 100;
    preco_primeiro = 120;
    preco_segundo = 140;
    preco_terceito = 160;

    constructor(lote) {
        this.lote = lote;
    }

    mostrarPreco() {
        if(this.lote === 'promocional') {
            console.log(`O preço do ingreço é R${this.preco_promocional}`)
        } else if(this.lote === 'primeiro'){
            console.log(`O preço do ingreço é R${this.preco_primeiro}`)
        } else if(this.lote === 'segundo') {
            console.log(`O preço do ingreço é R${this.preco_segundo}`)
        } else if (this.lote === 'terceiro') {
            console.log(`O preço do ingreço é R${this.preco_terceito}`)
        } else {
            console.log('Lote não encontrado.')
        }
    }
}

const ingresso1 = new Ingresso('promocional')
const ingresso2 = new Ingresso('primeiro')
const ingresso3 = new Ingresso('segundo')
const ingresso4 = new Ingresso('terceiro')
ingresso1.mostrarPreco()
ingresso2.mostrarPreco()
ingresso3.mostrarPreco()
ingresso4.mostrarPreco()

class IngressoNormal extends Ingresso {

}

class IngressoVIP extends Ingresso {
    preco_promocional = 200;
    preco_primeiro = 220;
    preco_segundo = 240;
    preco_terceito = 260;
}

const ingVip1 = new IngressoVIP('promocional')
ingVip1.mostrarPreco()

