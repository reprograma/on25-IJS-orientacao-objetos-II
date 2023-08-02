class Ingresso{
    lote;
    preco = 0;
    //OUTRO JEITO DE FAZER
    // preco_promocional = 10
    // preco_primeiro_lote = 20
    // preco_segundo_lote = 30
    // preco_terceiro_lote = 40

    constructor(lote){
        this.lote = lote;
    }

    mostrarPreco(){
        //exemplo de console
        // if(this.lote === 'promocional'){
        //     console.log(`Preço do ingresso: R$ ${this.preco_promocional}`)
        // }
        if(this.lote === 'promocional'){
            this.preco += 10;
            console.log(`O valor do ingresso promocional é R$ ${this.preco}`);
        } else if (this.lote === 'primeiro'){
            this.preco += 20;
            console.log(`O valor do primeiro lote é R$ ${this.preco}`);
        } else if(this.lote === 'segundo'){
            this.preco += 30;
            console.log(`O valor do segundo lote é R$ ${this.preco}`);
        } else if(this.lote === 'terceiro'){
            this.preco += 40;
            console.log(`O valor do terceiro lote é R$ ${this.preco}`);
        } else {
            console.log("Este lote não existe ):");
        }
    }
}
const ingresso1 = new Ingresso('quarto');
ingresso1.mostrarPreco()

class IngressoNormal extends Ingresso{}

class IngressoVIP extends Ingresso{
    preco = 10
}

const ingressoVip1 = new IngressoVIP('primeiro')
ingressoVip1.mostrarPreco()