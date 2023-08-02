class Ingresso {
    preco = 10;

    mostrarPreco() {
        console.log(`O preço do ingresso é ${this.preco},00 conto`);
    }

}

// const ingresso1 = new Ingresso();
// ingresso1.mostrarPreco();

class IngressoNormal extends Ingresso {

}

class IngressoVip extends Ingresso {
    preco = 50;
}

const ingressoVip1 = new IngressoVip();
ingressoVip1.mostrarPreco();
