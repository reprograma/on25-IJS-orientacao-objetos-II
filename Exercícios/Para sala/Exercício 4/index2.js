class Ingresso {
    preco = 100;

    mostrarPreco() {
        console.log(`Preço do ingresso: R$ ${this.preco}`)
    }
}

const ingresso = new Ingresso()
ingresso.mostrarPreco()

class IngressoNormal extends Ingresso {

}

class IngressoVIP extends Ingresso {
    preco = 200;
}

const ingressoNormal = new IngressoNormal()
const ingressoVIP = new IngressoVIP()

ingressoNormal.mostrarPreco()
ingressoVIP.mostrarPreco()
