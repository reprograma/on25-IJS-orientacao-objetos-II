class Ingresso {
    preco = 50;

mostrarPreco() {   
    console.log(`Preço do ingresso é R$ ${this.preco}`);
    }
}

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
    preco = 100;
}

const ingressoNormal1 = new IngressoNormal();
const ingressoVip1 = new IngressoVip();