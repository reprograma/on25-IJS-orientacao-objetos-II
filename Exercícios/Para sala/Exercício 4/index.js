class Ingresso {
    preco = 10;

    mostraPreco () {
        console.log(`O Preço do ingresso é R$ ${this.preco}`);
    }
}

//const ingresso1 = new Ingresso();
//ingresso1.mostraPreco();

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso{
    preco = 50;
}

const IngressoNormal1 = new IngressoNormal();
const ingressoVip1 = new IngressoVip();

ingressoVip1.mostraPreco();
IngressoNormal1.mostraPreco();