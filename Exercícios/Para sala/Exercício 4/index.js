class Ingresso {
    preco = 10
    
    mostrarPreco() {
        console.log(`Preço do ingresso: R$ ${this.preco}`)
    }
}

//const ingresso1 = new Ingresso()
//ingresso1.mostrarPreco()



class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
    preco = 50
}

const ingressoNormal1 = new IngressoNormal()
ingressoNormal1.mostrarPreco()
const ingressoVip1 = new IngressoVip()
ingressoVip1.mostrarPreco()