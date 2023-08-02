class Ingresso{
    preco = 15;

    mostrarPreco(){
        console.log(`O igresso custa R$ ${this.preco},00`)
    }
}

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    preco = this.preco + (this.preco * 1.25);
}

const ingresso1 = new IngressoNormal()
const ingresso2 = new IngressoVIP()
ingresso1.mostrarPreco()
ingresso2.mostrarPreco()