class Ingresso {
    constructor(lote) {
        this.lote = lote
        this.preco = 50
    }

    mostrarPreco() {
        const precosLote = {
            promocional: this.preco - 10,
            primeiro: this.preco,
            segundo: this.preco + 20,
            terceiro: this.preco + 30
        }
    
        const preco = precosLote[this.lote]
        
        if(preco !== undefined) {
            console.log(`O preço do lote ${this.lote} é R$ ${preco}`)
        } else {
            console.log(`O lote ${this.lote} é inválido`)
        }
    }


}

showMamamoo = new Ingresso('primeiro')
showMamamoo.mostrarPreco()

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    
    mostrarPreco() {
        const precosLoteVIP = {
            promocional: this.preco + 20,
            primeiro: this.preco + 30,
            segundo: this.preco + 50,
            terceiro: this.preco + 70
        }
    
        const preco = precosLoteVIP[this.lote]
        
        if(preco !== undefined) {
            console.log(`O preço do lote VIP ${this.lote} é R$ ${preco}`)
        } else {
            console.log(`O lote ${this.lote} é inválido`)
        }
    }

}

showMamamooVIP = new IngressoVIP('primeiro')
showMamamooVIP.mostrarPreco()