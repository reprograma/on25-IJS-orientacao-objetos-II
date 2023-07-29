class Ingresso {
    lote;
    preco;

    constructor(lote){
        this.lote = lote

        switch(lote){
            case "primeiro":
                this.preco = 55;
                break;
            case "segundo":
                this.preco = 65;
                break;
            case "terceiro":
                this.preco = 75;
                break;
            default:
                throw new Error("Lote inválido");
        }
    }

    mostrarPreco(){
        return `Preço: $${this.preco}`
    }
}

const ingresso1 = new Ingresso("segundo");
console.log(ingresso1.mostrarPreco());

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
}

const ingresso2 = new IngressoNormal("terceiro");
console.log(ingresso2.mostrarPreco());