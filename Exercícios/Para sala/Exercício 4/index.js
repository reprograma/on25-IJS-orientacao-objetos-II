class Ingresso {
  preco = 5.10;

  mostrarPreco() {
    console.log(`Preço do ingresso R$ ${this.preco}`)
  }
}
const ingresso = new Ingresso()
ingresso.mostrarPreco()

class IngressoNormal extends Ingresso {}
const ingressoNormal = new IngressoNormal()
ingressoNormal.mostrarPreco()

class IngressoVIP extends Ingresso {
  preco = 7.90;
}
const ingressoVIP = new IngressoVIP()
ingressoVIP.mostrarPreco()
