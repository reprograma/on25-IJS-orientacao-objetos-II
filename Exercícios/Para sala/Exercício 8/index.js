class Ingresso {
    lote
    preco_promocional = 10
    preco_primeiro_lote = 20
    preco_segundo_lote = 30
    preco_terceiro_lote = 40

    constructor(lote) {
        this.lote = lote
    }

    mostrarPreço(){
        if(this.lote === "promocional") {
            console.log(`Preço do Ingresso: R$ ${this.preco_promocional} - Lote Promocional`)
        } else if(this.lote === "primeiro") {
            console.log(`Preço do Ingresso: R$ ${this.preco_primeiro_lote} - Primeiro lote`)
        } else if(this.lote === "segundo") {
            console.log(`Preço do Ingresso: R$ ${this.preco_segundo_lote} - Segundo lote`)
        } else if(this.lote === "terceiro") {
            console.log(`Preço do Ingresso: R$ ${this.preco_terceiro_lote} - Terceiro lote`)
        } else {
            console.log(`Lote não encontrado`)
        }
    }
}

//const ingresso1 = new Ingresso("segundo")
//ingresso1.mostrarPreço()

class IngressoNormal extends Ingresso {
    mostrarPreço() {
        console.log("Ingresso Normal")
        super.mostrarPreço()
    }
}

class IngressoVip extends Ingresso {
    preco_promocional = 50
    preco_primeiro_lote = 60
    preco_segundo_lote = 70
    preco_terceiro_lote = 80

    mostrarPreço() {
        console.log("Ingresso VIP")
        super.mostrarPreço()
    }
}

const ingressoNormal1 = new IngressoNormal("segundo")
ingressoNormal1.mostrarPreço()
const ingressoVIP1 = new IngressoVip("segundo")
ingressoVIP1.mostrarPreço()