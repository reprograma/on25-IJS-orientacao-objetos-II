class Ingresso {
  preco = 300;

  mostrarPreco() {
    console.log(`O valor do ingresso é ${this.preco},00.`);
  }
}

class IngressoNormal extends Ingresso {}
// class IngressoVip extends Ingresso {
//   adicional = 500;
//   preco = this.preco + (this.adicional + this.preco)
// }


class IngressoVip extends Ingresso {
  preco = 500;
}
const ingressoDjavan =  new Ingresso;
const ingressoDjavanVIP =  new IngressoVip;

console.log(ingressoDjavan)
console.log(ingressoDjavan.mostrarPreco())
console.log(ingressoDjavanVIP)
console.log(ingressoDjavanVIP.mostrarPreco())