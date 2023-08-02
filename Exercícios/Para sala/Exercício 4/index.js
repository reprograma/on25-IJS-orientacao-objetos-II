class Ingresso{
    preco = 10;


    mostrarPreco(){
        return console.log(`O preço do ingresso é: R$ ${this.preco},00`)
    }
}

const Ingresso1 = new Ingresso();
Ingresso1.mostrarPreco()

class IngressoNormal extends Ingresso{

}

class IngressoVIP extends Ingresso{
   preco = 50;

}

const IngressoNormal1 = new IngressoNormal()
const IngressoVIP1 = new IngressoVIP()

IngressoNormal1.mostrarPreco()
IngressoVIP1.mostrarPreco()


