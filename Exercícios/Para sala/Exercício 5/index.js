class Ingresso {
    lote;
    preco = 10;

    constructor(lote){
        this.lote = lote;
    }
    mostrarPreco(){
        if(this.lote === 'terceiro'){
            this.preco = this.preco * 4;
            console.log(`O igresso do ${this.lote} lote custa R$ ${this.preco},00`)
        }else if(this.lote === 'segundo'){
            this.preco = this.preco * 3;
            console.log(`O igresso do ${this.lote} lote custa R$ ${this.preco},00`)
        }else if(this.lote === 'primeiro'){
            this.preco = this.preco * 2;
            console.log(`O igresso do ${this.lote} lote custa R$ ${this.preco},00`)
        }else{
            console.log(`O igresso do ${this.lote} lote custa R$ ${this.preco},00`)
        }
    }
}

class IngressoNormal extends Ingresso {
    constructor(lote){
        super(lote)
    }
}

class IngressoVIP extends Ingresso {
    preco = this.preco * 2;

    constructor(lote){
        super(lote)
    }
}

const ingressoPromo = new IngressoNormal('promocional')
const ingressoPrimeiro = new IngressoNormal('primeiro')
const ingressoSegundo = new IngressoNormal('segundo')
const ingressoTerceiro = new IngressoNormal('terceiro')

ingressoPromo.mostrarPreco()
ingressoPrimeiro.mostrarPreco()
ingressoSegundo.mostrarPreco()
ingressoTerceiro.mostrarPreco()

const ingressoPromoVIP = new IngressoVIP('promocional')
const ingressoPrimeiroVIP = new IngressoVIP('primeiro')
const ingressoSegundoVIP = new IngressoVIP('segundo')
const ingressoTerceiroVIP = new IngressoVIP('terceiro')

ingressoPromoVIP.mostrarPreco()
ingressoPrimeiroVIP.mostrarPreco()
ingressoSegundoVIP.mostrarPreco()
ingressoTerceiroVIP.mostrarPreco()