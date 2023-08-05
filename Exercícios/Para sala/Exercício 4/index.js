class Ingresso {
    preco = 15;
mostrarPreco() {
    console.log(`O valor do ingresso é de R$${this.preco},00`)
    }
}

//const ing = new Ingresso
//ing.mostrarPreco()

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
   preco = 30;
}

const ingNormal = new IngressoNormal
ingNormal.mostrarPreco()

const ingVIP = new IngressoVIP
ingVIP.mostrarPreco()