class Ingresso {
    constructor() {
        this.preco = 50
    }

    mostrarPreco() {
        console.log(this.preco)
    }

}

mamamoo = new Ingresso()
mamamoo.mostrarPreco()

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    constructor() {
        super()
        this.preco += 50
    }

}

mamamooVIP = new IngressoVIP
mamamooVIP.price = 100
mamamooVIP.mostrarPreco()