class Ingresso {
    preco = 10.00;

    mostrarPreco() {
        console.log(`O preco do ingresso: R$ ${this.preco}`)
    }
}

class IngressoNormal extends Ingresso {

}

class IngressoVIP extends Ingresso {
    preco = 50;

}

const ingresso1 = new Ingresso();
ingresso1.mostrarPreco();

const ingressoNormal1 = new IngressoNormal();

const ingressoVIP1 = new IngressoVIP();
ingressoVIP1.mostrarPreco();