class Ingresso {
    preco = 55;

    mostrarPreco(){
        return `Preço: $${this.preco}`
    }
}

const ingresso1 = new Ingresso();
console.log(ingresso1.mostrarPreco());

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    preco = 105;
}

const ingresso2 = new IngressoNormal();
console.log(ingresso2.mostrarPreco());

const ingresso3 = new IngressoVIP();
console.log(ingresso3.mostrarPreco());