class Ingresso {
   lote
   preco

   constructor(lote){
       this.lote = lote
       this.preco = 0
   }

   mostrarPreco() {
    if(this.lote == `promocional`){
        return this.preco += 10
    } else if(this.lote == `primeiro`){
        return this.preco += 20
    } else if(this.lote == `segundo`){
        return this.preco += 30
    } else if(this.lote == `terceiro`){
        return this.preco += 40
    } else {
        return this.preco
    }
   }

}

class IngressoVip extends Ingresso{
    constructor(lote){
        super(lote)
        this.preco = 20
    }

}

const ingresso1 = new Ingresso(`promocional`)
console.log(ingresso1)
ingresso1.mostrarPreco()

const ingresso2 = new IngressoVip(`promocional`)
console.log(ingresso2)
ingresso2.mostrarPreco()