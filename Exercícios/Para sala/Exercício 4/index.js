class Ingresso{
    preco = 10;

    mostrarPreco(){
        console.log(`O valor do ingresso é R$ ${this.preco}`)
    }
}

const ingresso = new Ingresso()
ingresso.mostrarPreco()

class IngressoNormal extends Ingresso{

}

const ingressoNormal = new IngressoNormal()
ingressoNormal.mostrarPreco()

class IngressoVIP extends Ingresso{
    preco = 20
}

const ingressoVip = new IngressoVIP()
ingressoVip.mostrarPreco()