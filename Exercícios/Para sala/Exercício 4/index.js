class Ingresso {
  preco = 10;

  mostrarPreco() {
    console.log(`Preço do ingresso: R$ ${this.preco},00`);
  }
}

const ingresso1 = new Ingresso();
ingresso1.mostrarPreco();

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
  preco = 50;
}

const IngressoNormal1 = new IngressoNormal();
const IngressoVip1 = new IngressoVip();

IngressoNormal1.mostrarPreco();
IngressoVip1.mostrarPreco();
